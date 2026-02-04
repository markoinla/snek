import * as THREE from 'three';
import CONFIG from './config';
import { PATHS, GEOMETRIES } from './constants';
import { performanceSettings } from './deviceUtils.js';
import { PALETTE } from './palette';

export function createScene() {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(PALETTE.sky.fog, CONFIG.FOG_DENSITY);
    return scene;
}

export function createCamera() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 6); // Increased far plane
    camera.position.set(0, CONFIG.CAMERA_HEIGHT, CONFIG.CAMERA_DISTANCE);
    return camera;
}

export function createRenderer(canvas) {
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Use performance settings to conditionally enable shadows
    renderer.shadowMap.enabled = performanceSettings.shadows;
    
    // Only set shadow map type if shadows are enabled
    if (performanceSettings.shadows) {
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    return renderer;
}

export function createLights(scene) {
    // Hemisphere light: sky-to-ground gradient for natural ambient fill
    const hemiLight = new THREE.HemisphereLight(
        PALETTE.sky.zenith,       // sky color (cool blue from above)
        PALETTE.ground.base,      // ground color (warm green from below)
        0.6
    );
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    // Warm key light (sun) — primary directional, casts shadows
    const sunLight = new THREE.DirectionalLight(PALETTE.lighting.sun, 0.9);
    sunLight.position.set(CONFIG.GRID_SIZE * 0.15, CONFIG.GRID_SIZE * 0.25, CONFIG.GRID_SIZE * 0.1);

    sunLight.castShadow = performanceSettings.shadows;

    if (performanceSettings.shadows) {
        sunLight.shadow.mapSize.width = 1024;
        sunLight.shadow.mapSize.height = 1024;
        sunLight.shadow.camera.near = 0.5;
        sunLight.shadow.camera.far = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 0.8;
        const shadowCamSize = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 0.6;
        sunLight.shadow.camera.left = -shadowCamSize;
        sunLight.shadow.camera.right = shadowCamSize;
        sunLight.shadow.camera.top = shadowCamSize;
        sunLight.shadow.camera.bottom = -shadowCamSize;
        sunLight.shadow.bias = -0.001;
    }

    scene.add(sunLight);
    scene.add(sunLight.target);

    // Cool fill light — opposite side, no shadows, balances warm key
    const fillLight = new THREE.DirectionalLight(PALETTE.lighting.fill, 0.35);
    fillLight.position.set(-CONFIG.GRID_SIZE * 0.1, CONFIG.GRID_SIZE * 0.15, -CONFIG.GRID_SIZE * 0.08);
    fillLight.castShadow = false;
    scene.add(fillLight);

    return { hemiLight, sunLight, fillLight };
}

export function createSkybox(scene) {
    const skyGeo = new THREE.SphereGeometry(CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 3, 32, 15);
    const skyMat = new THREE.ShaderMaterial({
        uniforms: {
            topColor:    { value: new THREE.Color(PALETTE.sky.zenith) },
            bottomColor: { value: new THREE.Color(PALETTE.sky.horizon) },
            offset:      { value: 20 },
            exponent:    { value: 1.0 },
        },
        vertexShader: `
            varying vec3 vWorldPosition;
            void main() {
                vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPosition.xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 topColor;
            uniform vec3 bottomColor;
            uniform float offset;
            uniform float exponent;
            varying vec3 vWorldPosition;
            void main() {
                float h = normalize(vWorldPosition + offset).y;
                gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
            }
        `,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    scene.add(sky);
    return sky;
}

export function createClouds(scene) {
    const clouds = new THREE.Group();
    const cloudGeo = new THREE.PlaneGeometry(8, 4);

    for (let i = 0; i < 12; i++) {
        const cloudMat = new THREE.MeshBasicMaterial({
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0.3 + Math.random() * 0.3,
            side: THREE.DoubleSide,
            fog: false,
            depthWrite: false,
        });
        const cloud = new THREE.Mesh(cloudGeo, cloudMat);
        const spread = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 1.5;
        cloud.position.set(
            (Math.random() - 0.5) * spread,
            CONFIG.GRID_SIZE * 0.3 + Math.random() * CONFIG.GRID_SIZE * 0.2,
            (Math.random() - 0.5) * spread
        );
        cloud.rotation.x = -Math.PI / 2;
        cloud.scale.set(1 + Math.random() * 2, 1 + Math.random(), 1);
        cloud.userData.driftSpeed = 0.2 + Math.random() * 0.3;
        cloud.userData.driftDirection = Math.random() * Math.PI * 2;
        clouds.add(cloud);
    }
    scene.add(clouds);
    return clouds;
}

export function createGround(scene, material) {
    if (!material) {
        console.error("Ground material not created!");
        return null;
    }
    const groundSize = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE;
    // Recreate geometry here if it depends on GRID_SIZE
    GEOMETRIES.groundPlane = new THREE.PlaneGeometry(groundSize, groundSize);

    const groundMesh = new THREE.Mesh(GEOMETRIES.groundPlane, material);
    groundMesh.rotation.x = -Math.PI / 2;
    groundMesh.position.y = 0; // Place ground exactly at y=0
    
    // Only enable shadow receiving if shadows are enabled in performance settings
    groundMesh.receiveShadow = performanceSettings.shadows;
    
    scene.add(groundMesh);

    // Subtle grid overlay for gameplay readability
    const gridHelper = new THREE.GridHelper(
        groundSize,
        CONFIG.GRID_SIZE, // divisions = one per cell
        PALETTE.ground.grid,
        PALETTE.ground.grid
    );
    gridHelper.position.y = 0.01; // slightly above ground to avoid z-fighting
    const gridMats = Array.isArray(gridHelper.material) ? gridHelper.material : [gridHelper.material];
    for (const mat of gridMats) {
        mat.transparent = true;
        mat.opacity = 0.08;
        mat.depthWrite = false;
    }
    scene.add(gridHelper);

    return groundMesh;
}

export function createWalls(scene, material) {
     if (!material) {
        console.error("Wall material not created!");
        return null;
    }
    const wallGroup = new THREE.Group();
    const halfGridW = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE / 2;
    const wallLength = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE + CONFIG.WALL_THICKNESS * CONFIG.UNIT_SIZE;
    const wallHeight = CONFIG.WALL_HEIGHT * CONFIG.UNIT_SIZE;
    const wallThickness = CONFIG.WALL_THICKNESS * CONFIG.UNIT_SIZE;

    const wallGeoX = new THREE.BoxGeometry(wallLength, wallHeight, wallThickness);
    const wallGeoZ = new THREE.BoxGeometry(wallThickness, wallHeight, wallLength);
    const wallYPos = wallHeight / 2; // Center wall vertically at ground level

    const wallNorth = new THREE.Mesh(wallGeoX, material);
    wallNorth.position.set(0, wallYPos, -halfGridW - (wallThickness / 2)); // Adjust position based on thickness
    
    // Only enable shadows if they are enabled in performance settings
    if (performanceSettings.shadows) {
        wallNorth.castShadow = true; 
        wallNorth.receiveShadow = true;
    }
    
    wallGroup.add(wallNorth);

    const wallSouth = new THREE.Mesh(wallGeoX, material);
    wallSouth.position.set(0, wallYPos, halfGridW + (wallThickness / 2));
    
    // Only enable shadows if they are enabled in performance settings
    if (performanceSettings.shadows) {
        wallSouth.castShadow = true; 
        wallSouth.receiveShadow = true;
    }
    
    wallGroup.add(wallSouth);

    const wallEast = new THREE.Mesh(wallGeoZ, material);
    wallEast.position.set(halfGridW + (wallThickness / 2), wallYPos, 0);
    
    // Only enable shadows if they are enabled in performance settings
    if (performanceSettings.shadows) {
        wallEast.castShadow = true; 
        wallEast.receiveShadow = true;
    }
    
    wallGroup.add(wallEast);

    const wallWest = new THREE.Mesh(wallGeoZ, material);
    wallWest.position.set(-halfGridW - (wallThickness / 2), wallYPos, 0);
    
    // Only enable shadows if they are enabled in performance settings
    if (performanceSettings.shadows) {
        wallWest.castShadow = true; 
        wallWest.receiveShadow = true;
    }
    
    wallGroup.add(wallWest);

    scene.add(wallGroup);
    return wallGroup;
}

export function createGrass(scene, material) {
    if (!material) {
        console.error("Grass material not created!");
        return null;
    }
    const grassInstances = new THREE.InstancedMesh(
        GEOMETRIES.grassBlade, // Use predefined geometry
        material,
        CONFIG.GRASS_COUNT
    );
    grassInstances.castShadow = false; // Grass doesn't cast shadows
    grassInstances.receiveShadow = true;
    grassInstances.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // For potential updates

    const dummy = new THREE.Object3D();
    const halfGridWorld = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE / 2;

    for (let i = 0; i < CONFIG.GRASS_COUNT; i++) {
        // Scatter within the grid boundaries
        dummy.position.set(
            (Math.random() - 0.5) * (CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE),
             0, // Position base at y=0
            (Math.random() - 0.5) * (CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE)
        );
        dummy.rotation.y = Math.random() * Math.PI * 2;
        const scale = (0.8 + Math.random() * 0.4) * CONFIG.UNIT_SIZE;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        grassInstances.setMatrixAt(i, dummy.matrix);
    }
    grassInstances.instanceMatrix.needsUpdate = true;
    scene.add(grassInstances);
    return grassInstances;
}

export function createRocks(scene, gradientMap) {
    const rockGeo = new THREE.BoxGeometry(0.3, 0.2, 0.3);
    const rockMat = new THREE.MeshToonMaterial({
        color: PALETTE.ground.rock,
        gradientMap,
    });
    const rocks = new THREE.InstancedMesh(rockGeo, rockMat, CONFIG.ROCK_COUNT);
    rocks.castShadow = performanceSettings.shadows;
    rocks.receiveShadow = performanceSettings.shadows;

    const dummy = new THREE.Object3D();
    const spread = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE;
    const rockColor = new THREE.Color();

    for (let i = 0; i < CONFIG.ROCK_COUNT; i++) {
        dummy.position.set(
            (Math.random() - 0.5) * spread,
            0.05, // half-embedded in the ground
            (Math.random() - 0.5) * spread
        );
        dummy.rotation.y = Math.random() * Math.PI * 2;
        dummy.rotation.z = (Math.random() - 0.5) * 0.3; // slight tilt
        const s = (0.6 + Math.random() * 0.8) * CONFIG.UNIT_SIZE;
        dummy.scale.set(s, 0.4 + Math.random() * 0.6, s);
        dummy.updateMatrix();
        rocks.setMatrixAt(i, dummy.matrix);

        // Per-instance color variation between rock and rockDark
        const t = Math.random();
        rockColor.set(PALETTE.ground.rock).lerp(
            new THREE.Color(PALETTE.ground.rockDark), t
        );
        rocks.setColorAt(i, rockColor);
    }
    rocks.instanceMatrix.needsUpdate = true;
    rocks.instanceColor.needsUpdate = true;
    scene.add(rocks);
    return rocks;
}

export function createBaseGeometries() {
     // Scale predefined geometries based on UNIT_SIZE if necessary
     // (Cube geometry is handled by mesh scaling)
     GEOMETRIES.particle = new THREE.PlaneGeometry(CONFIG.PARTICLE_SIZE, CONFIG.PARTICLE_SIZE);
     // Grass is already scaled during instantiation
}

export function setupBasicScene(scene, materials) {
    createBaseGeometries(); // Ensure geometries are sized correctly
    const groundMesh = createGround(scene, materials.ground);
    const wallGroup = createWalls(scene, materials.wall);
    const grassInstances = createGrass(scene, materials.grass); // Use grass material
    const rocks = createRocks(scene, materials.gradientMap);
    const skybox = createSkybox(scene); // Procedural gradient sky
    const clouds = createClouds(scene);

    return { groundMesh, wallGroup, grassInstances, rocks, skybox, clouds };
}