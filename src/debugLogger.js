/**
 * Debug Logger System for ALPHA_SNEK
 * 
 * Provides a centralized way to manage console logs with:
 * - Different log levels (error, warn, info, debug, trace)
 * - Category-based filtering
 * - Easy enable/disable through URL parameters or settings
 * - Performance-safe logging that won't impact gameplay
 */

// Log levels in order of severity (lower index = higher priority)
const LOG_LEVELS = ['error', 'warn', 'info', 'debug', 'trace'];

// Default configuration
const defaultConfig = {
    enabled: false,          // Master toggle for all logging
    level: 'info',           // Minimum level to show (error, warn, info, debug, trace)
    categories: {            // Enable/disable specific categories
        system: true,
        physics: true,
        input: true,
        render: true,
        audio: true,
        gameplay: true,
        ai: true,
        performance: true
    },
    // Show timestamp with logs
    showTimestamp: true
};

// Current configuration (initialized with defaults)
let config = { ...defaultConfig };

/**
 * Initialize the logger system, checking URL parameters 
 * for debug settings like ?debug=true&level=debug
 */
export function initLogger() {
    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Master debug toggle from URL
    if (urlParams.has('debug')) {
        config.enabled = urlParams.get('debug') === 'true';
    }
    
    // Log level from URL
    if (urlParams.has('loglevel')) {
        const requestedLevel = urlParams.get('loglevel').toLowerCase();
        if (LOG_LEVELS.includes(requestedLevel)) {
            config.level = requestedLevel;
        }
    }
    
    // Categories from URL (comma separated list like categories=system,input)
    if (urlParams.has('logcategories')) {
        const categories = urlParams.get('logcategories').toLowerCase().split(',');
        
        // First, disable all categories
        Object.keys(config.categories).forEach(cat => {
            config.categories[cat] = false;
        });
        
        // Then enable only the specified ones
        categories.forEach(cat => {
            if (config.categories.hasOwnProperty(cat)) {
                config.categories[cat] = true;
            }
        });
    }
    
    // Only log initialization if debug is enabled
    if (config.enabled) {
        const levelIndex = LOG_LEVELS.indexOf(config.level);
        const enabledCategories = Object.entries(config.categories)
            .filter(([, enabled]) => enabled)
            .map(([name]) => name);
            
        console.log(
            `%c[ALPHA_SNEK Logger]%c Initialized | Level: ${config.level} | Categories: ${enabledCategories.join(', ')}`,
            'color: #4CAF50; font-weight: bold;',
            'color: inherit;'
        );
    }
    
    return config.enabled;
}

/**
 * Updates logger configuration
 * @param {Object} newConfig - New configuration options
 */
export function configureLogger(newConfig) {
    if (newConfig) {
        config = { ...config, ...newConfig };
    }
}

/**
 * Formats a log message with timestamp and category
 */
function formatLogMessage(category, ...args) {
    const messages = [...args];
    
    // Add timestamp if enabled
    if (config.showTimestamp) {
        const now = new Date();
        const timeStr = now.toISOString().substr(11, 8); // Extract HH:MM:SS
        messages.unshift(`[${timeStr}]`);
    }
    
    // Add category
    messages.unshift(`[${category}]`);
    
    return messages;
}

/**
 * Get the style for a specific log level
 */
function getLogLevelStyle(level) {
    switch(level) {
        case 'error': return 'color: #FF5252; font-weight: bold;';
        case 'warn': return 'color: #FFC107; font-weight: bold;';
        case 'info': return 'color: #2196F3; font-weight: bold;';
        case 'debug': return 'color: #9E9E9E;';
        case 'trace': return 'color: #757575;';
        default: return 'color: inherit;';
    }
}

/**
 * Main logging function
 * @param {string} level - Log level (error, warn, info, debug, trace)
 * @param {string} category - Log category (system, physics, etc.)
 * @param {any[]} args - Arguments to log
 */
function log(level, category, ...args) {
    // Skip logging if disabled globally
    if (!config.enabled) return;
    
    // Skip if this category is disabled
    if (!config.categories[category]) return;
    
    // Skip if log level is too low priority
    const configLevelIndex = LOG_LEVELS.indexOf(config.level);
    const messageLevelIndex = LOG_LEVELS.indexOf(level);
    if (messageLevelIndex > configLevelIndex) return;
    
    // Format the message
    const messages = formatLogMessage(category, ...args);
    
    // Use the appropriate console method based on level
    const style = getLogLevelStyle(level);
    
    switch(level) {
        case 'error':
            console.error(`%c${messages.shift()}%c`, style, 'color: inherit;', ...messages);
            break;
        case 'warn':
            console.warn(`%c${messages.shift()}%c`, style, 'color: inherit;', ...messages);
            break;
        case 'info':
            console.info(`%c${messages.shift()}%c`, style, 'color: inherit;', ...messages);
            break;
        case 'debug':
        case 'trace':
        default:
            console.log(`%c${messages.shift()}%c`, style, 'color: inherit;', ...messages);
    }
}

// Create methods for each log level
export const Logger = {
    error: (category, ...args) => log('error', category, ...args),
    warn: (category, ...args) => log('warn', category, ...args),
    info: (category, ...args) => log('info', category, ...args),
    debug: (category, ...args) => log('debug', category, ...args),
    trace: (category, ...args) => log('trace', category, ...args),
    
    // Shortcuts for common categories
    system: {
        error: (...args) => log('error', 'system', ...args),
        warn: (...args) => log('warn', 'system', ...args),
        info: (...args) => log('info', 'system', ...args),
        debug: (...args) => log('debug', 'system', ...args),
        trace: (...args) => log('trace', 'system', ...args)
    },
    
    gameplay: {
        error: (...args) => log('error', 'gameplay', ...args),
        warn: (...args) => log('warn', 'gameplay', ...args),
        info: (...args) => log('info', 'gameplay', ...args),
        debug: (...args) => log('debug', 'gameplay', ...args),
        trace: (...args) => log('trace', 'gameplay', ...args)
    },
    
    performance: {
        error: (...args) => log('error', 'performance', ...args),
        warn: (...args) => log('warn', 'performance', ...args),
        info: (...args) => log('info', 'performance', ...args),
        debug: (...args) => log('debug', 'performance', ...args),
        trace: (...args) => log('trace', 'performance', ...args)
    },
    
    audio: {
        error: (...args) => log('error', 'audio', ...args),
        warn: (...args) => log('warn', 'audio', ...args),
        info: (...args) => log('info', 'audio', ...args),
        debug: (...args) => log('debug', 'audio', ...args),
        trace: (...args) => log('trace', 'audio', ...args)
    }
};

// Export a simple function to check if logging is enabled (for complex operations)
export function isLoggingEnabled() {
    return config.enabled;
}
