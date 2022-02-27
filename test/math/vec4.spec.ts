import { vec2, vec3, vec4 } from 'spite-math';

describe('vec4', () => {
  it('should construct a vec4 with zero values', () => {
    const vector = new vec4();

    expect(vector.x).toBeCloseTo(0);
    expect(vector.y).toBeCloseTo(0);
    expect(vector.z).toBeCloseTo(0);
  });

  it('should be possible to set the components to other values', () => {
    const vector = new vec4(1, 2, 3, 4);

    vector.x = 5;
    vector.y = 10;
    vector.z = 20;
    vector.w = 40;

    expect(vector.x).toBeCloseTo(5);
    expect(vector.y).toBeCloseTo(10);
    expect(vector.z).toBeCloseTo(20);
    expect(vector.w).toBeCloseTo(40);
  });

  it.each([
    {
      x1: 0,
      y1: 0,
      z1: 0,
      w1: 0,
      x2: 0,
      y2: 0,
      z2: 0,
      w2: 0,
      xResult: 0,
      yResult: 0,
      zResult: 0,
      wResult: 0,
    },
    {
      x1: 5,
      y1: 5,
      z1: 5,
      w1: 1,
      x2: 2,
      y2: 3,
      z2: 5,
      w2: 2,
      xResult: 7,
      yResult: 8,
      zResult: 10,
      wResult: 3,
    },
    {
      x1: -10,
      y1: 15,
      z1: 0,
      w1: 5,
      x2: 20,
      y2: -30,
      z2: -5,
      w2: 5,
      xResult: 10,
      yResult: -15,
      zResult: -5,
      wResult: 10,
    },
  ])('should add two vectors together', (data) => {
    const a = new vec4(data.x1, data.y1, data.z1);
    const b = new vec4(data.x2, data.y2, data.z2);

    const result = a.add(b);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
    expect(result.z).toBeCloseTo(data.zResult);
  });

  it.each([
    {
      x1: 0,
      y1: 0,
      z1: 0,
      w1: 0,
      x2: 0,
      y2: 0,
      z2: 0,
      w2: 0,
      xResult: 0,
      yResult: 0,
      zResult: 0,
      wResult: 0,
    },
    {
      x1: 5,
      y1: 5,
      z1: 5,
      w1: 5,
      x2: 2,
      y2: 3,
      z2: 5,
      w2: 3,
      xResult: 3,
      yResult: 2,
      zResult: 0,
      wResult: 2,
    },
    {
      x1: -10,
      y1: 15,
      z1: 0,
      w1: 10,
      x2: 20,
      y2: -30,
      z2: -5,
      w2: -5,
      xResult: -30,
      yResult: 45,
      zResult: 5,
      wResult: 15,
    },
  ])('should subtract two vectors', (data) => {
    const a = new vec4(data.x1, data.y1, data.z1);
    const b = new vec4(data.x2, data.y2, data.z2);

    const result = a.sub(b);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
  });

  it.each([
    {
      x1: 0,
      y1: 0,
      z1: 0,
      w1: 3,
      x2: 0,
      y2: 0,
      z2: 0,
      w2: 5,
      xResult: 0,
      yResult: 0,
      zResult: 0,
      wResult: 15,
    },
    {
      x1: 5,
      y1: 5,
      z1: 5,
      w1: -2,
      x2: 2,
      y2: 3,
      z2: 5,
      w2: 3,
      xResult: 10,
      yResult: 15,
      zResult: 25,
      wResult: -6,
    },
    {
      x1: -10,
      y1: 15,
      z1: 0,
      w1: -20,
      x2: 20,
      y2: -30,
      z2: -5,
      w2: -50,
      xResult: -200,
      yResult: -450,
      zResult: 0,
      wResult: 1000,
    },
  ])('should multiply two vectors', (data) => {
    const a = new vec4(data.x1, data.y1, data.z1);
    const b = new vec4(data.x2, data.y2, data.z2);

    const result = a.mul3(b);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
    expect(result.z).toBeCloseTo(data.zResult);
  });

  it.each([
    { x1: 0, y1: 0, z1: 0, w1: 0, factor: 0, xResult: 0, yResult: 0, zResult: 0, wResult: 0 },
    { x1: 5, y1: 5, z1: 5, w1: 3, factor: 2, xResult: 10, yResult: 10, zResult: 10, wResult: 6 },
    {
      x1: -10,
      y1: 15,
      z1: -2,
      w1: 4,
      factor: -3,
      xResult: 30,
      yResult: -45,
      zResult: 6,
      wResult: -12,
    },
  ])('should multiply a vector by a factor', (data) => {
    const a = new vec4(data.x1, data.y1);

    const result = a.mulf(data.factor);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
  });

  it.each([
    { x1: 0, y1: 0, z1: 0, w1: 0, factor: 25, xResult: 0, yResult: 0, zResult: 0, wResult: 0 },
    { x1: 10, y1: 10, z1: 15, w1: 20, factor: 5, xResult: 2, yResult: 2, zResult: 3, wResult: 4 },
    {
      x1: -10,
      y1: 15,
      z1: -20,
      w1: 40,
      factor: -2,
      xResult: 5,
      yResult: -7.5,
      zResult: 10,
      wResult: -20,
    },
  ])('should divide a vector by a factor', (data) => {
    const a = new vec4(data.x1, data.y1, data.z1, data.w1);

    const result = a.div(data.factor);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
    expect(result.z).toBeCloseTo(data.zResult);
    expect(result.w).toBeCloseTo(data.wResult);
  });

  it('should be able to index a vector with brackets', () => {
    const a = new vec4(4, 22, 3, 15);

    expect(a[0]).toBeCloseTo(4);
    expect(a[1]).toBeCloseTo(22);
    expect(a[2]).toBeCloseTo(3);
    expect(a[3]).toBeCloseTo(15);
  });

  it('should not allow invalid indexing', () => {
    const a = new vec4(10, 20, 30, 40);

    expect(a['x']).toBeCloseTo(10);
    expect(a['z']).toBeCloseTo(30);
    expect(a['w']).toBeCloseTo(40);
    expect(() => a[4]).toThrow();
    expect(a['wtf' as any]).toBeUndefined();
  });
});
