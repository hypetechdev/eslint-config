# Next.js 14 with ESLint v3 Flat Config Example

This example demonstrates how to use `@hypetech/eslint-config` v3 with the new flat config system in Next.js 14 projects.

## Overview

While Next.js 14 was designed to work with ESLint 8.x and traditional configurations, you can still use the modern ESLint 9.x flat config system with it. This example shows how to set it up.

## Setup

1. Install dependencies:
```bash
npm install --save-dev @hypetech/eslint-config@^3.0.0 eslint@^9.0.0 prettier@^3.0.0
```

2. Create `eslint.config.mjs` in your project root:
```js
import hypetechConfig from '@hypetech/eslint-config';

export default [
  ...hypetechConfig,
  {
    // Add any project-specific overrides here
    rules: {
      'no-console': 'warn',
    },
  },
];
```

3. Update your `package.json` scripts:
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Important Notes

- Next.js 14's built-in ESLint integration (`next lint`) expects traditional config format
- Use `npx eslint` directly instead of `next lint` when using flat config
- The flat config provides the same rules and functionality as the legacy config
- You may need to disable Next.js's built-in linting in `next.config.js`:

```js
module.exports = {
  eslint: {
    // This allows production builds to complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};
```

## Migration from Legacy Config

If you're migrating from the legacy configuration:

1. Remove `.eslintrc.js`, `.eslintrc.json`, or any other legacy config files
2. Create `eslint.config.mjs` as shown above
3. Update your CI/CD pipelines to use `eslint` instead of `next lint`

## Benefits of Using Flat Config

- Future-proof your project for ESLint 9.x ecosystem
- Simpler configuration with better composability
- Better performance with ESLint 9.x
- Consistent with modern JavaScript tooling

## Example Configuration with Custom Rules

```js
import hypetechConfig from '@hypetech/eslint-config';
import reactPlugin from 'eslint-plugin-react';

export default [
  ...hypetechConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
    },
  },
  {
    // Ignore specific files or directories
    ignores: ['**/dist/**', '**/build/**', '.next/**'],
  },
];
```

## Troubleshooting

### VSCode Integration

Make sure your VSCode is using the workspace version of ESLint:
1. Open Command Palette (Cmd/Ctrl + Shift + P)
2. Run "ESLint: Select Node Path"
3. Choose "Use Workspace Version"

### Type Errors

If you encounter type errors with TypeScript, ensure you have the latest versions:
```bash
npm install --save-dev @typescript-eslint/parser@latest @typescript-eslint/eslint-plugin@latest
```