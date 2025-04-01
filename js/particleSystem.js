import * as THREE from 'three';
import * as CONFIG from './config.js';
import { GEOMETRIES } from './constants.js';

let activeParticles = [];
let particleMaterialRef = null; // Hold reference to the material
let isMobileDevice = false;     // Flag to track if we're on a mobile device

// Function to detect if the user is on a mobile device
function detectMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           (window.innerWidth <= 800 && window.innerHeight <= 600);
}

export function initParticles(material) {
    if (!material) {
        console.error("Particle material is required for initParticles!");
        return;
    }
    particleMaterialRef = material;
    activeParticles = []; // Clear any previous particles
    
    // Detect mobile device once during initialization
    isMobileDevice = detectMobileDevice();
    console.log(`Device detected as: ${isMobileDevice ? 'Mobile' : 'Desktop'}`);
}

// Helper function to adjust particle count based on device
function adjustParticleCount(count) {
    if (!isMobileDevice) return count;
    
    // Reduce particles by 75% on mobile devices
    const reducedCount = Math.max(2, Math.floor(count * 0.25));
    return reducedCount;
}

// Regular food particle effect (smaller, green particles)
export function createNormalFoodEffect(scene, camera, position) {
    if (!particleMaterialRef || !scene || !camera) {
        console.warn("Cannot create food effect - material, scene or camera missing.");
        return;
    }

    // Skip normal food particles entirely on mobile
    if (isMobileDevice) {
        return;
    }

    const baseColor = new THREE.Color(CONFIG.PARTICLE_COLOR_NORMAL_FOOD);
    const count = CONFIG.PARTICLE_COUNT_NORMAL_FOOD;
    
    for (let i = 0; i < count; i++) {
        // Clone material for color tint
        const pMat = particleMaterialRef.clone();
        pMat.color = baseColor.clone();

        const particleMesh = new THREE.Mesh(GEOMETRIES.particle, pMat);
        particleMesh.position.copy(position);
        particleMesh.scale.setScalar(0.6); // Smaller particles for regular food
        
        // Make particles face the camera
        particleMesh.lookAt(camera.position);

        const angle = Math.random() * Math.PI * 2;
        const speed = CONFIG.PARTICLE_SPEED * 0.6 * (0.6 + Math.random() * 0.8);
        // More gentle spread
        const velocity = new THREE.Vector3(
            Math.cos(angle) * speed,
            (Math.random() * 0.5) * speed, // Gentle upward movement
            Math.sin(angle) * speed
        );

        const life = CONFIG.PARTICLE_LIFESPAN * 0.6; // Shorter lifespan

        activeParticles.push({
            mesh: particleMesh,
            velocity: velocity,
            life: life,
            initialLife: life
        });
        scene.add(particleMesh);
    }
}

// Power-up particle effect (original explosion effect)
export function createExplosion(scene, camera, position, count, color = 0xffffff) {
    // Added 'camera' to the check
    if (!particleMaterialRef || !scene || !camera) {
         console.warn("Cannot create explosion - material, scene or camera missing.");
         return;
    }

    // Adjust particle count for mobile
    const adjustedCount = adjustParticleCount(count);
    
    // Skip if reduced to 0 particles
    if (adjustedCount <= 0) {
        return;
    }

    const baseColor = new THREE.Color(color);

    for (let i = 0; i < adjustedCount; i++) {
        // Clone material for potential individual color tints if desired
        const pMat = particleMaterialRef.clone();
        const tint = new THREE.Color(0xffdd88).lerp(new THREE.Color(0xffaa44), Math.random()); // Example tint
        pMat.color = baseColor.clone().lerp(tint, Math.random() * 0.5); // Apply tint

        const particleMesh = new THREE.Mesh(GEOMETRIES.particle, pMat); // Use predefined geometry
        particleMesh.position.copy(position);

        // *** Use the passed-in 'camera' object directly ***
        particleMesh.lookAt(camera.position); // Use the camera parameter

        const angle = Math.random() * Math.PI * 2;
        const speed = CONFIG.PARTICLE_SPEED * (0.6 + Math.random() * 0.8);
        // Spread out slightly more vertically
        const velocity = new THREE.Vector3(
            Math.cos(angle) * speed,
            (Math.random() - 0.2) * speed * 0.7, // More upward bias initially
            Math.sin(angle) * speed
        );

        const life = CONFIG.PARTICLE_LIFESPAN * (0.7 + Math.random() * 0.6);

        activeParticles.push({
            mesh: particleMesh,
            velocity: velocity,
            life: life,
            initialLife: life
        });
        scene.add(particleMesh);
    }
}

// Create a special effect for killing enemy snakes
export function createKillEffect(scene, camera, position) {
    if (!particleMaterialRef || !scene || !camera) {
        console.warn("Cannot create kill effect - material, scene or camera missing.");
        return;
    }
    
    // Create a more dramatic explosion with larger particles and longer lifespan
    let particleCount = CONFIG.PARTICLE_COUNT_KILL;
    
    // Adjust particle count for mobile devices
    particleCount = adjustParticleCount(particleCount);
    
    // Skip if count is too low
    if (particleCount <= 0) {
        return;
    }
    
    const color = new THREE.Color(CONFIG.PARTICLE_COLOR_KILL);
    const size = CONFIG.PARTICLE_SIZE * 1.5; // Larger particles
    const lifespan = CONFIG.PARTICLE_LIFESPAN * 1.5; // Longer lifespan
    const speed = CONFIG.PARTICLE_SPEED * 1.2; // Faster particles
    
    // Create particles in a spiral pattern
    for (let i = 0; i < particleCount; i++) {
        // Create particle geometry
        const geometry = new THREE.SphereGeometry(size, 4, 4);
        
        // Clone the material and set its color
        const material = particleMaterialRef.clone();
        material.color.copy(color);
        
        // Create mesh
        const particle = new THREE.Mesh(geometry, material);
        
        // Position at the explosion center
        particle.position.copy(position);
        
        // Calculate spiral pattern
        const angle = (i / particleCount) * Math.PI * 8; // 4 full rotations
        const radius = (i / particleCount) * 5; // Increasing radius
        const height = (i / particleCount) * 4 - 2; // Vertical spread
        
        // Set velocity based on spiral pattern
        const velocity = new THREE.Vector3(
            Math.cos(angle) * radius * speed,
            height * speed,
            Math.sin(angle) * radius * speed
        );
        
        // Add to scene and active particles
        scene.add(particle);
        activeParticles.push({
            mesh: particle,
            velocity: velocity,
            life: lifespan,
            initialLife: lifespan
        });
    }
}

