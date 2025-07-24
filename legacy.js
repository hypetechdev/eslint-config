module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
        "plugin:prettier/recommended",
    ],
    plugins: ["@typescript-eslint", "import", "unused-imports"],
    parserOptions: {
        ecmaVersion: 2022, // Updated to support newer JavaScript features in Next.js 15
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                prev: ["const", "let", "var", "export", "interface", "type"],
                next: "*",
            },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"],
            },
            { blankLine: "always", prev: "*", next: ["interface", "type"] },
        ],
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                alphabetize: { order: 'asc', caseInsensitive: true },
                // Custom groups for sorting
                pathGroups: [
                    "@/",
                    "types",
                    "config",
                    "lib",
                    "app",
                    "components",
                    "pages",
                    "res",
                ].map(function (path) {
                    return {
                        pattern: path + "/**",
                        group: "external",
                        position: "after",
                    };
                }),
                pathGroupsExcludedImportTypes: ["builtin"],
            },
        ],
        "padding-line-between-statements": "off",
        "prettier/prettier": "error",
        "react/react-in-jsx-scope": "off",
        "unused-imports/no-unused-imports-ts": "error",
        "unused-imports/no-unused-vars-ts": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
