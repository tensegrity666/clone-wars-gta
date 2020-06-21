/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import IAbstarct from '../interface';

import PARAMS from './constants';

class Weapons extends IAbstarct {
  static id = nanoid();

  state = {
    pistol: 10,
    hk: 100,
    chaingun: 1000,
  };

  preload(scene) {
    scene.load.spritesheet(
      PARAMS.IMAGES.PISTOL.id,
      PARAMS.IMAGES.PISTOL.img,
      PARAMS.IMAGES.PISTOL.frameSize,
    );
    scene.load.spritesheet(
      PARAMS.IMAGES.HK.id,
      PARAMS.IMAGES.HK.img,
      PARAMS.IMAGES.HK.frameSize,
    );
    scene.load.image(
      PARAMS.IMAGES.BULLET.bomb.id,
      PARAMS.IMAGES.BULLET.bomb.img,
    );
  }

  create(scene, featureMap) {
    this.object = scene.physics.add
      .sprite(...PARAMS.INITIAL_COORDINATES, PARAMS.IMAGES.PISTOL.id)
      .setDepth(1)
      .setScale(0.05);
    // scene.physics.add
    // .sprite(6350, 6500, PARAMS.IMAGES.HK.id)
    // .setDepth(1).setScale(0.05)
    // ];

    this.object.setCollideWorldBounds(true);
  }

  update(scene) {
    this.actionsWithWeapon(scene);
  }

  actionsWithWeapon(scene) {}

  static shooting(scene, gunner, typeOfWeapon) {
    if (gunner.state.ammo) {
      this.bullet = scene.physics.add
        .sprite(
          gunner.object.x + Math.cos(gunner.object.rotation) * 20,
          gunner.object.y + Math.sin(gunner.object.rotation) * 20,
          PARAMS.IMAGES.BULLET.bomb.id,
        )
        .setScale(1);

      scene.physics.moveTo(
        this.bullet,
        gunner.object.x + Math.cos(gunner.object.rotation) * 1000,
        gunner.object.y + Math.sin(gunner.object.rotation) * 1000,
        1000,
      );
      gunner.state.ammo -= 1;
    }
  }
}

export default Weapons;
