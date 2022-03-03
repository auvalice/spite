/**
 * @jest-environment jsdom
 */

import { Globals } from 'spite-core';

describe('globals', () => {
  it('should fail to initialize global data as there is no WebGL context available', () => {
    document.body.innerHTML = `
    <div>
      <canvas id="canvas">
      </canvas>
    </div>
    `;
    const contextMethod = () => Globals.setContext();

    expect(contextMethod).toThrowError();
  });
});
