/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

class Bullet {
  static id = nanoid();

  constructor(scene, gunner, featuresMap, imgId) {
    this.object = scene.physics.add
      .sprite(
        gunner.object.x + Math.cos(gunner.object.rotation) * 20,
        gunner.object.y + Math.sin(gunner.object.rotation) * 20,
        imgId,
      )
      .setScale(1);
    this.object.rotation = gunner.object.rotation;

    return this.object;
  }
}

export default Bullet;
