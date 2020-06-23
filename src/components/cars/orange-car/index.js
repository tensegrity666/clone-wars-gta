/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import Car from '..';

import PARAMS from './constants';

class OrangeCar extends Car {
  static id = nanoid();

  state = {
    health: 100,
  };

  preload(scene) {
    scene.load.spritesheet(
      PARAMS.IMAGES.ORANGE_CAR.id,
      PARAMS.IMAGES.ORANGE_CAR.img,
      PARAMS.IMAGES.ORANGE_CAR.frameSize,
    );
  }

  create(scene, featureMap) {
    this.object = scene.physics.add
      .sprite(0, 0, PARAMS.IMAGES.ORANGE_CAR.id)
      .setScale(0.5)
      .setDepth(1)
      .enableBody()
      .setImmovable()
      .setVelocity(5, 5)
      .setMass(1000);

    this.object.setCollideWorldBounds(true);
  }
}

export default OrangeCar;
