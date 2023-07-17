/*
 * @Author: chengen
 * @Date: 2023-07-17 17:46:22
 * @LastEditors: chengen
 * @LastEditTime: 2023-07-17 17:49:43
 * @FilePath: /sparrow/jest.config.js
 */
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
module.exports = {

  testMatch: ['**/__tests__/**/*.spec.js'], // 只测试后缀为 .spec.js 的文件
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
};
