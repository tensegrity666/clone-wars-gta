/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';
import Phaser from 'phaser';
import PathFollower from 'phaser3-rex-plugins/plugins/pathfollower';

import IAbstarct from '../interface';
import Car from '../cars';
import Player from '../player';

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
    this.player = featureMap[Player.id].object;

    this.graphics = scene.add.graphics();

    this.path = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.square);
    this.path2 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.bigCircle);

    this.bounds = new Phaser.Geom.Rectangle();
    this.path.getBounds(this.bounds);
    this.path2.getBounds(this.bounds);

    this.object = scene.physics.add
      .sprite(PARAMS.WAYPOINTS.square[0],
        PARAMS.WAYPOINTS.square[1],
        PARAMS.IMAGES.PLAYER_CAR.id)
      .setScale(0.5)
      .setDepth(1)
      .enableBody()
      .setImmovable()
      .setVelocity(10, -5)
      .setMass(1000);

    this.object2 = scene.physics.add
      .sprite(PARAMS.WAYPOINTS.square[0],
        PARAMS.WAYPOINTS.square[1],
        PARAMS.IMAGES.PLAYER_CAR.id)
      .setScale(0.5)
      .setDepth(1)
      .enableBody()
      .setImmovable()
      .setVelocity(10, -5)
      .setMass(1000);

    scene.physics.add.collider(this.object, [this.player, this.object2, this.car]);

    const pathFollower2 = new PathFollower(this.object2, {
      path: this.path2,
      t: 0,
      rotateToPath: true,
      rotationOffset: Math.PI * 0.5,
    });

    const pathFollower = new PathFollower(this.object, {
      path: this.path,
      t: 0,
      rotateToPath: true,
      rotationOffset: Math.PI * 0.5,
    });

    scene.tweens.add({
      targets: [pathFollower, pathFollower2],
      t: 1,
      ease: 'Linear',
      duration: 30000,
      repeat: -1,
      yoyo: false,
      repeatDelay: 100,
    });
  }

  update(scene) {
    this.graphics.clear();
    this.graphics.lineStyle(1, 0x00ff00, 1).strokeRectShape(this.bounds);
    this.graphics.lineStyle(2, 0xffffff, 1);

    this.path.draw(this.graphics);

    this.path2.draw(this.graphics);
  }
}

export default Ways;
