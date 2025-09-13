function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Replace underscores and spaces with hyphens, handle multiple spaces/underscores
    let kebab = input
        .replace(/[_\s]+/g, '-') // underscores/spaces to hyphen
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camelCase to kebab-case
        .replace(/[^a-zA-Z0-9-]/g, '') // remove non-alphanumeric except hyphens
        .toLowerCase()
        .replace(/-+/g, '-') // collapse multiple hyphens
        .replace(/^-+|-+$/g, ''); // trim leading/trailing hyphens

    return kebab;
}

// Example usage:
// console.log(toKebabCase('hello_world Example')); // "hello-world-example"
// console.log(toKebabCase('user123Name!@#')); // "user123-name"