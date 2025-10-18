import nx from '@nx/eslint-plugin';
import { sheriff } from 'eslint-config-sheriff';
import jsoncParser from 'jsonc-eslint-parser';
import eslintPluginJsonc from 'eslint-plugin-jsonc';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  ...sheriff({
    react: true,
    next: false,
    astro: false,
    lodash: false,
    remeda: false,
    playwright: false,
    storybook: false,
    jest: false,
    vitest: false,
  }),
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    // Override or add rules here
    rules: {
      'fsecond/prefer-destructured-optionals': 'off',
      'import/no-default-export': 'off',
      'import/no-named-as-default': 'off',
      '@regru/prefer-early-return/prefer-early-return': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      'react/no-unknown-property': 'off',
    },
  },
  ...eslintPluginJsonc.configs['flat/recommended-with-json'],
  {
    files: ['*.json', '*.json5'],
    languageOptions: {
      parser: jsoncParser,
    },
  },
];
