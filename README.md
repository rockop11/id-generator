# 🚀 rp11-id-generator

![npm](https://img.shields.io/npm/v/rp11-id-generator)
![downloads](https://img.shields.io/npm/dm/rp11-id-generator)
![license](https://img.shields.io/badge/license-MIT-blue)

A lightweight and flexible ID generator for JavaScript and TypeScript.

Generate:
- **UUIDs** – Standard universally unique identifiers (UUID v4)
- **Nano IDs** – Compact, URL-friendly random IDs
- **Custom IDs** – Fully customizable with prefix, suffix, and length

Perfect for user IDs, product tags, order numbers, or any structured identifiers.

---

## 📦 Installation

```bash
npm install rp11-id-generator
```

---

## ⚡ Quick Start

```typescript
import { generateUUID, generateNanoId, generateCustomId } from "rp11-id-generator";

// UUID
const uuid = generateUUID();
console.log(uuid);
// Example: "550e8400-e29b-41d4-a716-446655440000"

// Nano ID (default: 12 characters)
const nanoId = generateNanoId();
console.log(nanoId);
// Example: "V1StGXR8_Z5jd"

// Nano ID (custom size)
const customNanoId = generateNanoId(16);
console.log(customNanoId);
// Example: "f90sA2m1zH8KQcP0"

// Custom ID
const customId = generateCustomId({
  prefix: "user",
  length: 8,
  suffix: "id"
});
console.log(customId);
// Example: "user-A1b2C3d4-id"
```

---

## 📚 API Reference

### `generateUUID()`

Generates a standard UUID v4 using the native Web Crypto API.

```typescript
function generateUUID(): string
```

**Returns:** A 36-character UUID string in the format `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.

```typescript
const uuid = generateUUID();
console.log(uuid);
// Example: "550e8400-e29b-41d4-a716-446655440000"
```

---

### `generateNanoId(size?)`

Generates a compact, URL-friendly ID using the `nanoid` library.

```typescript
function generateNanoId(size?: number): string
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `number` | `12` | Length of the generated ID (minimum: **8**) |

**Returns:** A string of random characters (alphanumeric + `-` and `_`).

**Error:** Throws `"The minimum size for Nano ID is 8 characters."` if `size` is less than 8.

```typescript
// Default size (12 characters)
const nanoId = generateNanoId();
console.log(nanoId);
// Example: "V1StGXR8_Z5jd"

// Custom size
const customNanoId = generateNanoId(16);
console.log(customNanoId);
// Example: "f90sA2m1zH8KQcP0"

// Error example
generateNanoId(5); // Throws: "The minimum size for Nano ID is 8 characters."
```

---

### `generateCustomId(options)`

Generates a fully customizable ID with a random block between a prefix and a suffix.

```typescript
function generateCustomId(options: CustomIdProps): string
```

**Type:**

```typescript
interface CustomIdProps {
  prefix: string;
  length: number;
  suffix: string;
}
```

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options.prefix` | `string` | ✅ Yes | Text to prepend to the ID (cannot be empty) |
| `options.length` | `number` | ✅ Yes | Length of the random block (must be > 0) |
| `options.suffix` | `string` | ✅ Yes | Text to append to the ID (cannot be empty) |

**Returns:** A formatted ID string: `<prefix>-<randomBlock>-<suffix>`

**Random block charset:** `a-z`, `A-Z`, `0-9` (62 characters)

**Errors:**
- Throws `"prefix is required"` if prefix is empty or missing
- Throws `"suffix is required"` if suffix is empty or missing
- Throws `"length must be a number greater than 0"` if length is invalid

```typescript
const customId = generateCustomId({
  prefix: "user",
  length: 8,
  suffix: "id"
});
console.log(customId);
// Example: "user-A1b2C3d4-id"

// Error examples
generateCustomId({ prefix: "", length: 8, suffix: "id" }); // Throws: "prefix is required"
generateCustomId({ prefix: "user", length: 0, suffix: "id" }); // Throws: "length must be a number greater than 0"
generateCustomId({ prefix: "user", length: 8, suffix: "" }); // Throws: "suffix is required"
```

---

## 🧩 Features

- 🔹 **Lightweight and fast** – Minimal overhead
- 🔹 **Fully typed** – Complete TypeScript support included
- 🔹 **Tree-shakable** – Import only what you need
- 🔹 **Cross-platform** – Works in Node.js and browser
- 🔹 **Minimal dependencies** – Only depends on `nanoid`

---

## 💻 CommonJS (Node.js)

```javascript
const {
  generateUUID,
  generateNanoId,
  generateCustomId
} = require("rp11-id-generator");
```

---

## 🧪 Use Cases

- **User IDs** – `generateCustomId({ prefix: "usr", length: 6, suffix: "id" })` → `"usr-xK9mP2-id"`
- **Order numbers** – `generateNanoId(16)` → `"aB3dE7fG2H9jK4mN"`
- **Product codes** – `generateCustomId({ prefix: "PRD", length: 8, suffix: "CODE" })` → `"PRD-aB3dE7fG-CODE"`
- **Session identifiers** – `generateUUID()` → `"550e8400-e29b-41d4-a716-446655440000"`
- **Temporary tokens** – `generateNanoId()` → `"V1StGXR8_Z5jd"`

---

## 🔒 Error Handling

All functions include built-in validation:

```typescript
// Nano ID error (size must be at least 8)
try {
  generateNanoId(5); // Throws: "The minimum size for Nano ID is 8 characters."
} catch (error) {
  console.error(error.message);
}

// Custom ID errors
try {
  generateCustomId({ prefix: "", length: 8, suffix: "id" }); // Throws: "prefix is required"
} catch (error) {
  console.error(error.message);
}
```

---

## 📄 License

MIT

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.