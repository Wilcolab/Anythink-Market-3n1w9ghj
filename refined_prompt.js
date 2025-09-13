/**
 * Converts a string to camelCase format.
 * Handles leading/trailing/multiple spaces, underscores, hyphens, and numbers.
 * Returns an error if input is not a valid string.
 *
 * Examples:
 *   toCamelCase('  user_12_name ') => 'user12Name'
 *   toCamelCase('hello-world') => 'helloWorld'
 *   toCamelCase('  multiple   spaces_here ') => 'multipleSpacesHere'
 *   toCamelCase('user12_name') => 'user12Name'
 *   toCamelCase(123) => Error
 *
 * @param {string} str - The input string to convert.
 * @returns {string|Error} - The camelCase string or an Error object.
 */
function toCamelCase(str) {
    // Check for valid string input
    if (typeof str !== 'string') {
        return new Error('Input must be a string');
    }

    // Trim leading/trailing spaces and replace all non-alphanumeric (except numbers) with spaces
    // This includes underscores, hyphens, and multiple spaces
    const cleaned = str.trim().replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ');

    // Split into words, filter out empty strings (in case of multiple spaces)
    const words = cleaned.split(' ').filter(Boolean);

    // If no words, return empty string
    if (words.length === 0) return '';

    // Build camelCase string
    const camelCased = words
        .map((word, idx) => {
            if (idx === 0) {
                // First word: lowercase everything
                return word.toLowerCase();
            }
            // Capitalize first letter, keep numbers as is
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');

    return camelCased;
}

// Example usage:
// console.log(toCamelCase('  user_12_name ')); // 'user12Name'
// console.log(toCamelCase(123)); // Error: Input must be a string

/**
 * Converts a string to dot.case format.
 * Handles leading/trailing/multiple spaces, underscores, hyphens, and numbers.
 * Returns an error if input is not a valid string.
 *
 * Examples:
 *   toDotCase('  user_12_name ') => 'user.12.name'
 *   toDotCase('hello-world') => 'hello.world'
 *   toDotCase('  multiple   spaces_here ') => 'multiple.spaces.here'
 *   toDotCase('user12_name') => 'user12.name'
 *   toDotCase(123) => Error
 *
 * @param {string} str - The input string to convert.
 * @returns {string|Error} - The dot.case string or an Error object.
 */
function toDotCase(str) {
    if (typeof str !== 'string') {
        return new Error('Input must be a string');
    }

    // Trim, replace underscores/hyphens with spaces, collapse spaces
    const cleaned = str.trim().replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ');

    // Split into words, filter out empty strings
    const words = cleaned.split(' ').filter(Boolean);

    if (words.length === 0) return '';

    // Join with dots, lowercase everything
    return words.map(w => w.toLowerCase()).join('.');
}

module.exports = {
    toCamelCase,
    toDotCase
};