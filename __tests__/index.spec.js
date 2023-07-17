/*
 * @Author: chengen
 * @Date: 2023-07-17 16:00:22
 * @LastEditors: chengen
 * @LastEditTime: 2023-07-17 16:24:53
 * @FilePath: /sparrow/__tests__/index.spec.js
 */
// __tests__/index.spec.js
/**
 * @jest-environment jsdom
 */

import { drawRedRect } from '../src';

describe('test', () => {
  test('drawRedRect()', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', 400);
    svg.setAttribute('height', 400);
    svg.setAttribute('viewBox', [0, 0, 400, 400]);
    document.body.appendChild(svg);

    drawRedRect(svg);
    expect(svg.getElementsByTagName('rect').length).toBe(1);
  });
});
