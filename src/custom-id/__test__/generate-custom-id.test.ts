import { CustomIdProps, generateCustomId } from "../generate-custom-id"

describe("Custom ID Generator", () => {
    const customId = generateCustomId({
        prefix: 'user',
        length: 10,
        suffix: 'admin',
    })

    it("should measure the value of suffix, id, and prefix together", () => {
        expect(customId).toHaveLength(21)
    })

    it("should measure random id the same as length", () => {
        const splittedId = customId.split("-")
        const randomPart = splittedId[1]

        expect(randomPart).toHaveLength(10)
    })

    it("should generate unique ids", () => {
        const anotherCustomId = generateCustomId({
            prefix: 'user',
            length: 10,
            suffix: 'admin',
        })
        expect(customId).not.toBe(anotherCustomId)
    })

    it.each([
        {
            tested: { prefix: "", length: 5, suffix: "id" },
            expected: "prefix is required",
            label: "should throw an error if prefix is missing"
        },
        {
            tested: { prefix: "user", length: 5, suffix: "" },
            expected: "suffix is required",
            label: "should throw an error if suffix is missing"
        },
        {
            tested: { prefix: "user", length: 0, suffix: "id" },
            expected: "length must be a number greater than 0",
            label: "should throw an error if length is 0"
        },
        {
            tested: { prefix: "user", length: -3, suffix: "id" },
            expected: "length must be a number greater than 0",
            label: "should throw an error if length is negative"
        },
        {
            tested: { prefix: "user", length: "cinco", suffix: "id" },
            expected: "length must be a number greater than 0",
            label: "should throw an error if length is not a number"
        }
    ])('$label', ({ tested, expected }) => {
        expect(() => generateCustomId(tested as CustomIdProps)).toThrow(expected);
    });
})