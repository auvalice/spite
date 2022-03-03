export class Globals {
  static setContext() {
    this._canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = this._canvas.getContext('webgl2');
    if (!context) {
      throw new Error('Cannot create WebGL2 context');
    }
    this._gl = context;
  }

  static _gl: WebGL2RenderingContext;
  static get gl(): WebGL2RenderingContext {
    return this._gl;
  }

  static _canvas: HTMLCanvasElement;
  static get canvas(): HTMLCanvasElement {
    return this._canvas;
  }
}

const gl = Globals.gl;

export { gl };
