export interface CustomIdProps {
    prefix: string;
    length: number;
    suffix: string;
}

/**
 * Generates a custom identifier with a random block between a prefix and a suffix.
 *
 * @param {Object} params - Parameters for generating the ID.
 * @param {string} params.prefix - Prefix to prepend to the random block. Required.
 * @param {number} params.length - Length of the random block to generate. Must be greater than 0.
 * @param {string} params.suffix - Suffix to append to the end of the ID. Required.
 * @returns {string} An ID in the format `<prefix>-<randomBlock>-<suffix>`.
 *
 * @throws {Error} Throws an error if the prefix, suffix, or length are invalid or missing.
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