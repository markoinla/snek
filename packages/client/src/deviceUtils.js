/**
 * Device utility functions for performance optimizations
 * - Detects mobile devices
 * - Provides performance settings based on device capabilities
 */

// Mobile device detection
export function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           (window.innerWidth <= 800 && window.innerHeight <= 600);
}

// Performance settings that can be accessed throughout the app
export const performanceSettings = {
    // Initialize with default values
    shadows: true,           // Whether shadows should be enabled
    particles: true,         // Whether full particle effects should be enabled
    postprocessing: true,    // Whether bloom + outline postprocessing should be enabled
    detailLevel: 'high',     // 'low', 'medium', or 'high'
    textureQuality: 1.0,     // Scale factor for texture resolution (0.5 = half res)

    // This will be called during initialization to set appropriate values
    initializeForCurrentDevice: function() {
        const isMobile = isMobileDevice();

        if (isMobile) {
            this.shadows = false;
            this.postprocessing = false;
            this.detailLevel = 'low';
            this.textureQuality = 0.5;
            console.log('Mobile device detected - using low performance settings');
        } else {
            this.shadows = true;
            this.postprocessing = true;
            this.detailLevel = 'high';
            this.textureQuality = 1.0;
            console.log('Desktop device detected - using high performance settings');
        }

        return isMobile;
    }
};
