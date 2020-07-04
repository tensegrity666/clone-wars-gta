/* eslint-disable no-console */
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

    this.path = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.bigCircle);
    this.path2 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay1);
    this.path3 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.bigCircle);
    this.path21 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay1);
    this.path22 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay2);
    this.path23 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay3);
    this.path24 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay4);
    this.path25 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay5);
    this.path26 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay6);
    this.path27 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay1);
    this.path28 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay2);
    this.path29 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay3);
    this.path211 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay4);
    this.path212 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay5);
    this.path2123 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay6);
    this.path2132 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay7);
    this.path2344 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay8);
    this.path2342334 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay9);

    this.bounds = new Phaser.Geom.Rectangle();
    this.path.getBounds(this.bounds);
    this.path2.getBounds(this.bounds);

    const pathFollower = new PathFollower(this.orangeCar, {
      path: this.path,
      rotateToPath: true,
      rotationOffset: Math.PI / 2,
    });

    const pathFollower2 = new PathFollower(this.blueCar, {
      path: this.path2,
      rotateToPath: true,
      rotationOffset: Math.PI / 2,
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
    this.path3.draw(this.graphics);
    this.path21.draw(this.graphics);
    this.path22.draw(this.graphics);
    this.path23.draw(this.graphics);
    this.path24.draw(this.graphics);
    this.path25.draw(this.graphics);
    this.path26.draw(this.graphics);
    this.path27.draw(this.graphics);
    this.path28.draw(this.graphics);
    this.path29.draw(this.graphics);
    this.path211.draw(this.graphics);
    this.path212.draw(this.graphics);
    this.path2123.draw(this.graphics);
    this.path2132.draw(this.graphics);
    this.path2344.draw(this.graphics);
    this.path2342334.draw(this.graphics);
  }
}

export default Ways;
