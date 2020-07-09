/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import Car from '..';

import PARAMS from './constants';

class BlueCar extends Car {
  static id = nanoid();

  state = {
    health: 150,
    isDestroyed: false,
  };

  preload(scene) {
    const sprites = Object.values(PARAMS.IMAGES);
    sprites.forEach((sprite) => {
      scene.load.spritesheet(sprite.id, sprite.img, sprite.frameSize);
    });
  }

  create(scene, featureMap) {
    this.object = scene.physics.add
      .sprite(0, 0, PARAMS.IMAGES.ORANGE_CAR.id)
      .setScale(0.5)
      .setDepth(1)
      .enableBody()
      .setImmovable()
      .setVelocity(5, 3)
      .setMass(1700);

    this.object.setCollideWorldBounds(true);

    this.animations = {
      explosion: {
        key: 'explosion',
        frames: scene.anims.generateFrameNumbers(PARAMS.IMAGES.EXPLOSION.id, {
          start: 0,
          end: 11,
        }),
        frameRate: 10,
      },
    };
    const animConfig = Object.values(this.animations);

    animConfig.forEach((a) => scene.anims.create(a));
  }

  update() {
    // eslint-disable-next-line no-empty
    if (this.state.health > 0) {
    } else {
      if (!this.state.isDestroyed) {
        this.object.anims.play(this.animations.explosion.key, true);
      }
      setTimeout(() => {
        this.object.destroy();
        this.state.isDestroyed = true;
      }, 1000);
    }
  }
}

export default BlueCar;
