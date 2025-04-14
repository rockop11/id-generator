/**
 * Generates a universally unique identifier (UUID v4).
 *
 * @returns {string} A UUID v4 in standard format.
 *
 * @example
 * const uuid = generateUUID();
 * console.log(uuid); // "3f54a8c0-4e21-41e6-9eaf-9b5a9b3b8c3f"
 */

export function generateUUID(): string {
    return crypto.randomUUID()
}