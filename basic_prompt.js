/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with words separated by spaces, hyphens, or underscores
 * and converts it to camelCase where the first word is lowercase and subsequent words
 * have their first letter capitalized with no separators.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The converted camelCase string
 * 
 * @example
 * toCamelCase("hello world")        // returns "helloWorld"
 * toCamelCase("hello-world-example") // returns "helloWorldExample"
 * toCamelCase("hello_world_example") // returns "helloWorldExample"
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[-_\s](.)/g, (_, char) => char.toUpperCase())
        .replace(/^(.)/, (_, char) => char.toLowerCase());
}

module.exports = toCamelCase;