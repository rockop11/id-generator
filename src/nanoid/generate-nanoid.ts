import { nanoid } from 'nanoid'

/**
 * Generates a unique identifier using Nano ID.
 *
 * @param {number} [size=12] - The length of the generated ID. Must be at least 8.
 * @returns {string} A unique ID of the specified length.
 * @throws {Error} If the size is less than 8.
 */

export function generateNanoId(size: number = 12): string {
    if (size < 8) {
        throw new Error('El tamaño mínimo para Nano ID es 8 caracteres.');
    }
    return nanoid(size);
}