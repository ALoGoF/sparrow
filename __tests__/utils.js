/*
 * @Author: chengen
 * @Date: 2023-07-17 16:00:39
 * @LastEditors: chengen
 * @LastEditTime: 2023-07-17 16:00:49
 * @FilePath: /sparrow/__tests__/utils.js
 */
// __tests__/utils.js

export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}
