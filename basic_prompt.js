/**
 * Converts a string to camelCase format.
 *
 * This function takes an input string and returns a new string in camelCase format. Words are separated by spaces, underscores, or other non-alphanumeric characters. The first word is in lowercase, and each subsequent word starts with an uppercase letter, with all separators removed.
 *
 * @function toCamelCase
 * @param {string} str - The input string to convert. Can contain spaces, underscores, hyphens, or other non-alphanumeric separators.
 * @returns {string} The camelCase version of the input string.
 *
 * @example
 * // returns 'firstName'
 * toCamelCase('first name');
 *
 * @example
 * // returns 'myVariableName'
 * toCamelCase('my variable name');
 *
 * @example
 * // returns 'helloWorld'
 * toCamelCase('Hello_world');
 */
function toCamelCase(str) {
	return str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

// Example usage:
// console.log(toCamelCase('first name')); // 'firstName'
