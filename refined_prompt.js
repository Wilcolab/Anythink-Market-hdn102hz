/**
 * String case conversion utility module
 * Provides comprehensive functions to convert strings between different naming conventions
 * including camelCase and dot.case formats
 * 
 * @module stringCaseConversion
 * @version 1.0.0
 * @author Your Name
 * @description This module exports utility functions for transforming strings to various
 * case formats commonly used in programming. All functions perform strict input validation
 * and handle edge cases consistently.
 * 
 * @example
 * // Convert to camelCase
 * const camel = toCamelCase('hello-world'); // 'helloWorld'
 * 
 * @example
 * // Convert to dot.case
 * const dotted = toDotCase('hello_world'); // 'hello.world'
 */

/**
 * Converts a string to camelCase format (first word lowercase, subsequent words capitalized)
 * 
 * @function toCamelCase
 * @param {string} input - The input string to convert. Can contain hyphens, underscores,
 * or spaces as delimiters.
 * @returns {string} The converted string in camelCase format. Returns empty string for
 * empty input or input with no valid words.
 * @throws {TypeError} Throws if input is null, undefined, or not a string type
 * 
 * @example
 * toCamelCase('hello-world') // Returns: 'helloWorld'
 * toCamelCase('hello_world') // Returns: 'helloWorld'
 * toCamelCase('hello world') // Returns: 'helloWorld'
 * toCamelCase('HELLO WORLD') // Returns: 'helloWorld'
 * 
 * @example
 * // Error case
 * toCamelCase(null) // Throws: TypeError - Input cannot be null or undefined
 * toCamelCase(123) // Throws: TypeError - Input must be a string, received number
 */

/**
 * Converts a string to dot.case format (all words lowercase, separated by dots)
 * 
 * @function toDotCase
 * @param {string} input - The input string to convert. Can contain hyphens, underscores,
 * or spaces as delimiters between words.
 * @returns {string} The converted string in dot.case format where all words are
 * lowercase and joined with dots. Returns empty string for empty input or input
 * with no valid words.
 * @throws {TypeError} Throws if input is null, undefined, or not a string type
 * 
 * @example
 * toDotCase('hello-world') // Returns: 'hello.world'
 * toDotCase('hello_world') // Returns: 'hello.world'
 * toDotCase('hello world') // Returns: 'hello.world'
 * toDotCase('HELLO WORLD') // Returns: 'hello.world'
 * 
 * @example
 * // Error case
 * toDotCase(null) // Throws: TypeError - Input cannot be null or undefined
 * toDotCase(123) // Throws: TypeError - Input must be a string, received number
 * 
 * @see toCamelCase for similar string transformation to camelCase format
 */
    }

    // Handle empty string
    if (input.length === 0) {
        return '';
    }

    // Split on common delimiters (hyphens, underscores, spaces)
    const words = input.split(/[-_\s]+/).filter(word => word.length > 0);

    // If no valid words found, return empty string
    if (words.length === 0) {
        return '';
    }

    // Convert all words to lowercase and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Test cases
console.log(toDotCase('hello-world')); // hello.world
console.log(toDotCase('hello_world')); // hello.world
console.log(toDotCase('hello world')); // hello.world
console.log(toDotCase('HELLO WORLD')); // hello.world
console.log(toDotCase('')); // ''
console.log(toDotCase('a')); // a

// Error handling tests
try {
    toDotCase(null);
} catch (e) {
    console.error(e.message); // Input cannot be null or undefined
}

try {
    toDotCase(123);
} catch (e) {
    console.error(e.message); // Input must be a string, received number
}



//Below your functions, press Command+i (Mac) / Ctrl+i (Windows/Linux) and typeGenerate detailed JSDoc documentation for our string case conversion functions


