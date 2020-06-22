/* eslint-disable no-unused-vars */

import Phaser from 'phaser';
import { nanoid } from 'nanoid';

import IAbstarct from '../../interface';
import Car from '../../cars';
import Player from '../../player';

import { PARAMS, MOVING_PARAMS } from './constants';

class Human extends IAbstarct {
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

  create(scene, featureMap) {
    this.car = featureMap[Car.id].object;
    this.player = featureMap[Player.id].object;

    this.bots = this.createBots(scene, 199);

    this.object = scene.physics.add.group(this.bots);

    scene.physics.add.collider(this.object, [this.car, this.player]);

    this.addAnimation(scene);
  }

  update() {}

  addAnimation(scene, character) {
    this.animations = {
      stand: {
        key: 'stand',
        frames: scene.anims.generateFrameNumbers(
          PARAMS.IMAGES.CITIZEN.walk.id,
          {
            start: 0,
            end: 0,
          }
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
          }
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

  createBots(scene, qnt) {
    const arr = [];

    for (let i = 0; i <= qnt; i++) {
      this.bot = scene.physics.add
        .sprite(
          Phaser.Math.Between(4500, 6500),
          Phaser.Math.Between(4500, 6500),
          nanoid()
        )
        // .setRandomPosition()
        .setDepth(1)
        .setScale(0.8)
        .enableBody()
        .setMaxVelocity(5, 5)
        .setBounce(10, 10)
        .setCircle(12)
        .setOffset(5, 12)
        .setVelocity(Phaser.Math.Between(100, 150))
        .setRotation(Phaser.Math.Between(0, 1));

      arr.push(this.bot);
    }
    return arr;
  }
}

export default Human;
