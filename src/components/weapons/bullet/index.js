/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import IAbstarct from '../../interface';
import Car from '../../cars';
import PARAMS from './constants';

class Bullet extends IAbstarct {
  static id = nanoid();

  state = {};

  preload(scene) {
    scene.load.image(
      PARAMS.IMAGES.BULLET.bullet.id,
      PARAMS.IMAGES.BULLET.bullet.img,
    );
  }

  create(scene, gunner) {
    // this.car = featuresMap[Car.id];
    // this.gunner = gunner;
    // scene.physics.add.collider(this.object, this.car.object, () => {
    // });
    // this.object = this.createBullet(scene, this.gunner);
    // this.object.setCollideWorldBounds(true);
  }

  update(scene) {
    // this.actionsWithWeapon(scene);
  }

  actionsWithWeapon(scene) {}

  static createBullet(scene, gunner, featuresMap) {
    const car = featuresMap[Car.id];

    const bullet = scene.physics.add
      .sprite(
        gunner.object.x + Math.cos(gunner.object.rotation) * 20,
        gunner.object.y + Math.sin(gunner.object.rotation) * 20,
        PARAMS.IMAGES.BULLET.bullet.id,
      )
      .setScale(1);
    bullet.rotation = gunner.object.rotation;

    scene.physics.add.collider(bullet, car.object, () => {
      bullet.destroy();
      car.state.health -= 10;
    });

    return bullet;
  }
}

export default Bullet;
