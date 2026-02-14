function toKebabCase(input) {
    // Step 3: Error Handling & Validation
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim leading and trailing whitespace
    let result = input.trim();

    // Step 2: Handle various delimiters and CamelCase
    // Insert hyphen before uppercase letters (for CamelCase)
    result = result.replace(/([a-z])([A-Z])/g, '$1-$2');
    
    // Replace underscores with hyphens
    result = result.replace(/_/g, '-');
    
    // Replace spaces with hyphens
    result = result.replace(/\s+/g, '-');
    
    // Step 3: Handle multiple consecutive hyphens
    result = result.replace(/-+/g, '-');
    
    // Step 1: Convert to lowercase
    result = result.toLowerCase();
    
    // Remove leading or trailing hyphens
    result = result.replace(/^-+|-+$/g, '');
    
    return result;
}

// Export for use in other modules
module.exports = toKebabCase;