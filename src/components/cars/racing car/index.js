/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';
import IAbstarct from '../../interface';
// import Player from '../player';

import { PARAMS, controlKeys } from './constants';

class RacingCar extends IAbstarct {
  static id = nanoid();

  state = {
    health: 100,
    isPlayerInside: false,
    speed: 0,
  };

  preload(scene) {
    scene.load.spritesheet(
      PARAMS.IMAGES.PLAYER_CAR.id,
      PARAMS.IMAGES.PLAYER_CAR.img,
      PARAMS.IMAGES.PLAYER_CAR.frameSize,
    );
  }

  create(scene, featureMap) {
    // this.player = featureMap[Player.id].object;
    this.object = scene.physics.add
      .sprite(...PARAMS.INITIAL_COORDINATES, PARAMS.IMAGES.PLAYER_CAR.id)
      .setDepth(1)
      .setImmovable()
      .setScale(0.5);

    // this.object.body.setCircle(100, 25, 25);
    this.object.body.setSize(90, 120);

    this.object.setCollideWorldBounds(true);

    // scene.physics.add.collider(this.object, this.player);

    scene.cameras.main.setZoom(0.6);
    scene.cameras.main.zoomTo(1, 550);
    scene.cameras.main.startFollow(this.object);
  }

  update(scene) {
    this.actionsWithCar(scene);
  }

  actionsWithCar(scene) {
    this.controller = {
      moveUp: scene.input.keyboard.addKey(controlKeys.up),
      moveRight: scene.input.keyboard.addKey(controlKeys.rigth),
      moveDown: scene.input.keyboard.addKey(controlKeys.down),
      moveLeft: scene.input.keyboard.addKey(controlKeys.left),
      stop: scene.input.keyboard.addKey(controlKeys.stop),
      doMainAttack: scene.input.keyboard.addKey(controlKeys.attackMain),
      doAction: scene.input.keyboard.addKey(controlKeys.action),
    };

    if (
      this.controller.moveUp.isDown
      && this.state.isPlayerInside
      && this.state.speed <= PARAMS.MAX_SPEED
    ) {
      this.state.speed += 10;
    }

    if (
      this.controller.moveDown.isDown
      && this.state.isPlayerInside
      && this.state.speed > -PARAMS.MAX_SPEED / 2
    ) {
      this.state.speed -= 5;
    }

    if (this.controller.stop.isDown && this.state.isPlayerInside) {
      this.state.speed += (0 - this.state.speed) * 0.07;
      this.object.setAngularVelocity(0);
    }

    if (this.controller.moveRight.isUp && this.controller.moveLeft.isUp) {
      this.object.setAngularVelocity(0);
    }

    if (this.controller.moveLeft.isDown && this.state.isPlayerInside) {
      this.object.setAngularVelocity(-30 * (this.state.speed / 100));
    }

    if (this.controller.moveRight.isDown && this.state.isPlayerInside) {
      this.object.setAngularVelocity(30 * (this.state.speed / 100));
    }

    this.object.setVelocityY(
      -this.state.speed
        * Math.cos(((this.object.rotation * 180) / Math.PI - 360) * 0.01745),
    );

    this.object.setVelocityX(
      this.state.speed
        * Math.sin(((this.object.rotation * 180) / Math.PI - 360) * 0.01745),
    );

    if (this.controller.moveUp.isUp && this.controller.moveDown.isUp) {
      this.state.speed += (0 - this.state.speed) * 0.01;
    }
  }
}

export default RacingCar;
