/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import IAbstarct from '../../interface';
import Car from '../../cars';
import Player from '../../player';

import { PARAMS, MOVING_PARAMS } from './constants';

class Citizen extends IAbstarct {
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

    this.object = scene.physics.add
      .sprite(...PARAMS.INITIAL_COORDINATES, this.constructor.id)
      .setDepth(1);

    this.object.angle = 45;
    this.object.setCollideWorldBounds(true);

    this.object
      .enableBody(true, ...PARAMS.INITIAL_COORDINATES)
      .setCollideWorldBounds(true)
      .setMaxVelocity(5, 5)
      .setBounce(10, 10)
      .setCircle(12)
      .setOffset(5, 12);

    // const assassins = scene.physics.add.group();
    // assassins.add(scene.physics.add.sprite(6200, 6210, this.constructor.id).setDepth(1));

    scene.physics.add.collider(this.object, [this.car]);
    scene.physics.add.collider(this.object, this.player);

    this.addAnimation(scene);
  }

  update(scene) {
    this.object.anims.play(this.animations.walk.key, true);
    this.object.x += 1;
    this.object.y += 1;
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

  animationWalk(scene) {
    // this.object.setVelocityY(-MOVING_PARAMS.PLAYER_SPEED);
    // this.object.anims.play(this.animations.walk.key, true);
    // this.object.setVelocityY(MOVING_PARAMS.PLAYER_SPEED);
    // this.object.anims.play(this.animations.walk.key, true);
    // if (this.controller.run.isDown) {
    //   this.state.isRunning = true;
    //   if (this.object.body.velocity.x > 0) {
    //     this.object.setVelocityX(
    //       MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF,
    //     );
    //   }
    //   if (this.object.body.velocity.x < 0) {
    //     this.object.setVelocityX(
    //       -(MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF),
    //     );
    //   }
    //   if (this.object.body.velocity.y > 0) {
    //     this.object.setVelocityY(
    //       MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF,
    //     );
    //   }
    //   if (this.object.body.velocity.y < 0) {
    //     this.object.setVelocityY(
    //       -(MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF),
    //     );
    //   }
    //   this.object.anims.play(this.animations.run.key, true);
    // }
    // if (this.controller.run.isUp) {
    //   this.state.isRunning = false;
    // }
    // scene.physics.moveTo(
    //   this.object.x + 100,
    //   this.object.y + 100,
    //   100,
    // );
  }
}

export default Citizen;
