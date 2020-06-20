/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';
import Phaser from 'phaser';
import PathFollower from 'phaser3-rex-plugins/plugins/pathfollower';

import IAbstarct from '../interface';
import OrangeCar from '../cars/orange-car';
import BlueCar from '../cars/blue-car';

import PARAMS from './constants';

class Ways extends IAbstarct {
  static id = nanoid();

  preload(scene) {}

  create(scene, featureMap) {
    this.orangeCar = featureMap[OrangeCar.id].object;
    this.blueCar = featureMap[BlueCar.id].object;

    this.graphics = scene.add.graphics();

    this.path = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.zigzag);
    this.path2 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.square);

    this.bounds = new Phaser.Geom.Rectangle();
    this.path.getBounds(this.bounds);
    this.path2.getBounds(this.bounds);

    scene.physics.add.collider(this.blueCar, this.orangeCar);

    const pathFollower = new PathFollower(this.orangeCar, {
      path: this.path,
      rotateToPath: true,
      rotationOffset: Math.PI / 2,
    });

    const pathFollower2 = new PathFollower(this.blueCar, {
      path: this.path2,
      rotateToPath: true,
      rotationOffset: Math.PI * 0.5,
    });

    scene.tweens.add({
      targets: [pathFollower, pathFollower2],
      t: 1,
      ease: 'Linear',
      duration: 35000,
      repeat: -1,
      yoyo: false,
      repeatDelay: 0,
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
