/**
 * Verificar que tenga 36 caracteres.
 * Verificar que el formato sea 8-4-4-4-12
 * Verificar que tenga 32 caracteres hexadecimales
 */

import { generateUUID } from "../generate-uuid"

describe("check uuuid generator", () => {

    const randomId = generateUUID()
    const splittedId = randomId.split("-")

    it("should contain 36 characters", () => {
        expect(randomId).toHaveLength(36)
    })

    it("generateUUID should follow UUID v4 format (8-4-4-4-12)", () => {   
        // Expresión regular para un UUID estándar con guiones en formato 8-4-4-4-12
        const uuidRegex = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
      
        const hyphens = (randomId.match(/-/g) || []).length;
      
        expect(randomId).toMatch(uuidRegex);
        expect(hyphens).toBe(4);
      });

    it("should contain 32 hexa characters", () => {
        const joinedId = splittedId.join("")
        expect(joinedId).toHaveLength(32)

        const hexRegex = /^[a-f0-9]{32}$/i;

        expect(joinedId).toHaveLength(32);
        expect(hexRegex.test(joinedId)).toBe(true);
    })
})