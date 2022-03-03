/**
 * @jest-environment jsdom
 */

import { Globals, Scene, Spite } from 'spite-core';

describe('spite', () => {
  let spite: Spite;

  beforeEach(() => {
    jest.clearAllMocks();
    spite = new Spite();
    Globals.setContext = jest.fn();
  });

  it('should not execute the update loop if no scene is available', () => {
    const start = spite.start;

    expect(start).toThrowError();
  });

  it('should execute a couple of updates if a scene is set', async () => {
    const scene = new Scene();
    spite.setStartScene(scene);

    const coupleUpdatesPromise = new Promise<void>((resolve) => {
      setTimeout(() => {
        spite.running = false;
        resolve();
      }, 50);
    });

    spite.start();
    await coupleUpdatesPromise;
    expect(spite.running).not.toBe(true);
  });
});
