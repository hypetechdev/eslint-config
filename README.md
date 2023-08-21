# HypeTech - eslint-config

The official HypeTech eslint configuration, part of the Frontend Coding Standards.

## Installation

The configuration can be installed via your preferred package manager.

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
npm install --dev @hypetech/prettier-config
```

To inform eslint of this configuration, you have to add the `eslint` property to your `package.json` file:

```json
"eslintConfig": {
   "extends": "@hypetech/eslint-config"
}
```

Instead of manually editing your `package.json`, you can also utilize the `npm pkg` subcommand:

```bash
npm pkg set eslintConfig.extends=@hypetech/eslint-config
```

Alternatively, you can also create a `.eslintrc.cjs` file in your project root and add the following content:

```js
module.exports = {
    root: true,
    extends: '@hypetech/eslint-config',
}
```

> Notice: You should add configuration to your `package.json` if you are creating a library, and use a `.eslintrc.cjs` file if you are creating an application. And you should avoid both ways in the same project.

## Extending

To extend the configuration, you will have to create a `.eslintrc.js` file (or `.eslintrc.cjs` if your package is a `"type": "module"`) and import the HypeTech configuration using `require`:

```js
module.exports = {
    ...require('@hypetech/eslint-config'),
    rules: {
        'no-console': 'warn',
    },
}
```

# Contributing

Contributions are welcome! Open a pull request to fix a bug, or open an issue to discuss a new feature or change.

# License

This project is licensed under the terms of the [MIT license](/LICENSE).
