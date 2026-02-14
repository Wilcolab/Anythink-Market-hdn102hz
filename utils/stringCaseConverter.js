/**
 * Converts a string to dot.case format
 * @param {string} str - The string to convert
 * @returns {string} The string in dot.case format
 * 
 * @example
 * toDotCase('helloWorld') // 'hello.world'
 * toDotCase('HelloWorld') // 'hello.world'
 * toDotCase('hello-world') // 'hello.world'
 * toDotCase('hello_world') // 'hello.world'
 * toDotCase('hello world') // 'hello.world'
 */
function toDotCase(str) {
  if (typeof str !== 'string') {
    return '';
  }

  return str
    // Insert a dot before any uppercase letter that follows a lowercase letter or digit
    .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
    // Replace spaces, hyphens, and underscores with dots
    .replace(/[\s\-_]+/g, '.')
    // Convert to lowercase
    .toLowerCase()
    // Remove any leading or trailing dots
    .replace(/^\.+|\.+$/g, '')
    // Replace multiple consecutive dots with a single dot
    .replace(/\.+/g, '.');
}

module.exports = toDotCase;
