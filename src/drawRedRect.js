/*
 * @Author: chengen
 * @Date: 2023-07-17 15:36:12
 * @LastEditors: chengen
 * @LastEditTime: 2023-07-17 16:35:06
 * @FilePath: /sparrow/src/drawRedRect.js
 */
export const drawRedRect = (svg) => {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttributeNS('http://www.w3.org/2000/svg', 'x', 0);
  rect.setAttributeNS('http://www.w3.org/2000/svg', 'y', 0);
  rect.setAttributeNS('http://www.w3.org/2000/svg', 'fill', 'red');
  rect.setAttributeNS('http://www.w3.org/2000/svg', 'width', 100);
  rect.setAttributeNS('http://www.w3.org/2000/svg', 'height', 100);
  svg.appendChild(rect);
};
