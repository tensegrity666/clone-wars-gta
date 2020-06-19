/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';
import Phaser from 'phaser';
import PathFollower from 'phaser3-rex-plugins/plugins/pathfollower';

import IAbstarct from '../interface';
import Car from '../cars';

import PARAMS from './constants';

class Ways extends IAbstarct {
  static id = nanoid();

  state = {
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
    this.car = featureMap[Car.id].object;

    this.graphics = scene.add.graphics();

    // prettier-ignore
    const points = [
      5050, 6530, 5300, 6550, 5700, 6540, 6000, 6550, 6400, 6550,
      6400, 6310, 6400, 6020, 6420, 5600,
      6500, 5550, 6900, 5540, 7080, 5550, 7580, 5560,
      7580, 5150, 7580, 4780,
      7100, 4780, 6400, 4780, 6050, 4780, 5550, 4780, 5150, 4780, 5050,
      5080, 5050, 5480, 5060, 5880, 5050, 6300, 5030, 6480, 5050, 6530,
    ];

    this.path = new Phaser.Curves.Spline(points);
    this.bounds = new Phaser.Geom.Rectangle();
    this.path.getBounds(this.bounds);

    this.object = scene.physics.add
      .sprite(5050, 6530, PARAMS.IMAGES.PLAYER_CAR.id)
      .setScale(0.5)
      .enableBody()
      .setImmovable()
      .setMass(1000);

    scene.physics.add.collider(this.object, this.car);

    const pathFollower = new PathFollower(this.object, {
      path: this.path,
      t: 0,
      rotateToPath: true,
      rotationOffset: Math.PI * 0.5,
    });

    scene.tweens.add({
      targets: pathFollower,
      t: 1,
      ease: 'Linear',
      duration: 50000,
      repeat: -1,
      yoyo: false,
    });
  }

  update(scene) {
    this.graphics.clear();
    this.graphics.lineStyle(1, 0x00ff00, 1).strokeRectShape(this.bounds);
    this.graphics.lineStyle(2, 0xffffff, 1);

    this.path.draw(this.graphics);
  }

  // actionsWithCar(scene) {

  // if (
  //   this.controller.moveUp.isDown
  //   && this.state.isPlayerInside
  //   && this.state.speed <= 500
  // ) {
  //   this.state.speed += 10;
  // }

  // if (this.controller.moveDown.isDown && this.state.isPlayerInside) {
  //   this.state.speed -= 5;
  // }

  // if (this.controller.stop.isDown && this.state.isPlayerInside) {
  //   this.state.speed = 0;
  //   this.object.setAngularVelocity(0);
  // }

  // if (this.controller.moveRight.isUp && this.controller.moveLeft.isUp) {
  //   this.object.setAngularVelocity(0);
  // }

  // if (this.controller.moveLeft.isDown && this.state.isPlayerInside) {
  //   this.object.setAngularVelocity(-10 * (this.state.speed / 100));
  // }

  // if (this.controller.moveRight.isDown && this.state.isPlayerInside) {
  //   this.object.setAngularVelocity(10 * (this.state.speed / 100));
  // }

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

  // this.object.setVelocityY(
  //   -this.state.speed
  //     * Math.cos(((this.object.rotation * 180) / Math.PI - 360) * 0.01745),
  // );

  // this.object.setVelocityX(
  //   this.state.speed
  //     * Math.sin(((this.object.rotation * 180) / Math.PI - 360) * 0.01745),
  // );
  // }
}

export default Ways;
