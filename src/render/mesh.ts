export class Mesh {
  constructor(public vertexArray: WebGLVertexArrayObject, public vertexCount: number) {}
}

export class MeshBuilder {
  private mesh: Mesh;

  constructor() {
    this.mesh = {} as Mesh;
    const vao = gl.createVertexArray();
    if (!vao) {
      throw new Error('Could not create vertex array object');
    }
    this.mesh.vertexArray = vao;

    gl.bindVertexArray(this.mesh.vertexArray);
  }

  withVertices() {}
}
