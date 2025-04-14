# ID Generator

A simple and flexible ID generator library for JavaScript/TypeScript projects.  
Supports UUIDs, Nano IDs, and fully customizable IDs with prefix, suffix and length configuration.

Perfect for generating user IDs, product tags, or any uniquely structured identifiers.

> ⚠️ This package has not been published to yarn yet.

## Installation
```bash
npm install rp11-id-generator
```


## Quick usage with import (React)

### Generate a UUID

```ts
import { generateUUID } from "rp11-id-generator";

const uuid = generateUUID();
console.log(uuid)
// Example: "550e8400-e29b-41d4-a716-446655440000"
```

### Generate a NanoID 
```ts
import { generateNanoId } from "rp11-id-generator";

// With default size (12 characters)
const nanoId = generateNanoId();
console.log(nanoId)
// Example: "V1StGXR8_Z5jd"

// With custom size
const customSizedId = generateNanoId(20);
console.log(customSizedId)
// Example: "f90sA2m1zH8KQcP0Xy72"
```

### Generate a CustomId
```ts
import { generateCustomId } from "rp11-id-generator";

const customId = generateCustomId({
  prefix: "user",
  length: 8,
  suffix: "id"
});
console.log(customId)
// Example: "user-A1b2C3d4-id"
```

## Quick usage with require (Node.js)

### Generate a UUID
```ts
const { generateUUID } = require("rp11-id-generator")

const uuid = generateUUID()

console.log(uuid)
// Example: "550e8400-e29b-41d4-a716-446655440000"
```

### Generate a NanoID 
```ts
const { generateNanoId } = require("rp11-id-generator")

// With default size (12 characters)
const nanoId = generateNanoId();
console.log(nanoId)
// Example: "V1StGXR8_Z5jd"

// With custom size
const customSizedId = generateNanoId(20);
console.log(customSizedId)
// Example: "f90sA2m1zH8KQcP0Xy72"
```

### Generate a CustomId
```ts
const { generateCustomId } = require("rp11-id-generator")

const customId = generateCustomId({
  prefix: "user",
  length: 8,
  suffix: "id"
});
console.log(customId)
// Example: "user-A1b2C3d4-id"
```