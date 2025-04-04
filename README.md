# ID Generator

A simple and flexible ID generator library for JavaScript/TypeScript projects.  
Supports UUIDs, Nano IDs, and fully customizable IDs with prefix, suffix and length configuration.

Perfect for generating user IDs, product tags, or any uniquely structured identifiers.

> ⚠️ This package has not been published to yarn yet.

## Installation
```bash
npm install id-generator
```


## Quick Usage

### Generate a UUID

```ts
import { generateUUID } from "id-generator";

const id = generateUUID();
// Example: "550e8400-e29b-41d4-a716-446655440000"
```

### Generate a NanoID 
```ts
import { generateNanoId } from "id-generator";

// With default size (12 characters)
const id = generateNanoId();
// Example: "V1StGXR8_Z5jd"

// With custom size
const customSizedId = generateNanoId(20);
// Example: "f90sA2m1zH8KQcP0Xy72"
```

### Generate a CustomId
```ts
import { generateCustomId } from "id-generator";

const id = generateCustomId({
  prefix: "user",
  length: 8,
  suffix: "id"
});
// Example: "user-A1b2C3d4-id"
```