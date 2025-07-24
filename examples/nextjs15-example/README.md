# Next.js 15 Example with Flat ESLint Configuration

This example demonstrates how to use `@hypetech/eslint-config` with Next.js 15 and ESLint 9.x flat configuration.

## Setup

1. Install dependencies:
```bash
npm install --save-dev @hypetech/eslint-config eslint@^9.0.0 prettier@^3.0.0
```

2. The `eslint.config.mjs` file is already configured to use the new default flat configuration:
```js
import eslintConfig from '@hypetech/eslint-config';

export default [
  ...eslintConfig,
  // Project-specific configurations
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Add any project-specific rules here
      "no-console": "warn",
    },
  },
];
```

## Usage

Run ESLint:
```bash
npx eslint .
```

With auto-fix:
```bash
npx eslint . --fix
```

## Features

- Uses the modern ESLint 9.x flat configuration system
- Includes Next.js 15 specific rules and optimizations
- Better performance compared to traditional configuration
- All required plugins are included as dependencies

## Customization

To add additional plugins or extend the configuration:

```js
import eslintConfig from '@hypetech/eslint-config';
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...eslintConfig,
  // Add additional plugins
  ...compat.extends("plugin:tailwindcss/recommended"),
  // Your custom rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-console": "warn",
    },
  },
];
```