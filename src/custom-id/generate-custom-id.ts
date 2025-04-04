export interface CustomIdProps {
    prefix: string;
    length: number;
    suffix: string;
}

/**
 * Genera un identificador personalizado con un bloque aleatorio entre un prefijo y un sufijo.
 *
 * @param {Object} params - Parámetros para generar el ID.
 * @param {string} params.prefix - Prefijo que se antepone al bloque aleatorio. Obligatorio.
 * @param {number} params.length - Longitud del bloque aleatorio a generar. Debe ser mayor a 0.
 * @param {string} params.suffix - Sufijo que se agrega al final del ID. Obligatorio.
 * @returns {string} Un ID con el formato `<prefix>-<randomBlock>-<suffix>`.
 *
 * @throws {Error} Lanza un error si no se proporciona el prefix, el suffix o si el length es inválido.
 */

export function generateCustomId({ prefix, length, suffix }: CustomIdProps): string {

    if (!prefix) throw new Error("prefix is required")
    if (!suffix) throw new Error("suffix is required")
    if (!length || length <= 0 || typeof length !== "number") {
        throw new Error('length must be a number greater than 0')
    }

    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let randomBlock = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        const randomChar = charset[randomIndex];
        randomBlock += randomChar;
    }

    return `${prefix}-${randomBlock}-${suffix}`
}