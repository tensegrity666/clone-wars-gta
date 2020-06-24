/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import Phaser from 'phaser';
import { nanoid } from 'nanoid';

import IAbstarct from '../../interface';
import PARAMS from './constants';
import Citizens from '../citizens';
import Car from '../../cars';

class Rednecks extends IAbstarct {
  static id = nanoid();

  state = {
    health: 120,
  };

  preload(scene) {
    const sprites = Object.values(PARAMS.IMAGES.CITIZEN);

    sprites.forEach((sprite) => {
      scene.load.spritesheet(sprite.id, sprite.img, sprite.frameSize);
    });
  }

  create(scene, featureMap) {
    this.citizens = featureMap[Citizens.id].object;
    this.car = featureMap[Car.id].object;

    this.bots = this.createBots(scene, 99);

    this.object = scene.physics.add.group(this.bots);
    scene.physics.add.collider(this.object, [this.citizens, this.car]);

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
      const SPEED_X = Phaser.Math.Between(10, 70);
      const SPEED_Y = Phaser.Math.Between(10, 70);
      const COORD_X = Phaser.Math.Between(4000, 7000);
      const COORD_Y = Phaser.Math.Between(4000, 7000);
      const MASS = Phaser.Math.Between(80, 150);

      this.bot = scene.physics.add
        .sprite(COORD_X, COORD_Y, nanoid())
        // .setRandomPosition()
        .setDepth(1)
        .setScale(0.8)
        .setTint(0xff0000)
        .enableBody()
        .setCircle(12, 5, 12)
        .setBounce(1, 1)
        .setMass(MASS)
        .setVelocity(SPEED_X, SPEED_Y)
        .setMaxVelocity(90, 90);
      // .setAngle()

      arr.push(this.bot);

      scene.physics.add.collider(this.bot, arr);
    }
    return arr;
  }
}

export default Rednecks;
