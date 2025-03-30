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

// *** UPDATED SIGNATURE & USAGE ***
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