import * as THREE from 'three';
import CONFIG from './config';
import { PATHS, FOOD_TYPES, GEOMETRIES } from './constants';
import { Logger } from './debugLogger.js';

async function loadTexture(loader, path, applySRGB = true, configFn = null) {
    return new Promise((resolve, reject) => {
        loader.load(path, (texture) => {
            if (applySRGB) texture.colorSpace = THREE.SRGBColorSpace;
            if (configFn) configFn(texture);
            resolve(texture);
        }, undefined, (err) => {
            Logger.system.error(`Failed to load texture: ${path}`, err);
            reject(err);
        });
    });
}

export async function loadAndCreateMaterials() {
    const loader = new THREE.TextureLoader();
    const materials = {
        snake: {},
        enemy: {},
        food: {},
        obstacle: {},
        particle: null,
        ground: null,
        wall: null,
        grass: null,
        skybox: null,
    };
    let snakeSpriteSheetTexture;
    let enemySnakeSpriteSheetTexture;

    try {
        // Load textures concurrently
        const [
            snakeSheetTex, enemySnakeSheetTex, particleTex, skyboxTex, groundTileTex, wallStoneTex, wallIvyTex,
            treeLeavesTexture, treeTrunkTexture, flowerBushTexture,
            pinkFlowerTexture, whiteDaisyTexture, whiteTulipTexture, yellowFlowerTexture,
            ...foodTextures
        ] = await Promise.all([
            loadTexture(loader, PATHS.snakeSheet, true, (t) => {
                t.magFilter = THREE.NearestFilter;
                t.minFilter = THREE.NearestFilter;
                snakeSpriteSheetTexture = t; // Assign to shared var
            }),
            // Load the enemy snake sprite sheet
            loadTexture(loader, PATHS.enemySnakeSheet, true, (t) => {
                t.magFilter = THREE.NearestFilter;
                t.minFilter = THREE.NearestFilter;
                enemySnakeSpriteSheetTexture = t; // Assign to shared var
            }),
            loadTexture(loader, PATHS.particle, true),
            loadTexture(loader, PATHS.skybox, true, (t) => {
                t.magFilter = THREE.NearestFilter;
                t.minFilter = THREE.LinearFilter;
            }),
            loadTexture(loader, PATHS.groundTile, true, (t) => {
                t.wrapS = THREE.RepeatWrapping;
                t.wrapT = THREE.RepeatWrapping;
                t.repeat.set(CONFIG.GRID_SIZE / 4, CONFIG.GRID_SIZE / 4); // Adjusted repeat scale for grass pattern
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter; // Use mipmaps for ground
            }),
            loadTexture(loader, PATHS.wallStone, true, (t) => {
                t.wrapS = THREE.RepeatWrapping;
                t.wrapT = THREE.RepeatWrapping;
                 // Adjust repeat based on geometry aspect ratio if needed
                t.repeat.set(CONFIG.GRID_SIZE / 3, CONFIG.WALL_HEIGHT * 1);
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter;
            }),
            loadTexture(loader, PATHS.wallIvy, true, (t) => {
                t.wrapS = THREE.RepeatWrapping;
                t.wrapT = THREE.RepeatWrapping;
                // Adjust repeat based on wall dimensions
                t.repeat.set(CONFIG.GRID_SIZE / 3, CONFIG.WALL_HEIGHT * 1);
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter;
            }),
            loadTexture(loader, PATHS.treeLeaves, true, (t) => {
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter;
            }),
            loadTexture(loader, PATHS.treeTrunk, true, (t) => {
                t.wrapS = THREE.RepeatWrapping;
                t.wrapT = THREE.RepeatWrapping;
                t.repeat.set(1, 1); // Default repeat
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter;
            }),
            loadTexture(loader, PATHS.flowerBush, true, (t) => {
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter;
            }),
            loadTexture(loader, PATHS.pinkFlower, true, (t) => {
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter;
            }),
            loadTexture(loader, PATHS.whiteDaisy, true, (t) => {
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter;
            }),
            loadTexture(loader, PATHS.whiteTulip, true, (t) => {
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter;
            }),
            loadTexture(loader, PATHS.yellowFlower, true, (t) => {
                t.magFilter = THREE.LinearFilter;
                t.minFilter = THREE.LinearMipmapLinearFilter;
            }),
            ...FOOD_TYPES.map(ft => loadTexture(loader, ft.svgPath, true, (t) => {
                t.magFilter = THREE.LinearFilter; // Linear for food seems fine
                t.minFilter = THREE.LinearMipmapLinearFilter; // Mipmaps useful if food shrinks/grows
            }))
        ]);

        Logger.system.info("Core textures loaded.");

        // --- Create Materials ---

        // Particle Material
        materials.particle = new THREE.MeshBasicMaterial({
            map: particleTex,
            transparent: true,
            vertexColors: false, // Not using vertex colors here
            side: THREE.DoubleSide,
            depthWrite: false, // Crucial for additive blending / transparency
            blending: THREE.AdditiveBlending
        });

        // Snake Materials
        const baseSnakeParams = { side: THREE.FrontSide };
        const createSpriteMaterial = (offsetX, offsetY, spriteSheetTexture) => {
            if (!spriteSheetTexture) return new THREE.MeshLambertMaterial({ color: 0xff00ff, ...baseSnakeParams }); // Fallback
            const mat = new THREE.MeshLambertMaterial(baseSnakeParams);
            mat.map = spriteSheetTexture.clone(); // Clone map for unique offsets
            mat.map.needsUpdate = true; // Ensure clone is used
            const r = 1.0 / CONFIG.SPRITE_SHEET_DIM;
            mat.map.offset.set(offsetX * r, offsetY * r);
            mat.map.repeat.set(r, r);
            return mat;
        };
        materials.snake.head1 = createSpriteMaterial(0, 1, snakeSpriteSheetTexture); // Top Left in SVG was head1
        materials.snake.head2 = createSpriteMaterial(1, 1, snakeSpriteSheetTexture); // Top Right
        materials.snake.body1 = createSpriteMaterial(0, 0, snakeSpriteSheetTexture); // Bottom Left
        materials.snake.body2 = createSpriteMaterial(1, 0, snakeSpriteSheetTexture); // Bottom Right

        // Enemy Materials
        const baseEnemyParams = { side: THREE.FrontSide };
        const createEnemySpriteMaterial = (offsetX, offsetY, spriteSheetTexture) => {
            if (!spriteSheetTexture) return new THREE.MeshLambertMaterial({ color: 0xff00ff, ...baseEnemyParams }); // Fallback
            const mat = new THREE.MeshLambertMaterial(baseEnemyParams);
            mat.map = spriteSheetTexture.clone(); // Clone map for unique offsets
            mat.map.needsUpdate = true; // Ensure clone is used
            const r = 1.0 / CONFIG.SPRITE_SHEET_DIM;
            mat.map.offset.set(offsetX * r, offsetY * r);
            mat.map.repeat.set(r, r);
            return mat;
        };
        materials.enemy.head1 = createEnemySpriteMaterial(0, 1, enemySnakeSpriteSheetTexture); // Top Left in SVG was head1
        materials.enemy.head2 = createEnemySpriteMaterial(1, 1, enemySnakeSpriteSheetTexture); // Top Right
        materials.enemy.body1 = createEnemySpriteMaterial(0, 0, enemySnakeSpriteSheetTexture); // Bottom Left
        materials.enemy.body2 = createEnemySpriteMaterial(1, 0, enemySnakeSpriteSheetTexture); // Bottom Right

        // Food Materials
        FOOD_TYPES.forEach((foodType, index) => {
            const texture = foodTextures[index];
            if (foodType.type === 'normal') {
                // Normal food keeps the same appearance with texture
                if (texture) {
                    materials.food[foodType.type] = new THREE.MeshLambertMaterial({
                        map: texture,
                        side: THREE.FrontSide,
                        color: 0xffffff // White color to allow texture to show properly
                    });
                } else {
                    // Fallback if texture failed
                    materials.food[foodType.type] = new THREE.MeshLambertMaterial({
                        color: foodType.colorHint || 0xff00ff,
                        emissive: 0x222222 // Small amount of emissive to make up for lack of reflectivity
                    });
                }
            } else {
                // Frog powerups use solid colors instead of textures for a blocky look
                materials.food[foodType.type] = new THREE.MeshLambertMaterial({
                    color: foodType.colorHint,
                    side: THREE.FrontSide,
                    emissive: 0x222222, // Add a bit of emissive glow to compensate for loss of metalness
                    transparent: foodType.type === 'ghost', // Ghost frog needs transparency
                    opacity: foodType.type === 'ghost' ? 0.7 : 1.0 // Ghost frog opacity
                });
            }
        });

        // Obstacle Materials
        materials.obstacle.tree_trunk = new THREE.MeshLambertMaterial({ 
            map: treeTrunkTexture, 
            color: 0x966F33
        });
        materials.obstacle.tree_leaves = new THREE.MeshLambertMaterial({ 
            map: treeLeavesTexture, 
            color: 0x388E3C,
            transparent: true, // Enable transparency for the leaves
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the leaves
        });
        materials.obstacle.bush = new THREE.MeshLambertMaterial({ 
            color: 0x689F38
        });
        materials.obstacle.flower_bush = new THREE.MeshLambertMaterial({ 
            map: flowerBushTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the bush
        });
        materials.obstacle.pink_flower = new THREE.MeshLambertMaterial({ 
            map: pinkFlowerTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the flower
        });
        materials.obstacle.white_daisy = new THREE.MeshLambertMaterial({ 
            map: whiteDaisyTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the flower
        });
        materials.obstacle.white_tulip = new THREE.MeshLambertMaterial({ 
            map: whiteTulipTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the flower
        });
        materials.obstacle.yellow_flower = new THREE.MeshLambertMaterial({ 
            map: yellowFlowerTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the flower
        });

        // Environment Materials
        materials.ground = new THREE.MeshLambertMaterial({ 
            map: groundTileTex, 
            side: THREE.FrontSide,
            // Apply color tint if configured
            color: CONFIG.GROUND_COLOR || 0xFFFFFF // Use white (no tint) if GROUND_COLOR is null
        });
        Logger.system.info("Ground material created with color:", CONFIG.GROUND_COLOR ? 
            "#" + CONFIG.GROUND_COLOR.toString(16).padStart(6, '0') : "No tint (white)");
        
        // Create wall material with ivy texture
        materials.wall = new THREE.MeshLambertMaterial({
            map: wallIvyTex,
            color: 0xffffff, // Use white to let the texture color show through
            side: THREE.DoubleSide
        });
        
        materials.grass = new THREE.MeshLambertMaterial({ 
            color: 0x558B2F, 
            side: THREE.DoubleSide
        }); // Simple green for grass blades
        
        // Skybox should remain as MeshBasicMaterial
        materials.skybox = new THREE.MeshBasicMaterial({ 
            map: skyboxTex, 
            side: THREE.BackSide, 
            fog: false 
        });


        Logger.system.info("Materials created successfully.");
        return materials;

    } catch (error) {
        Logger.system.error("Error during texture loading or material creation:", error);
        // Maybe return partially created materials or throw error?
        // Returning what we have allows fallback materials to potentially work
        return materials;
    }
}