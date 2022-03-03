import { start } from 'repl';
import { Scene } from '.';
import { Globals } from './globals';

export class Spite {
  scene: Scene | undefined;

  running = true;

  setStartScene(scene: Scene) {
    this.scene = scene;
  }

  _init() {
    Globals.setContext();
  }

  start() {
    this._init();
    window.requestAnimationFrame((delta) => this._update(this, delta));
  }

  private _update(self: this, dt: number) {
    dt = dt / 1000;
    if (!self.scene) {
      throw new Error('No scene to update');
    }
    self.scene.update(dt);

    if (this.running) window.requestAnimationFrame((delta) => self._update(self, delta));
  }
}
