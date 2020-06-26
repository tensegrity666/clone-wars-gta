/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import Car from '..';

import { PARAMS, controlKeys } from './constants';

class PlayerCar extends Car {
  static id = nanoid();

  state = {
    health: 100,
    isPlayerInside: true,
    speed: 0,
  };

  create(scene, featureMap) {
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
      this.controller.moveUp.isDown &&
      this.state.isPlayerInside &&
      this.state.speed <= 500
    ) {
      this.state.speed += 10;
    }

    if (this.controller.moveDown.isDown && this.state.isPlayerInside) {
      this.state.speed -= 5;
    }

    if (this.controller.stop.isDown && this.state.isPlayerInside) {
      this.state.speed = 0;
      this.object.setAngularVelocity(0);
    }

    if (this.controller.moveRight.isUp && this.controller.moveLeft.isUp) {
      this.object.setAngularVelocity(0);
    }

    if (this.controller.moveLeft.isDown && this.state.isPlayerInside) {
      this.object.setAngularVelocity(-10 * (this.state.speed / 100));
    }

    if (this.controller.moveRight.isDown && this.state.isPlayerInside) {
      this.object.setAngularVelocity(10 * (this.state.speed / 100));
    }

    // const speedsquared = (this.object.body.velocity.x
    // * this.object.body.velocity.x) + (this.object.body.velocity.y * this.object.body.velocity.y);

    // if (speedsquared > staticFriction) {
    // this.object.setAngularVelocity(steeringWheelRotation * 0.05 * Math.exp(-speedsquared / 100));
    // this.object.setAngularVelocity(this.speed
    // * Math.cos((this.sprite.body.angle - 360) * 0.01745));
    // }

    // this.object.setVelocityX(Math.sin(this.object.rotation
    // - this.object.body.angularVelocity / 0.1) * this.state.speed);
    // this.object.setVelocityY(-Math.cos(this.object.rotation
    // - this.object.body.angularVelocity / 0.1) * this.state.speed);

    // console.log(car);

    // this.object.setVelocityX(this.state.speed
    // * Math.cos((this.object.rotation - 360) * 0.01745));
    // console.log(Math.sin((this.object.rotation - 360) * 0.01745));
    // console.log('rotation:', this.object.rotation);

    this.object.setVelocityY(
      -this.state.speed *
        Math.cos(((this.object.rotation * 180) / Math.PI - 360) * 0.01745)
    );

    this.object.setVelocityX(
      this.state.speed *
        Math.sin(((this.object.rotation * 180) / Math.PI - 360) * 0.01745)
    );
  }
}

export default PlayerCar;
