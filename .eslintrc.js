module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  // extends: '@react-native-community',
  extends: 'eslint:recommended',
  rules: {
    'no-else-return': ['error'], // 禁止if语句之后又else
    'object-curly-spacing': ['error', 'always']
  }
};
