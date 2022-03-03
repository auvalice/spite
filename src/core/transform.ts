import { vec3 } from 'spite-math';
import { Component } from '.';

export class Transform extends Component {
  position: vec3;
  rotation: vec3;
  scale: vec3;

  constructor(position?: vec3, rotation?: vec3, scale?: vec3) {
    super();
    this.position = position || vec3.zero;
    this.rotation = position || vec3.zero;
    this.scale = scale || vec3.one;
  }

  init(): void {
    throw new Error('Method not implemented.');
  }
  update(): void {
    throw new Error('Method not implemented.');
  }
}
