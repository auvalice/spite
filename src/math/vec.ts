export abstract class vec {
  [index: number]: number;

  private static indexedHandler: ProxyHandler<vec> = {
    get(target: vec, property: string): number {
      const index = +property;
      if (index === undefined || index >= target.size) {
        throw new Error('Index out of bounds');
      }
      if (isNaN(index)) {
        return target[property as any];
      }
      switch (index) {
        case 0:
          return target.x;
        case 1:
          return (target as vec2).y;
        case 2:
          return (target as vec3).z;
        case 3:
          return (target as vec4).w;
        default:
          throw new Error('Index out of bounds');
      }
    },
    set(target: vec, property: string, value: number): true {
      const index = +property;
      if (index === undefined || index >= target.size) {
        throw new Error('Index out of bounds');
      }
      if (isNaN(index)) {
        target[property as any] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  };

  constructor(public x = 0) {
    return new Proxy(this, vec.indexedHandler);
  }

  abstract get size(): number;
}

export class vec2 extends vec {
  get size(): number {
    return 2;
  }

  constructor(public x = 0, public y = 0) {
    super(x);
  }

  static get one(): vec2 {
    return new vec2(1, 1);
  }

  get arr(): Float32Array {
    return new Float32Array([this.x, this.y]);
  }

  add(other: vec2): vec2 {
    return new vec2(this.x + other.x, this.y + other.y);
  }

  sub(other: vec2): vec2 {
    return new vec2(this.x - other.x, this.y - other.y);
  }

  mulf(factor: number): vec2 {
    return new vec2(this.x * factor, this.y * factor);
  }

  mul2(other: vec2): vec2 {
    return new vec2(this.x * other.x, this.y * other.y);
  }

  div(factor: number): vec2 {
    return new vec2(this.x / factor, this.y / factor);
  }
}

export class vec3 extends vec2 {
  get size(): number {
    return 3;
  }

  constructor(public x = 0, public y = 0, public z = 0) {
    super(x, y);
  }

  static get zero(): vec3 {
    return new vec3(0, 0, 0);
  }

  static get one(): vec3 {
    return new vec3(1, 1, 1);
  }

  get arr(): Float32Array {
    return new Float32Array([this.x, this.y, this.z]);
  }

  get xy(): vec2 {
    return new vec2(this.x, this.y);
  }

  get xz(): vec2 {
    return new vec2(this.x, this.z);
  }

  get yz(): vec2 {
    return new vec2(this.y, this.z);
  }

  add(other: vec3): vec3 {
    return new vec3(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  sub(other: vec3): vec3 {
    return new vec3(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  mulf(factor: number): vec3 {
    return new vec3(this.x * factor, this.y * factor, this.z * factor);
  }

  mul2(other: vec2): vec2 {
    return this.xy.mul2(other);
  }

  mul3(other: vec3): vec3 {
    return new vec3(this.x * other.x, this.y * other.y, this.z * other.z);
  }

  div(factor: number): vec3 {
    return new vec3(this.x / factor, this.y / factor, this.z / factor);
  }
}

export class vec4 extends vec3 {
  get size(): number {
    return 4;
  }

  constructor(public x = 0, public y = 0, public z = 0, public w = 0) {
    super(x, y, z);
  }

  static get one() {
    return new vec4(1, 1, 1, 1);
  }

  get arr(): Float32Array {
    return new Float32Array([this.x, this.y, this.z, this.w]);
  }

  get xw(): vec2 {
    return new vec2(this.x, this.w);
  }

  get yw(): vec2 {
    return new vec2(this.y, this.w);
  }

  get zw(): vec2 {
    return new vec2(this.z, this.w);
  }

  get xyz(): vec3 {
    return new vec3(this.x, this.y, this.z);
  }

  get xyw(): vec3 {
    return new vec3(this.x, this.y, this.w);
  }

  get xzw(): vec3 {
    return new vec3(this.x, this.z, this.w);
  }

  get yzw(): vec3 {
    return new vec3(this.y, this.z, this.w);
  }

  add(other: vec4): vec4 {
    return new vec4(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
  }

  sub(other: vec4): vec4 {
    return new vec4(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w);
  }

  mulf(factor: number): vec4 {
    return new vec4(this.x * factor, this.y * factor, this.z * factor, this.w * factor);
  }

  mul2(other: vec2): vec2 {
    return this.xy.mul2(other);
  }

  mul3(other: vec3): vec3 {
    return this.xyz.mul3(other);
  }

  mul4(other: vec4): vec4 {
    return new vec4(this.x * other.x, this.y * other.y, this.z * other.z, this.w * other.w);
  }

  div(factor: number): vec4 {
    return new vec4(this.x / factor, this.y / factor, this.z / factor, this.w / factor);
  }
}
