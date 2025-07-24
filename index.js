import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'

export default [
    // Global ignores
    {
        ignores: [
            '**/node_modules/**',
            '**/.next/**',
            '**/out/**',
            '**/dist/**',
            '**/.env*',
            '**/coverage/**',
            '**/playwright-report/**',
            '**/test-results/**',
            '**/*.config.js',
            '**/*.config.ts',
            '**/next-env.d.ts',
        ],
    },

    // Base JavaScript config
    js.configs.recommended,

    // TypeScript config
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            ...typescriptPlugin.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': 'off', // Handled by unused-imports
            '@typescript-eslint/no-explicit-any': 'off', // As per ESLINT_CONFIG.md
            '@typescript-eslint/no-empty-interface': 'error',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-non-null-assertion': 'warn',
        },
    },

    // React and Next.js config
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            '@next/next': nextPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off', // Not needed in Next.js
            'react/prop-types': 'off', // Using TypeScript
        },
    },

    // Custom rules
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            'unused-imports': unusedImports,
            prettier: prettier,
            import: importPlugin,
        },
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                },
                node: true,
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
        },
        languageOptions: {
            globals: {
                // Browser globals
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                console: 'readonly',
                URL: 'readonly',
                HTMLDivElement: 'readonly',
                HTMLElement: 'readonly',
                Element: 'readonly',
                fetch: 'readonly',
                Request: 'readonly',
                Response: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                // Node globals
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                global: 'readonly',
                // React globals
                React: 'readonly',
                JSX: 'readonly',
            },
        },
        rules: {
            // Import ordering rules (from ESLINT_CONFIG.md)
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'sibling', 'index'],
                        'type',
                    ],
                    pathGroups: [
                        // Treat each internal import as a separate group
                        {
                            pattern: '@/config/**',
                            group: 'internal',
                            position: 'before',
                        },
                        {
                            pattern: '@/lib/**',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: '@/contexts/**',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: '@/app/**',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: '@/ui/**',
                            group: 'internal',
                            position: 'after',
                        },
                    ],
                    distinctGroup: true,
                    pathGroupsExcludedImportTypes: ['builtin'],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],

            // Unused imports rules
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],

            // Prettier rules
            'prettier/prettier': [
                'warn',
                {
                    endOfLine: 'auto',
                    semi: false,
                    trailingComma: 'es5',
                    singleQuote: true,
                    printWidth: 100,
                    tabWidth: 4,
                    useTabs: false,
                    bracketSpacing: true,
                    bracketSameLine: false,
                    arrowParens: 'avoid',
                },
            ],

            // General JavaScript rules
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-unused-vars': 'off',
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*' },
                { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            ],
        },
    },
]
