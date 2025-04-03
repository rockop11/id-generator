/**
 * Genera un identificador único universal (UUID v4).
 *
 * @returns {string} Un UUID v4 en formato estándar.
 *
 * @example
 * const uuid = generateUUID();
 * console.log(uuid); // "3f54a8c0-4e21-41e6-9eaf-9b5a9b3b8c3f"
 */

export function generateUUID(): string {
    return crypto.randomUUID()
}