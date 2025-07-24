// Example eslint.config.mjs for a Next.js 15 project using ESLint 9.x
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
