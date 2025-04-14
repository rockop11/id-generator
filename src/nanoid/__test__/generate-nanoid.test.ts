import { generateNanoId } from "../generate-nanoid";

describe("Nano ID Generator", () => {
    const nanoId = generateNanoId()

    it("should contain 12 chars. by default", () => {
        expect(nanoId).toHaveLength(12)
    })

    it("should create an id with params quantity", () => {
        const quantityNanoId = generateNanoId(8)
        expect(quantityNanoId).toHaveLength(8)
    })

    it("should create unique ids", () => {
        const id2 = generateNanoId();
        expect(nanoId).not.toBe(id2);
    });

    it("should return error if size < 8", () => {
        expect(() => generateNanoId(7)).toThrow("El tamaño mínimo para Nano ID es 8 caracteres.")
    })
})