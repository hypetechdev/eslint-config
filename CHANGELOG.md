# Changelog

All notable changes to this project will be documented in this file.

## [3.0.2] - 2025-07-24

### 💅 Changed

- 📐 Updated Prettier configuration to use double quotes instead of single quotes
- 📏 Increased print width from 100 to 120 characters for better readability
- 🔤 Added `quoteProps: "preserve"` to maintain quote consistency on object properties

### ✨ Added

- 📚 New example project for Next.js 14 with v3 flat config (`examples/nextjs14-v3-flat-config`)
- 📖 Documentation on how to use ESLint 9.x flat config with Next.js 14 projects

## [3.0.1] - 2025-07-24

### 🐛 Fixed

- 🔧 Fixed "Failed to load plugin 'react'" error in legacy configuration by explicitly declaring the react plugin
- ⚛️ Added missing react plugin declaration in legacy.js plugins array

## [3.0.0] - 2025-07-24

### 💥 Breaking Changes

- 🔄 **Default export changed**: The package now exports the Next.js 15 flat configuration by default
- 📦 **Legacy configuration moved**: ESLint 8.x configuration is now available at `@hypetech/eslint-config/legacy`
- ⬆️ **Minimum ESLint version**: Now requires ESLint 9.x or higher

### ✨ Added

- 🚀 Full support for Next.js 15 with ESLint 9 flat configuration system as the default export
- 🔙 New legacy export path (`/legacy`) for backward compatibility with ESLint 8.x
- 📦 New dependency: `@next/eslint-plugin-next` for Next.js 15 specific rules
- 📚 Example configurations for both Next.js 14 and Next.js 15
- 🌍 Comprehensive globals definition for browser, Node.js, and React environments
- 📂 Improved import ordering with more granular path groups

### 🔄 Changed

- 🎯 **Default configuration**: Next.js 15 flat config is now the main export (`index.js`)
- 📍 **Import path for flat config**: Still available at `/flat` but now identical to default export
- 🆕 Updated `ecmaVersion` to `latest` in the flat configuration
- 🧩 Enhanced TypeScript configuration with project-aware parsing
- ⬆️ Updated all dependencies to their latest versions
- 🏗️ Restructured package exports for better developer experience

### 📋 Migration Guide

- ➡️ For Next.js 15 projects: Use the default import `import eslintConfig from '@hypetech/eslint-config'`
- ⬅️ For legacy projects: Update imports to use `@hypetech/eslint-config/legacy`
- ✅ All ESLint plugins are now included as dependencies (no need to install separately)

## [2.1.0] - 2023-07-24

### 🔄 Changed

- ⬆️ Updated all dependencies to latest support version

## [2.0.0] - 2023-12-08

### 🔄 Changed

- ⬆️ Updated all dependencies to latest version

### 🗑️ Removed

- ❌ `eslint-config-next` dependency and configuration

## [1.0.0] - 2023-08-21

### ✨ Added

- 🎯 ESlint configuration according to HypeTech Frontend Coding Standards
- 📖 Install documentation
- 📝 Changes changelog
- 🚀 Actions release workflow
