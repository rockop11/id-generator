import { nanoid } from 'nanoid'

/**
 * Genera un identificador único usando Nano ID.
 *
 * @param {number} [size=12] - La longitud del ID generado. Debe ser al menos 8.
 * @returns {string} Un ID único de la longitud especificada.
 * @throws {Error} Si el size es menor a 8.
 */

export function generateNanoId(size: number = 12): string {
    if (size < 8) {
        throw new Error("El tamaño mínimo para Nano ID es 8 caracteres.");
    }
    return nanoid(size);
}