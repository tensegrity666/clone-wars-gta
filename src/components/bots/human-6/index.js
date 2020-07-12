/* eslint-disable no-unused-vars */

import Phaser from 'phaser';
import { nanoid } from 'nanoid';

import IAbstarct from '../../interface';

import { PARAMS } from './constants';

class Human6 extends IAbstarct {
  static id = nanoid();

  state = {
    isRunning: false,
    health: 100,
  };

  preload(scene) {
    const sprites = Object.values(PARAMS.IMAGES.CITIZEN);

    sprites.forEach((sprite) => {
      scene.load.spritesheet(sprite.id, sprite.img, sprite.frameSize);
    });
  }

  create(scene) {
    this.object = scene.physics.add
      .sprite(
        Phaser.Math.Between(4500, 6500),
        Phaser.Math.Between(4500, 6500),
        PARAMS.IMAGES.CITIZEN.walk.id,
      )
      .setDepth(1)
      .setScale(0.8)
      .enableBody()
      .setMaxVelocity(5, 5)
      .setBounce(10, 10)
      .setSize(15, 25)
      .setOffset(10, 15)
      .setVelocity(Phaser.Math.Between(100, 150))
      .setRotation(Phaser.Math.Between(0, 1));

    this.addAnimation(scene);
  }

  update() {
    this.object.play(this.animations.walk.key);
  }

  addAnimation(scene) {
    this.animations = {
      stand: {
        key: 'stand',
        frames: scene.anims.generateFrameNumbers(
          PARAMS.IMAGES.CITIZEN.walk.id,
          {
            start: 0,
            end: 0,
          },
        ),
        frameRate: 10,
        repeat: -1,
      },
      walk: {
        key: 'walking',
        frames: scene.anims.generateFrameNumbers(
          PARAMS.IMAGES.CITIZEN.walk.id,
          {
            start: 0,
            end: 5,
          },
        ),
        frameRate: 10,
        repeat: -1,
      },
      run: {
        key: 'run',
        frames: scene.anims.generateFrameNumbers(PARAMS.IMAGES.CITIZEN.run.id, {
          start: 0,
          end: 5,
        }),
        frameRate: 10,
        repeat: -1,
      },
    };

    const animConfig = Object.values(this.animations);

    animConfig.forEach((a) => scene.anims.create(a));
  }
}

export default Human6;