// Create a special effect for frog power-ups
export function createFrogEffect(scene, camera, position, color = 0x8BC34A) {
    if (!particleMaterialRef || !scene || !camera) {
        console.warn("Cannot create frog effect - material, scene or camera missing.");
        return;
    }
    
    // Create a more playful, bouncy particle effect for frogs
    let particleCount = 30; // More particles for frogs
    
    // Simplify on mobile devices - reduce particles
    if (isMobileDevice) {
        particleCount = Math.max(5, Math.floor(particleCount * 0.25));
    }
    
    // Skip if too few particles
    if (particleCount <= 0) {
        return;
    }
    
    const baseColor = new THREE.Color(color);
    
    for (let i = 0; i < particleCount; i++) {
        // Clone material for color tint
        const pMat = particleMaterialRef.clone();
        
        // Create a slightly randomized color based on the base color
        const tint = new THREE.Color().setHSL(
            Math.random() * 0.1 + 0.3, // Slightly random hue around green
            0.8, // High saturation
            0.6  // Medium lightness
        );
        pMat.color = baseColor.clone().lerp(tint, Math.random() * 0.3);
        
        // Create particle
        const particleMesh = new THREE.Mesh(GEOMETRIES.particle, pMat);
        particleMesh.position.copy(position);
        
        // Make particles face the camera
        particleMesh.lookAt(camera.position);
        
        // Create a bouncy, hopping effect
        const angle = Math.random() * Math.PI * 2;
        const speed = CONFIG.PARTICLE_SPEED * (0.7 + Math.random() * 0.6);
        
        // More vertical movement for a hopping effect
        const velocity = new THREE.Vector3(
            Math.cos(angle) * speed * 0.7,
            (Math.random() * 0.8 + 0.5) * speed, // Strong upward movement
            Math.sin(angle) * speed * 0.7
        );
        
        // Longer lifespan for frog particles
        const life = CONFIG.PARTICLE_LIFESPAN * (0.8 + Math.random() * 0.7);
        
        // Add to active particles
        activeParticles.push({
            mesh: particleMesh,
            velocity: velocity,
            life: life,
            initialLife: life,
            isFrog: true // Mark as frog particle for special behavior
        });
        
        scene.add(particleMesh);
    }
}

export function updateParticles(deltaTime, scene) { // Pass scene for removal
    if (!scene) return;
    const gravity = 9.8; // Simple gravity simulation

    for (let i = activeParticles.length - 1; i >= 0; i--) {
        const p = activeParticles[i];
        p.life -= deltaTime;

        if (p.life <= 0) {
            scene.remove(p.mesh);
            // Dispose geometry/material if they were cloned per particle and no longer needed?
            // p.mesh.geometry.dispose(); // Only if geometry was unique
            // p.mesh.material.dispose(); // Only if material was unique
            activeParticles.splice(i, 1);
        } else {
            p.mesh.position.addScaledVector(p.velocity, deltaTime);

            const lifeRatio = Math.max(0, p.life / p.initialLife);

            // Fade out opacity
            if (p.mesh.material.transparent) {
                p.mesh.material.opacity = lifeRatio * 0.9; // Adjust base opacity if needed
            }

            // Shrink size
            const scale = Math.max(0.1, lifeRatio * 0.8 + 0.2); // Ensure minimum size
            p.mesh.scale.set(scale, scale, scale);

            // Apply gravity
            p.velocity.y -= gravity * deltaTime;

            // Special behavior for frog particles
            if (p.isFrog) {
                // Add a slight rotation for frog particles
                p.mesh.rotation.z += deltaTime * (Math.random() * 2 - 1);
                
                // Add a slight wobble effect
                if (p.mesh.position.y < 0.5 && p.velocity.y < 0) {
                    // Bounce when close to the ground with reduced energy
                    p.velocity.y = Math.abs(p.velocity.y) * 0.6;
                    
                    // Reduce horizontal velocity slightly on each bounce
                    p.velocity.x *= 0.9;
                    p.velocity.z *= 0.9;
                }
            }

            // Optional: Add simple ground collision / bounce
            // if (p.mesh.position.y < CONFIG.UNIT_SIZE * 0.1) {
            //     p.mesh.position.y = CONFIG.UNIT_SIZE * 0.1;
            //     p.velocity.y *= -0.4; // Bounce with energy loss
            //     p.velocity.x *= 0.8; // Friction
            //     p.velocity.z *= 0.8;
            // }
        }
    }
}

export function resetParticles(scene) { // Pass scene for removal
     if (!scene) return;
    activeParticles.forEach(p => scene.remove(p.mesh));
    activeParticles = [];
}