/*
 * @Author: chengen
 * @Date: 2023-07-17 15:32:02
 * @LastEditors: chengen
 * @LastEditTime: 2023-07-17 17:46:41
 * @FilePath: /sparrow/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 集成测试
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 这里添加一行规则把这条规则隐藏
    'import/prefer-default-export': 0,
  },
};
