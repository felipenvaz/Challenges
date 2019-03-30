module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'max-len': ["error", { "code": 120, "ignoreComments": true }],
    'no-console': 0,
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    'linebreak-style': ["error", "windows"]
  },
};
