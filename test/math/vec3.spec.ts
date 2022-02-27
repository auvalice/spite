import { vec3 } from 'spite-math';

describe('vec3', () => {
  it('should construct a vec3 with zero values', () => {
    const vector = new vec3();

    expect(vector.x).toBeCloseTo(0);
    expect(vector.y).toBeCloseTo(0);
    expect(vector.z).toBeCloseTo(0);
  });

  it('should be possible to set the components to other values', () => {
    const vector = new vec3(1, 2, 3);

    vector.x = 5;
    vector.y = 10;
    vector.z = 20;

    expect(vector.x).toBeCloseTo(5);
    expect(vector.y).toBeCloseTo(10);
    expect(vector.z).toBeCloseTo(20);
  });

  it.each([
    { x1: 0, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0, xResult: 0, yResult: 0, zResult: 0 },
    { x1: 5, y1: 5, z1: 5, x2: 2, y2: 3, z2: 5, xResult: 7, yResult: 8, zResult: 10 },
    { x1: -10, y1: 15, z1: 0, x2: 20, y2: -30, z2: -5, xResult: 10, yResult: -15, zResult: -5 },
  ])('should add two vectors together', (data) => {
    const a = new vec3(data.x1, data.y1, data.z1);
    const b = new vec3(data.x2, data.y2, data.z2);

    const result = a.add(b);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
    expect(result.z).toBeCloseTo(data.zResult);
  });

  it.each([
    { x1: 0, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0, xResult: 0, yResult: 0, zResult: 0 },
    { x1: 5, y1: 5, z1: 5, x2: 2, y2: 3, z2: 5, xResult: 3, yResult: 2, zResult: 0 },
    { x1: -10, y1: 15, z1: 0, x2: 20, y2: -30, z2: -5, xResult: -30, yResult: 45, zResult: 5 },
  ])('should subtract two vectors', (data) => {
    const a = new vec3(data.x1, data.y1, data.z1);
    const b = new vec3(data.x2, data.y2, data.z2);

    const result = a.sub(b);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
  });

  it.each([
    { x1: 0, y1: 0, z1: 0, x2: 0, y2: 0, z2: 0, xResult: 0, yResult: 0, zResult: 0 },
    { x1: 5, y1: 5, z1: 5, x2: 2, y2: 3, z2: 5, xResult: 10, yResult: 15, zResult: 25 },
    { x1: -10, y1: 15, z1: 0, x2: 20, y2: -30, z2: -5, xResult: -200, yResult: -450, zResult: 0 },
  ])('should multiply two vectors', (data) => {
    const a = new vec3(data.x1, data.y1, data.z1);
    const b = new vec3(data.x2, data.y2, data.z2);

    const result = a.mul3(b);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
    expect(result.z).toBeCloseTo(data.zResult);
  });

  it.each([
    { x1: 0, y1: 0, z1: 0, factor: 0, xResult: 0, yResult: 0, zResult: 0 },
    { x1: 5, y1: 5, z1: 5, factor: 2, xResult: 10, yResult: 10, zResult: 10 },
    { x1: -10, y1: 15, z1: -2, factor: -3, xResult: 30, yResult: -45, zResult: 6 },
  ])('should multiply a vector by a factor', (data) => {
    const a = new vec3(data.x1, data.y1, data.z1);

    const result = a.mulf(data.factor);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
    expect(result.z).toBeCloseTo(data.zResult);
  });

  it.each([
    { x1: 0, y1: 0, z1: 0, factor: 25, xResult: 0, yResult: 0, zResult: 0 },
    { x1: 10, y1: 10, z1: 15, factor: 5, xResult: 2, yResult: 2, zResult: 3 },
    { x1: -10, y1: 15, z1: -20, factor: -2, xResult: 5, yResult: -7.5, zResult: 10 },
  ])('should divide a vector by a factor', (data) => {
    const a = new vec3(data.x1, data.y1, data.z1);

    const result = a.div(data.factor);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
    expect(result.z).toBeCloseTo(data.zResult);
  });

  it('should be able to index a vector with brackets', () => {
    const a = new vec3(4, 22, 15);

    expect(a[0]).toBeCloseTo(4);
    expect(a[1]).toBeCloseTo(22);
    expect(a[2]).toBeCloseTo(15);
  });

  it('should not allow invalid indexing', () => {
    const a = new vec3(10, 20, 30);

    expect(() => a[3]).toThrow();
    expect(a['x']).toBeCloseTo(10);
    expect(a['z']).toBeCloseTo(30);
    expect(a['w' as any]).toBeUndefined();
  });
});
