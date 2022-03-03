import { Entity, Scene } from 'spite-core';

describe('scene', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update all entities under it', () => {
    const mock = new Entity();
    mock._update = jest.fn();

    let scene = new Scene();

    scene.addEntities([mock, mock, mock, mock]);
    scene.update(0);

    expect(scene.root.children.length).toEqual(4);
    expect(mock._update).toHaveBeenCalledTimes(4);
  });
});
