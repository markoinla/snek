import * as THREE from 'three';
import * as CONFIG from './config.js';
import { PATHS, FOOD_TYPES, GEOMETRIES } from './constants.js';

async function loadTexture(loader, path, applySRGB = true, configFn = null) {
    return new Promise((resolve, reject) => {
        loader.load(path, (texture) => {
            if (applySRGB) texture.colorSpace = THREE.SRGBColorSpace;
            if (configFn) configFn(texture);
            resolve(texture);
        }, undefined, (err) => {
            console.error(`Failed to load texture: ${path}`, err);
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

        console.log("Core textures loaded.");

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
        const baseSnakeParams = { side: THREE.FrontSide, roughness: 0.6, metalness: 0.1 };
        const createSpriteMaterial = (offsetX, offsetY, spriteSheetTexture) => {
            if (!spriteSheetTexture) return new THREE.MeshStandardMaterial({ color: 0xff00ff, ...baseSnakeParams }); // Fallback
            const mat = new THREE.MeshStandardMaterial(baseSnakeParams);
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
        materials.enemy.head1 = createSpriteMaterial(0, 1, enemySnakeSpriteSheetTexture); // Top Left in SVG was head1
        materials.enemy.head2 = createSpriteMaterial(1, 1, enemySnakeSpriteSheetTexture); // Top Right
        materials.enemy.body1 = createSpriteMaterial(0, 0, enemySnakeSpriteSheetTexture); // Bottom Left
        materials.enemy.body2 = createSpriteMaterial(1, 0, enemySnakeSpriteSheetTexture); // Bottom Right

        // Food Materials
        FOOD_TYPES.forEach((foodType, index) => {
            const texture = foodTextures[index];
            if (foodType.type === 'normal') {
                // Normal food keeps the same appearance with texture
                if (texture) {
                    materials.food[foodType.type] = new THREE.MeshStandardMaterial({
                        map: texture,
                        side: THREE.FrontSide,
                        roughness: 0.5,
                        metalness: 0.1
                    });
                } else {
                    // Fallback if texture failed
                    materials.food[foodType.type] = new THREE.MeshStandardMaterial({
                        color: foodType.colorHint || 0xff00ff,
                        roughness: 0.5,
                        metalness: 0.1
                    });
                }
            } else {
                // Frog powerups use solid colors instead of textures for a blocky look
                materials.food[foodType.type] = new THREE.MeshStandardMaterial({
                    color: foodType.colorHint,
                    side: THREE.FrontSide,
                    roughness: 0.3,  // Smoother surface for frogs
                    metalness: 0.2,  // Slightly more metallic for a vibrant look
                    transparent: foodType.type === 'ghost', // Ghost frog needs transparency
                    opacity: foodType.type === 'ghost' ? 0.7 : 1.0 // Ghost frog opacity
                });
            }
        });

        // Obstacle Materials
        materials.obstacle.tree_trunk = new THREE.MeshStandardMaterial({ 
            map: treeTrunkTexture, 
            color: 0x966F33, 
            roughness: 0.9, 
            metalness: 0.0
        });
        materials.obstacle.tree_leaves = new THREE.MeshStandardMaterial({ 
            map: treeLeavesTexture, 
            color: 0x388E3C, 
            roughness: 0.8, 
            metalness: 0.0,
            transparent: true, // Enable transparency for the leaves
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the leaves
        });
        materials.obstacle.bush = new THREE.MeshStandardMaterial({ color: 0x689F38, roughness: 0.85, metalness: 0.0 });
        materials.obstacle.flower_bush = new THREE.MeshStandardMaterial({ 
            map: flowerBushTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            roughness: 0.85, 
            metalness: 0.0,
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the bush
        });
        materials.obstacle.pink_flower = new THREE.MeshStandardMaterial({ 
            map: pinkFlowerTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            roughness: 0.85, 
            metalness: 0.0,
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the flower
        });
        materials.obstacle.white_daisy = new THREE.MeshStandardMaterial({ 
            map: whiteDaisyTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            roughness: 0.85, 
            metalness: 0.0,
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the flower
        });
        materials.obstacle.white_tulip = new THREE.MeshStandardMaterial({ 
            map: whiteTulipTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            roughness: 0.85, 
            metalness: 0.0,
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the flower
        });
        materials.obstacle.yellow_flower = new THREE.MeshStandardMaterial({ 
            map: yellowFlowerTexture, 
            color: 0xFFFFFF, // Use white to not tint the texture
            roughness: 0.85, 
            metalness: 0.0,
            transparent: true, // Enable transparency
            alphaTest: 0.5,    // Only render pixels with alpha > 0.5
            side: THREE.DoubleSide // Render both sides of the flower
        });

        // Environment Materials
        materials.ground = new THREE.MeshStandardMaterial({ 
            map: groundTileTex, 
            side: THREE.FrontSide, 
            roughness: 0.8, // Slightly reduced roughness for grass
            metalness: 0.0,
            // Apply color tint if configured
            color: CONFIG.GROUND_COLOR || 0xFFFFFF // Use white (no tint) if GROUND_COLOR is null
        });
        console.log("Ground material created with color:", CONFIG.GROUND_COLOR ? 
            "#" + CONFIG.GROUND_COLOR.toString(16).padStart(6, '0') : "No tint (white)");
        
        // Create wall material with ivy texture
        materials.wall = new THREE.MeshStandardMaterial({
            map: wallIvyTex,
            roughness: 0.8,
            metalness: 0.2,
            color: 0xffffff, // Use white to let the texture color show through
            side: THREE.DoubleSide
        });
        
        materials.grass = new THREE.MeshStandardMaterial({ color: 0x558B2F, side: THREE.DoubleSide, roughness: 0.95 }); // Simple green for grass blades
        materials.skybox = new THREE.MeshBasicMaterial({ map: skyboxTex, side: THREE.BackSide, fog: false });


        console.log("Materials created successfully.");
        return materials;

    } catch (error) {
        console.error("Error during texture loading or material creation:", error);
        // Maybe return partially created materials or throw error?
        // Returning what we have allows fallback materials to potentially work
        return materials;
    }
}