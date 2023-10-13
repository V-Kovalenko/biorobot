module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
  ],
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'es2021',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    /**
     * Vue
     */
    'vue/multi-word-component-names': 0,
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    'vue/no-setup-props-destructure': 'off',
    /**
     * Typescript
     */
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 5,
      },
    ],
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    /**
     * Best practices
     */
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
            'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
            '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'global-require': 'off',
    'no-shadow': 'off',
    /**
     * Imports
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
          'builtin',
          'object',
          'type',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'prefer-destructuring': 'off',
  },
  ignorePatterns: [
    'types/*.*',
    'types/',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
      nuxt: {
        extensions: ['.js', '.ts', '.vue', '.json'],
      },
    },
  },
};
