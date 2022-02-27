import { vec2 } from 'spite-math';

describe('vec2', () => {
  it('should construct a vec2 with zero values', () => {
    const vector = new vec2();

    expect(vector.x).toBeCloseTo(0);
    expect(vector.y).toBeCloseTo(0);
  });

  it('should be possible to set the components to other values', () => {
    const vector = new vec2(1, 2);

    vector.x = 5;
    vector.y = 10;

    expect(vector.x).toBeCloseTo(5);
    expect(vector.y).toBeCloseTo(10);
  });

  it.each([
    { x1: 0, y1: 0, x2: 0, y2: 0, xResult: 0, yResult: 0 },
    { x1: 5, y1: 5, x2: 2, y2: 3, xResult: 7, yResult: 8 },
    { x1: -10, y1: 15, x2: 20, y2: -30, xResult: 10, yResult: -15 },
  ])('should add two vectors together', (data) => {
    const a = new vec2(data.x1, data.y1);
    const b = new vec2(data.x2, data.y2);

    const result = a.add(b);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
  });

  it.each([
    { x1: 0, y1: 0, x2: 0, y2: 0, xResult: 0, yResult: 0 },
    { x1: 5, y1: 5, x2: 2, y2: 3, xResult: 3, yResult: 2 },
    { x1: -10, y1: 15, x2: 20, y2: -30, xResult: -30, yResult: 45 },
  ])('should subtract two vectors', (data) => {
    const a = new vec2(data.x1, data.y1);
    const b = new vec2(data.x2, data.y2);

    const result = a.sub(b);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
  });

  it.each([
    { x1: 0, y1: 0, x2: 0, y2: 0, xResult: 0, yResult: 0 },
    { x1: 5, y1: 5, x2: 2, y2: 3, xResult: 10, yResult: 15 },
    { x1: -10, y1: 15, x2: -2, y2: -3, xResult: 20, yResult: -45 },
  ])('should multiply two vectors', (data) => {
    const a = new vec2(data.x1, data.y1);
    const b = new vec2(data.x2, data.y2);

    const result = a.mul2(b);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
  });

  it.each([
    { x1: 0, y1: 0, factor: 0, xResult: 0, yResult: 0 },
    { x1: 5, y1: 5, factor: 2, xResult: 10, yResult: 10 },
    { x1: -10, y1: 15, factor: -5, xResult: 50, yResult: -75 },
  ])('should multiply a vector by a factor', (data) => {
    const a = new vec2(data.x1, data.y1);

    const result = a.mulf(data.factor);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
  });

  it.each([
    { x1: 0, y1: 0, factor: 1, xResult: 0, yResult: 0 },
    { x1: 5, y1: 5, factor: 5, xResult: 1, yResult: 1 },
    { x1: -10, y1: 15, factor: -5, xResult: 2, yResult: -3 },
  ])('should divide a vector by a factor', (data) => {
    const a = new vec2(data.x1, data.y1);

    const result = a.div(data.factor);

    expect(result.x).toBeCloseTo(data.xResult);
    expect(result.y).toBeCloseTo(data.yResult);
  });

  it('should be able to index a vector with brackets', () => {
    const a = new vec2(4, 22);

    expect(a[0]).toBeCloseTo(4);
    expect(a[1]).toBeCloseTo(22);
  });

  it('should not allow invalid indexing', () => {
    const a = new vec2(10, 20);

    expect(() => a[2]).toThrow();
    expect(() => a[3]).toThrow();
    expect(a['x']).toBeCloseTo(10);
    expect(a['z' as any]).toBeUndefined();
  });
});

describe('vec4', () => {});
