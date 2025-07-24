# Next.js 14 Example with Legacy ESLint Configuration

This example demonstrates how to use `@hypetech/eslint-config` with Next.js 14 and ESLint 8.x.

## Setup

1. Install dependencies:
```bash
npm install --save-dev @hypetech/eslint-config eslint@^8.0.0 prettier@^3.0.0
```

2. The `.eslintrc.js` file is already configured to use the legacy configuration:
```js
module.exports = {
  root: true,
  extends: '@hypetech/eslint-config/legacy',
  rules: {
    // Add any project-specific rules here
    'no-console': 'warn',
  },
};
```

## Usage

Run ESLint:
```bash
npx eslint . --ext .js,.jsx,.ts,.tsx
```

With auto-fix:
```bash
npx eslint . --ext .js,.jsx,.ts,.tsx --fix
```

## Notes

- This configuration uses the traditional `.eslintrc.js` format
- It's compatible with ESLint 8.x and Next.js 14 or earlier
- The `/legacy` import path ensures you get the ESLint 8.x compatible configuration