export class Spite {
  init() {
    canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('webgl2');
    if (!context) {
      throw new Error('Can not get canvas context');
    }
    gl = context;
  }

  start() {}

  update(dt: number) {}
}
