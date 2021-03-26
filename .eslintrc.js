module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: ['prettier'],
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 7,
        sourceType: "module",
        ecmaFeatures: {
          // 添加ES特性支持，使之能够识别ES6语法
          jsx: true,
        },
      },
    rules: {
        'prettier/prettier': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
