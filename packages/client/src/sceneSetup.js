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
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.65);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffeedd, 0.8);
    directionalLight.position.set(CONFIG.GRID_SIZE * 0.15, CONFIG.GRID_SIZE * 0.25, CONFIG.GRID_SIZE * 0.1);
    
    // Only enable shadows if performance settings allow
    directionalLight.castShadow = performanceSettings.shadows;
    
    // Only configure shadow properties if shadows are enabled
    if (performanceSettings.shadows) {
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 0.8; // Adjusted far plane
        const shadowCamSize = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 0.6;
        directionalLight.shadow.camera.left = -shadowCamSize;
        directionalLight.shadow.camera.right = shadowCamSize;
        directionalLight.shadow.camera.top = shadowCamSize;
        directionalLight.shadow.camera.bottom = -shadowCamSize;
        directionalLight.shadow.bias = -0.001;
    }
    
    scene.add(directionalLight);
    scene.add(directionalLight.target); // Important: Target needs to be added too

    return { ambientLight, directionalLight };
}

export function createSkybox(scene, texture) {
    if (!texture) {
        console.error("Skybox texture not loaded!");
        return null;
    }
    const skyboxSize = CONFIG.GRID_SIZE * CONFIG.UNIT_SIZE * 5;
    const skyboxGeo = new THREE.BoxGeometry(skyboxSize, skyboxSize, skyboxSize);
    const skyboxMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide, fog: false });
    const skybox = new THREE.Mesh(skyboxGeo, skyboxMat);
    scene.add(skybox);
    return skybox;
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
    const skybox = createSkybox(scene, materials.skybox?.map); // Access texture via material

    return { groundMesh, wallGroup, grassInstances, skybox };
}