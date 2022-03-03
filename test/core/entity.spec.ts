import { Entity } from 'spite-core';

describe('entity', () => {
  it('should initialize correctly', () => {
    const entity = new Entity();

    expect(entity.parent).toBeUndefined();
    expect(entity.children).toHaveLength(0);
    expect(entity.transform).not.toBeUndefined();
  });

  it('should accept another entity as parent', () => {
    const parent = new Entity();
    const entity = new Entity(parent);

    expect(entity.parent).toBe(parent);
  });

  it('should allow for children to be added to the entity', () => {
    const entity = new Entity();
    const child = new Entity();
    const children = [new Entity(), new Entity(), new Entity(), new Entity()];

    entity.addChild(child);
    expect(entity.children.length).toBe(1);

    entity.addChildren(children);
    expect(entity.children.length).toBe(1 + children.length);
  });

  it('should update all children', () => {
    const entity = new Entity();

    const child1 = new Entity();
    child1._update = jest.fn();

    const child2 = new Entity();
    child2._update = jest.fn();

    entity.addChildren([child1, child2]);

    entity._update(0);

    expect(child1._update).toBeCalled();
    expect(child2._update).toBeCalled();
  });
});
