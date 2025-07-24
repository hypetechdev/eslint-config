# HypeTech - eslint-config

The official HypeTech eslint configuration, part of the Frontend Coding Standards.

> **New in v3.0.0**: Next.js 15 with ESLint 9 flat configuration is now the default. Legacy ESLint 8.x configuration is still available.

## Quick Start

```bash
# Install
pnpm add -D @hypetech/eslint-config eslint@^9 prettier@^3

# Create eslint.config.mjs
echo "import eslintConfig from '@hypetech/eslint-config';\nexport default eslintConfig;" > eslint.config.mjs
```

## Configuration Types

This package provides two types of ESLint configurations:

1. **Flat Configuration** (default) - for ESLint 9.x and Next.js 15 or later
   - Import: `import eslintConfig from '@hypetech/eslint-config'`
   - Modern flat config system with improved performance
   - Includes Next.js 15 specific rules and optimizations

2. **Legacy Configuration** - for ESLint 8.x and Next.js 14 or earlier
   - Import: `extends: '@hypetech/eslint-config/legacy'`
   - Traditional .eslintrc configuration
   - Maintained for backward compatibility

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

### Peer Dependencies

This package requires ESLint 9.x or higher and Prettier 3.x or higher:

```bash
pnpm add -D eslint@^9.0.0 prettier@^3.0.0
# or
yarn add -D eslint@^9.0.0 prettier@^3.0.0
# or
npm install --save-dev eslint@^9.0.0 prettier@^3.0.0
```

> **Note**: All ESLint plugins and parsers are included as dependencies, so you don't need to install them separately.

## Usage

### Flat Configuration (Default - ESLint 9.x, Next.js 15 or later)

Next.js 15 uses ESLint 9 with the new flat configuration system. This is now the default export:

#### Option 1: Basic Usage

Create an `eslint.config.mjs` file in your project root:

```js
// eslint.config.mjs
import eslintConfig from '@hypetech/eslint-config';

export default eslintConfig;
```

#### Option 2: Extending the Configuration

To customize the configuration:

```js
// eslint.config.mjs
import eslintConfig from '@hypetech/eslint-config';

export default [
  ...eslintConfig,
  // Your custom configurations here
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Your custom rules here
      "no-console": "warn",
    },
  },
];
```

#### Option 3: Adding Additional Plugins

To add additional plugins to the configuration:

```js
// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfig from '@hypetech/eslint-config';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...eslintConfig,
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
```

### Legacy Configuration (ESLint 8.x, Next.js 14 or earlier)

To use the legacy configuration, import it from the `/legacy` path:

#### Option 1: Via package.json

Add the `eslint` property to your `package.json` file:

```json
"eslintConfig": {
   "extends": "@hypetech/eslint-config/legacy"
}
```

You can use the `npm pkg` subcommand to add this automatically:

```bash
npm pkg set eslintConfig.extends=@hypetech/eslint-config/legacy
```

#### Option 2: Via .eslintrc.js or .eslintrc.cjs

Create a `.eslintrc.js` file (or `.eslintrc.cjs` if your package uses `"type": "module"`) in your project root:

```js
module.exports = {
    root: true,
    extends: '@hypetech/eslint-config/legacy',
}
```

#### Option 3: Extending the configuration

To customize the configuration, create a `.eslintrc.js` or `.eslintrc.cjs` file:

```js
module.exports = {
    ...require('@hypetech/eslint-config/legacy'),
    rules: {
        // Your custom rules here
        'no-console': 'warn',
    },
}
```

> **Best Practice**: Use `package.json` for libraries and `.eslintrc.js`/`.eslintrc.cjs` for applications. Avoid using both methods in the same project.

## Migration Guide

### Migrating from ESLint 8 to ESLint 9 (Next.js 14 to Next.js 15)

1. **Update dependencies**:
   ```bash
   npm install --save-dev eslint@^9.0.0 prettier@^3.0.0
   npm update @hypetech/eslint-config
   ```

2. **Create a new flat config file**:
   Create an `eslint.config.mjs` file in your project root:
   ```js
   import eslintConfig from '@hypetech/eslint-config';
   
   export default eslintConfig;
   ```

3. **Remove old configuration**:
   If you have an existing `.eslintrc.js`, `.eslintrc.cjs`, or `eslintConfig` in your `package.json`, you can remove it.

4. **Update your VS Code settings** (optional):
   If you're using VS Code, update your settings to work with the new flat config:
   ```json
   {
     "eslint.experimental.useFlatConfig": true
   }
   ```

### Using Legacy Configuration

If you need to continue using the ESLint 8.x configuration (e.g., for compatibility reasons), update your imports:

```js
// Before (v2.x)
extends: '@hypetech/eslint-config'

// After (v3.x)
extends: '@hypetech/eslint-config/legacy'
```

# Contributing

Contributions are welcome! Open a pull request to fix a bug, or open an issue to discuss a new feature or change.

# License

This project is licensed under the terms of the [MIT license](/LICENSE).
