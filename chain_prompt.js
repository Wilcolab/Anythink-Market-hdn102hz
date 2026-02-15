/**
 * Step 1, 2, & 3: Converts a string to kebab-case with robust error handling.
 * Handles spaces, underscores, camelCase, and consecutive delimiters.
 */
function toKebabCase(str) {
  // Step 3: Validation and Error Handling
  if (str === null || str === undefined) {
    throw new Error("Invalid input: Input cannot be null or undefined.");
  }

  if (typeof str !== 'string') {
    throw new Error(`Invalid input: Expected a string, but received ${typeof str}.`);
  }

  if (str.trim().length === 0) {
    return ""; // Handle empty or whitespace-only strings
  }

  return str
    .trim() // Step 3: Remove leading/trailing whitespace
    // Step 2: Handle camelCase (e.g., 'UserProfile' -> 'User-Profile')
    .replace(/([a-z])([A-Z])/g, "$1-$2") 
    // Step 1 & 2: Replace spaces and underscores with hyphens
    .replace(/[\s_]+/g, "-") 
    // Step 3: Handle multiple consecutive hyphens (e.g., '---' -> '-')
    .replace(/-+/g, "-") 
    .toLowerCase(); // Step 1: Make entire string lowercase
}

// --- Testing the Chain Logic ---
// console.log(toKebabCase("hello world"));      // "hello-world"
// console.log(toKebabCase("UserProfile"));      // "user-profile"
// console.log(toKebabCase("hello---world"));    // "hello-world"
// console.log(toKebabCase(123));                // Throws Error