/** @type {import('lint-staged').Configuration} */
export default {
  '*.{md,css}': 'prettier --write',
  '*.{js,ts,jsx,tsx,cjs,cts,mjs,mts,json}': [
    'eslint --fix',
    'prettier --write',
  ],
};
