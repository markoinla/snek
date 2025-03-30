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

    try {
        // Load textures concurrently
        const [
            snakeSheetTex, particleTex, skyboxTex, groundTileTex, wallBrickTex,
            ...foodTextures
        ] = await Promise.all([
            loadTexture(loader, PATHS.snakeSheet, true, (t) => {
                t.magFilter = THREE.NearestFilter;
                t.minFilter = THREE.NearestFilter;
                snakeSpriteSheetTexture = t; // Assign to shared var
            }),
            loadTexture(loader, PATHS.particle, true),
            loadTexture(loader, PATHS.skybox, true, (t) => {
                t.magFilter = THREE.NearestFilter;
                t.minFilter = THREE.LinearFilter;
            }),
            loadTexture(loader, PATHS.groundTile, true, (t) => {
                t.wrapS = THREE.RepeatWrapping;
                t.wrapT = THREE.RepeatWrapping;
                t.repeat.set(CONFIG.GRID_SIZE / 1.5, CONFIG.GRID_SIZE / 1.5);
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
        const createSpriteMaterial = (offsetX, offsetY) => {
            if (!snakeSpriteSheetTexture) return new THREE.MeshStandardMaterial({ color: 0xff00ff, ...baseSnakeParams }); // Fallback
            const mat = new THREE.MeshStandardMaterial(baseSnakeParams);
            mat.map = snakeSpriteSheetTexture.clone(); // Clone map for unique offsets
            mat.map.needsUpdate = true; // Ensure clone is used
            const r = 1.0 / CONFIG.SPRITE_SHEET_DIM;
            mat.map.offset.set(offsetX * r, offsetY * r);
            mat.map.repeat.set(r, r);
            return mat;
        };
        materials.snake.head1 = createSpriteMaterial(0, 1); // Top Left in SVG was head1
        materials.snake.head2 = createSpriteMaterial(1, 1); // Top Right
        materials.snake.body1 = createSpriteMaterial(0, 0); // Bottom Left
        materials.snake.body2 = createSpriteMaterial(1, 0); // Bottom Right

        // Enemy Materials (Simple Colors for now, could use spritesheet)
        materials.enemy.head1 = new THREE.MeshStandardMaterial({ color: 0x00BCD4, roughness: 0.6 });
        materials.enemy.head2 = new THREE.MeshStandardMaterial({ color: 0x4DD0E1, roughness: 0.6 });
        materials.enemy.body1 = new THREE.MeshStandardMaterial({ color: 0x00838F, roughness: 0.7 });
        materials.enemy.body2 = new THREE.MeshStandardMaterial({ color: 0x0097A7, roughness: 0.7 });


        // Food Materials
        FOOD_TYPES.forEach((foodType, index) => {
            const texture = foodTextures[index];
            if (texture) {
                 materials.food[foodType.type] = new THREE.MeshStandardMaterial({
                    map: texture,
                    side: THREE.FrontSide,
                    roughness: 0.5,
                    metalness: 0.1,
                    transparent: foodType.type === 'ghost', // Ghost food needs transparency
                    opacity: foodType.type === 'ghost' ? 0.8 : 1.0, // Ghost food opacity
                });
            } else {
                // Fallback if texture failed
                materials.food[foodType.type] = new THREE.MeshStandardMaterial({
                    color: foodType.colorHint || 0xff00ff,
                    roughness: 0.5, metalness: 0.1
                });
            }
        });

        // Obstacle Materials
        materials.obstacle.tree_trunk = new THREE.MeshStandardMaterial({ color: 0x966F33, roughness: 0.9, metalness: 0.0 });
        materials.obstacle.tree_leaves = new THREE.MeshStandardMaterial({ color: 0x388E3C, roughness: 0.8, metalness: 0.0 });
        materials.obstacle.bush = new THREE.MeshStandardMaterial({ color: 0x689F38, roughness: 0.85, metalness: 0.0 });

        // Environment Materials
        materials.ground = new THREE.MeshStandardMaterial({ 
            map: groundTileTex, 
            side: THREE.FrontSide, 
            roughness: 0.9, 
            metalness: 0.0,
            // Apply color tint if configured
            color: CONFIG.GROUND_COLOR || 0xFFFFFF // Use white (no tint) if GROUND_COLOR is null
        });
        console.log("Ground material created with color:", CONFIG.GROUND_COLOR ? 
            "#" + CONFIG.GROUND_COLOR.toString(16).padStart(6, '0') : "No tint (white)");
        
        materials.wall = new THREE.MeshStandardMaterial({ map: wallBrickTex, side: THREE.FrontSide, roughness: 0.9, metalness: 0.05 });
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