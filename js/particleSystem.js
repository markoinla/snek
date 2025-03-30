import * as THREE from 'three';
import * as CONFIG from './config.js';
import { GEOMETRIES } from './constants.js';

let activeParticles = [];
let particleMaterialRef = null; // Hold reference to the material

export function initParticles(material) {
    if (!material) {
        console.error("Particle material is required for initParticles!");
        return;
    }
    particleMaterialRef = material;
    activeParticles = []; // Clear any previous particles
}

// Regular food particle effect (smaller, green particles)
export function createNormalFoodEffect(scene, camera, position) {
    if (!particleMaterialRef || !scene || !camera) {
        console.warn("Cannot create food effect - material, scene or camera missing.");
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

    const baseColor = new THREE.Color(color);

    for (let i = 0; i < count; i++) {
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
    const particleCount = CONFIG.PARTICLE_COUNT_KILL;
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