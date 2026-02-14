/**
 * Converts a string to kebab-case format
 * 
 * Step 1 (Basic): Replaces spaces with hyphens and converts to lowercase
 * Step 2 (Robust): Handles underscores and CamelCase transitions
 * Step 3 (Production): Includes validation, edge cases, and error handling
 * 
 * @param {string} input - The string to convert to kebab-case
 * @returns {string} The string in kebab-case format
 * @throws {TypeError} If input is not a string, null, or undefined
 * 
 * @example
 * toKebabCase('hello world')        // 'hello-world'
 * toKebabCase('HelloWorld')         // 'hello-world'
 * toKebabCase('hello_world')        // 'hello-world'
 * toKebabCase('UserProfile')        // 'user-profile'
 * toKebabCase('hello---world')      // 'hello-world'
 * toKebabCase('  hello world  ')    // 'hello-world'
 */
function toKebabCase(input) {
  // Step 3: Error handling & validation
  if (input === null || input === undefined) {
    throw new TypeError(
      `toKebabCase expects a string, but received ${input === null ? 'null' : 'undefined'}`
    );
  }

  if (typeof input !== 'string') {
    throw new TypeError(
      `toKebabCase expects a string, but received ${typeof input}`
    );
  }

  // Step 3: Trim leading and trailing whitespace
  let result = input.trim();

  if (result.length === 0) {
    return '';
  }

  // Step 2: Insert a hyphen before uppercase letters that follow lowercase letters or digits
  // This handles CamelCase transitions (e.g., 'UserProfile' -> 'User-Profile')
  result = result.replace(/([a-z0-9])([A-Z])/g, '$1-$2');

  // Step 2: Replace underscores with hyphens
  result = result.replace(/_/g, '-');

  // Step 1 & Step 3: Replace spaces and multiple consecutive hyphens with a single hyphen
  result = result.replace(/[\s\-]+/g, '-');

  // Step 1: Convert to lowercase
  result = result.toLowerCase();

  // Step 3: Remove any leading or trailing hyphens
  result = result.replace(/^-+|-+$/g, '');

  return result;
}

module.exports = toKebabCase;
