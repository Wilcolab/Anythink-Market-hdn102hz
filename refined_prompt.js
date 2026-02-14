/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various delimiters (spaces, hyphens, underscores)
 * and converts it to camelCase, where the first word is lowercase and subsequent words
 * have their first letter capitalized with no delimiters between them.
 * 
 * @param {string} str - The input string to convert to camelCase.
 *                       Can contain spaces, hyphens, or underscores as delimiters.
 * 
 * @returns {string} The converted camelCase string. Returns an empty string if the input
 *                   is not a valid string type or contains only delimiters.
 * 
 * @example
 * // Returns 'helloWorld'
 * toCamelCase('hello-world');
 * 
 * @example
 * // Returns 'helloWorld'
 * toCamelCase('hello_world');
 * 
 * @example
 * // Returns 'helloWorld'
 * toCamelCase('hello world');
 * 
 * @example
 * // Returns 'helloWorldExample'
 * toCamelCase('HELLO-WORLD-EXAMPLE');
 * 
 * @example
 * // Returns ''
 * toCamelCase(123);
 * 
 * @throws {string} Returns empty string for non-string inputs instead of throwing.
 */
function toCamelCase(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str
        .trim()
        .split(/[\s\-_]+/)
        .map((word, index) => {
            if (!word) return '';
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

module.exports = toCamelCase;

