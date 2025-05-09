// Example eslint.config.mjs for a Next.js 15 project
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import hypeConfig from '../../eslint.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...hypeConfig,
  // Project-specific configurations
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Add any project-specific rules here
      "no-console": "warn",
    },
  },
];

export default eslintConfig;
