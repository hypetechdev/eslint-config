# HypeTech - eslint-config

The official HypeTech eslint configuration, part of the Frontend Coding Standards.

> **New in v3.0.0**: Support for Next.js 15 with ESLint 9 flat configuration system.

## Configuration Types

This package provides two types of ESLint configurations:

1. **Traditional Configuration** (for ESLint 8.x and Next.js 14 or earlier)
2. **Flat Configuration** (for ESLint 9.x and Next.js 15 or later)

## Installation

The configuration can be installed via your preferred package manager.

### For All Configurations

With PNPM (preferred):

```bash
pnpm add @hypetech/eslint-config -D
```

With Yarn:

```bash
yarn add -D @hypetech/eslint-config
```

With NPM:

```bash
npm install --save-dev @hypetech/eslint-config
```

### Additional Dependencies for Next.js 15 (Flat Config)

If you're using Next.js 15 with ESLint 9 flat configuration, you'll need these additional dependencies:

```bash
pnpm add -D eslint@^9.0.0 @eslint/eslintrc@^3.0.0 @eslint/js@^9.0.0
# or
yarn add -D eslint@^9.0.0 @eslint/eslintrc@^3.0.0 @eslint/js@^9.0.0
# or
npm install --save-dev eslint@^9.0.0 @eslint/eslintrc@^3.0.0 @eslint/js@^9.0.0
```

## Usage

### Traditional Configuration (ESLint 8.x, Next.js 14 or earlier)

To use the traditional configuration, you have several options:

#### Option 1: Via package.json

Add the `eslint` property to your `package.json` file:

```json
"eslintConfig": {
   "extends": "@hypetech/eslint-config"
}
```

You can use the `npm pkg` subcommand to add this automatically:

```bash
npm pkg set eslintConfig.extends=@hypetech/eslint-config
```

#### Option 2: Via .eslintrc.js or .eslintrc.cjs

Create a `.eslintrc.js` file (or `.eslintrc.cjs` if your package uses `"type": "module"`) in your project root:

```js
module.exports = {
    root: true,
    extends: '@hypetech/eslint-config',
}
```

#### Option 3: Extending the configuration

To customize the configuration, create a `.eslintrc.js` or `.eslintrc.cjs` file:

```js
module.exports = {
    ...require('@hypetech/eslint-config'),
    rules: {
        // Your custom rules here
        'no-console': 'warn',
    },
}
```

> **Best Practice**: Use `package.json` for libraries and `.eslintrc.js`/`.eslintrc.cjs` for applications. Avoid using both methods in the same project.

### Flat Configuration (ESLint 9.x, Next.js 15 or later)

Next.js 15 uses ESLint 9 with the new flat configuration system. Here's how to use our flat config:

#### Option 1: Basic Usage

Create an `eslint.config.mjs` file in your project root:

```js
// eslint.config.mjs
import hypeConfig from '@hypetech/eslint-config/flat';

export default hypeConfig;
```

#### Option 2: Extending the Configuration

To customize the configuration, you can extend it in your `eslint.config.mjs` file:

```js
// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import hypeConfig from '@hypetech/eslint-config/flat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...hypeConfig,
  // Your custom configurations here
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Your custom rules here
      "no-console": "warn",
    },
  },
];

export default eslintConfig;
```

#### Option 3: Adding Additional Plugins

To add additional plugins to the configuration:

```js
// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import hypeConfig from '@hypetech/eslint-config/flat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...hypeConfig,
  // Add additional plugins using FlatCompat
  ...compat.extends("plugin:tailwindcss/recommended"),
  // Your custom rules
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-console": "warn",
    },
  },
];

export default eslintConfig;
```

## Migration Guide

### Migrating from ESLint 8 to ESLint 9 (Next.js 14 to Next.js 15)

1. **Install required dependencies**:
   ```bash
   npm install --save-dev eslint@^9.0.0 @eslint/eslintrc@^3.0.0 @eslint/js@^9.0.0
   ```

2. **Create a new flat config file**:
   Create an `eslint.config.mjs` file in your project root:
   ```js
   import hypeConfig from '@hypetech/eslint-config/flat';
   
   export default hypeConfig;
   ```

3. **Remove old configuration**:
   If you have an existing `.eslintrc.js`, `.eslintrc.cjs`, or `eslintConfig` in your `package.json`, you can remove it or keep it for backward compatibility with tools that don't yet support the flat config system.

4. **Update your VS Code settings** (optional):
   If you're using VS Code, update your settings to work with the new flat config:
   ```json
   {
     "eslint.experimental.useFlatConfig": true
   }
   ```

# Contributing

Contributions are welcome! Open a pull request to fix a bug, or open an issue to discuss a new feature or change.

# License

This project is licensed under the terms of the [MIT license](/LICENSE).
