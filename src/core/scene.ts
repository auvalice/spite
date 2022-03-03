import { Entity } from '.';

export class Scene {
  root: Entity;

  constructor() {
    this.root = new Entity();
  }

  addEntity(entity: Entity) {
    this.root.addChild(entity);
  }

  addEntities(entities: Array<Entity>): void {
    for (const entity of entities) {
      this.addEntity(entity);
    }
  }

  update(dt: number) {
    this.root._update(dt);
  }
}
