import { vec, vec2, vec3, vec4 } from '.';

export class mat<T extends vec> {
  [row: number]: T;

  private static indexedHandler: ProxyHandler<mat<any>> = {
    get(target: mat<any>, property: string): vec {
      const index = +property;
      if (index === undefined || index >= target.size!) {
        throw new Error('Index out of bounds');
      }
      if (isNaN(index)) {
        return target[property as any];
      }
      return target[index];
    },
    set(target: mat<any>, property: string, value: vec): true {
      const index = +property;
      if (index === undefined || index >= target.size!) {
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

  constructor(public vectorType: T, public size: number | undefined) {
    if (!size) {
      size = vectorType.size;
    }
    return new Proxy(this, mat.indexedHandler);
  }
}

export class mat2 extends mat<vec2> {}
export class mat2x2 extends mat<vec2> {}
export class mat2x3 extends mat<vec2> {
  constructor() {
    super(vec2.one, 3);
  }
}
export class mat2x4 extends mat<vec2> {
  constructor() {
    super(vec2.one, 4);
  }
}

export class mat3 extends mat<vec3> {}
export class mat3x2 extends mat<vec3> {
  constructor() {
    super(vec3.one, 2);
  }
}
export class mat3x3 extends mat<vec3> {}
export class mat3x4 extends mat<vec3> {
  constructor() {
    super(vec3.one, 4);
  }
}

export class mat4 extends mat<vec4> {}
export class mat4x2 extends mat<vec4> {
  constructor() {
    super(vec4.one, 2);
  }
}
export class mat4x3 extends mat<vec4> {
  constructor() {
    super(vec4.one, 3);
  }
}
export class mat4x4 extends mat<vec4> {}
