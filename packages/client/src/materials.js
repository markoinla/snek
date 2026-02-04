import * as THREE from 'three';
import CONFIG from './config';
import { PATHS, FOOD_TYPES, GEOMETRIES } from './constants';
import { Logger } from './debugLogger.js';
import { PALETTE } from './palette';

function createToonGradient(steps = 4) {
    const colors = new Uint8Array(steps);
    for (let i = 0; i < steps; i++) {
        colors[i] = Math.round((i / (steps - 1)) * 255);
    }
    const texture = new THREE.DataTexture(colors, steps, 1, THREE.RedFormat);
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.needsUpdate = true;
    return texture;
}

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

        // Shared toon gradient map for cel-shading
        const gradientMap = createToonGradient(4);
        materials.gradientMap = gradientMap;

        // Particle Material (keep MeshBasicMaterial — needs additive blending)
        materials.particle = new THREE.MeshBasicMaterial({
            map: particleTex,
            transparent: true,
            vertexColors: false, // Not using vertex colors here
            side: THREE.DoubleSide,
            depthWrite: false, // Crucial for additive blending / transparency
            blending: THREE.AdditiveBlending
        });

        // Snake Materials
        const baseSnakeParams = { side: THREE.FrontSide, gradientMap };
        const createSpriteMaterial = (offsetX, offsetY, spriteSheetTexture) => {
            if (!spriteSheetTexture) return new THREE.MeshToonMaterial({ color: 0xff00ff, ...baseSnakeParams }); // Fallback
            const mat = new THREE.MeshToonMaterial(baseSnakeParams);
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
        const baseEnemyParams = { side: THREE.FrontSide, gradientMap };
        const createEnemySpriteMaterial = (offsetX, offsetY, spriteSheetTexture) => {
            if (!spriteSheetTexture) return new THREE.MeshToonMaterial({ color: 0xff00ff, ...baseEnemyParams }); // Fallback
            const mat = new THREE.MeshToonMaterial(baseEnemyParams);
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
                    materials.food[foodType.type] = new THREE.MeshToonMaterial({
                        map: texture,
                        side: THREE.FrontSide,
                        color: 0xffffff,
                        gradientMap,
                    });
                } else {
                    // Fallback if texture failed
                    materials.food[foodType.type] = new THREE.MeshToonMaterial({
                        color: foodType.colorHint || 0xff00ff,
                        emissive: 0x222222,
                        gradientMap,
                    });
                }
            } else {
                // Type-specific emissive tints so frogs glow with their powerup color
                const emissiveByType = {
                    speed: 0x2E7D32,
                    shrink: 0x6A1B9A,
                    score_x2: 0x8D6E00,
                    ghost: 0x616161,
                };
                // Frog powerups use solid colors instead of textures for a blocky look
                materials.food[foodType.type] = new THREE.MeshToonMaterial({
                    color: foodType.colorHint,
                    side: THREE.FrontSide,
                    emissive: emissiveByType[foodType.type] || 0x222222,
                    transparent: foodType.type === 'ghost',
                    opacity: foodType.type === 'ghost' ? 0.7 : 1.0,
                    gradientMap,
                });
            }
        });

        // Obstacle Materials
        materials.obstacle.tree_trunk = new THREE.MeshToonMaterial({
            map: treeTrunkTexture,
            color: PALETTE.obstacle.trunk,
            gradientMap,
        });
        materials.obstacle.tree_leaves = new THREE.MeshToonMaterial({
            map: treeLeavesTexture,
            color: PALETTE.obstacle.leaves,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            gradientMap,
        });
        materials.obstacle.bush = new THREE.MeshToonMaterial({
            map: treeLeavesTexture,
            color: PALETTE.obstacle.bush,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            gradientMap,
        });
        materials.obstacle.flower_bush = new THREE.MeshToonMaterial({
            map: flowerBushTexture,
            color: 0xFFFFFF,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            gradientMap,
        });
        materials.obstacle.pink_flower = new THREE.MeshToonMaterial({
            map: pinkFlowerTexture,
            color: 0xFFFFFF,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            gradientMap,
        });
        materials.obstacle.white_daisy = new THREE.MeshToonMaterial({
            map: whiteDaisyTexture,
            color: 0xFFFFFF,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            gradientMap,
        });
        materials.obstacle.white_tulip = new THREE.MeshToonMaterial({
            map: whiteTulipTexture,
            color: 0xFFFFFF,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            gradientMap,
        });
        materials.obstacle.yellow_flower = new THREE.MeshToonMaterial({
            map: yellowFlowerTexture,
            color: 0xFFFFFF,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            gradientMap,
        });

        // Environment Materials
        materials.ground = new THREE.MeshToonMaterial({
            map: groundTileTex,
            side: THREE.FrontSide,
            color: PALETTE.ground.base,
            gradientMap,
        });
        Logger.system.info("Ground material created with palette color:", "#" + PALETTE.ground.base.toString(16).padStart(6, '0'));

        // Create wall material with ivy texture
        materials.wall = new THREE.MeshToonMaterial({
            map: wallIvyTex,
            color: PALETTE.wall.base,
            side: THREE.DoubleSide,
            gradientMap,
        });

        materials.grass = new THREE.MeshToonMaterial({
            color: PALETTE.vegetation.grass,
            side: THREE.DoubleSide,
            gradientMap,
        });
        
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