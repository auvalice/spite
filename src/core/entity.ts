import { Transform } from '.';

export class Entity {
  parent: Entity | undefined;
  children: Array<Entity>;

  transform: Transform;

  constructor(parent?: Entity) {
    this.parent = parent;
    this.children = [];
    this.transform = new Transform();
  }

  addChild(entity: Entity): void {
    this.children.push(entity);
  }

  addChildren(entities: Array<Entity>): void {
    for (const entity of entities) {
      this.addChild(entity);
    }
  }

  _update(dt: number): void {
    for (const child of this.children) {
      child._update(dt);
    }
    this.update(dt);
  }

  update(dt: number): void {}
}
