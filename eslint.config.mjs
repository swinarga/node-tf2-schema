import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores(['**/local', '**/examples']),
    {
        extends: compat.extends('eslint:recommended', 'google'),

        languageOptions: {
            globals: {
                ...globals.node
            },

            ecmaVersion: 2020,
            sourceType: 'commonjs'
        },

        rules: {
            // Disabled - removed in ESLint v9 (from google config)
            'valid-jsdoc': 'off',
            'require-jsdoc': 'off',

            // Disabled - let Prettier handle formatting
            'arrow-parens': 'off',
            'comma-dangle': 'off',
            'eol-last': 'off',
            indent: 'off',
            'keyword-spacing': 'off',
            'linebreak-style': 'off',
            'max-len': 'off',
            'no-multi-spaces': 'off',
            'object-curly-spacing': 'off',
            'operator-linebreak': 'off',
            'padded-blocks': 'off',
            'quote-props': 'off',
            semi: 'off',
            'space-before-function-paren': 'off',

            // Keep these ESLint rules (logic, not formatting)
            'new-cap': 'off',
            'no-console': 'error',
            'no-invalid-this': 'off'
        }
    }
]);
