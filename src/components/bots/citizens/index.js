/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import Phaser from 'phaser';
import { nanoid } from 'nanoid';

import IAbstarct from '../../interface';
import PARAMS from './constants';
import Car from '../../cars';
import Player from '../../player';

class Citizens extends IAbstarct {
  static id = nanoid();

  state = {
    health: 90,
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

  update(scene) {
    this.object.playAnimation(this.animations.walk.key, true);
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

  createBots(scene, qnt) {
    const arr = [];

    for (let i = 0; i <= qnt; i++) {
      const SPEED_X = Phaser.Math.Between(10, 100);
      const SPEED_Y = Phaser.Math.Between(10, 100);
      const COORD_X = Phaser.Math.Between(4000, 7000);
      const COORD_Y = Phaser.Math.Between(4000, 7000);
      const MASS = Phaser.Math.Between(50, 140);

      this.bot = scene.physics.add
        .sprite(COORD_X, COORD_Y, nanoid())
        // .setRandomPosition()
        .setDepth(1)
        .setScale(0.8)
        .enableBody()
        .setSize(15, 25)
        .setOffset(10, 15)
        .setBounce(-1, -1)
        .setMass(MASS)
        .setVelocity(SPEED_X, SPEED_Y)
        // .setAngle()
        .setMaxVelocity(100, 100);

      arr.push(this.bot);

      scene.physics.add.collider(this.bot, arr);
    }
    return arr;
  }
}

export default Citizens;
