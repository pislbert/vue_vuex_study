module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

// '@vue/prettier'
// 'plugin:vue/essential'
// 'plugin:vue/recommended',
// indent: ['error', 4]

/*
    indent: 'off',
    'vue/script-indent': [
      'error',
      4,
      {
        baseIndent: 1
      }
    ]
*/