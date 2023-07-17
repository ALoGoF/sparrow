/* eslint-disable import/no-extraneous-dependencies */
/*
 * @Author: chengen
 * @Date: 2023-07-17 16:40:55
 * @LastEditors: chengen
 * @LastEditTime: 2023-07-17 18:36:48
 * @FilePath: /sparrow/rollup.config.js
 */

const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/sparrow.js', // 对于 Nodejs，打包成 commonjs
      format: 'cjs',
    },
    {
      file: 'esm/sparrow.js', // 对于浏览器，打包成 ES module
      format: 'es',
    },
    {
      file: 'dist/sparrow.min.js',
      name: 'sp',
      format: 'umd', // 对于 Nodejs 和浏览器，打包成混合模式
    },
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }), // 使用 babel 插件
  ],
};
