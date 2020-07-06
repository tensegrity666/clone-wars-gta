/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';
import Phaser from 'phaser';
import PathFollower from 'phaser3-rex-plugins/plugins/pathfollower';

import IAbstarct from '../interface';
import PoliceCar from '../cars/police';
import TaxiCar from '../cars/taxi';
import BlueCar from '../cars/blue-car';
import OrangeCar from '../cars/orange-car';

import PARAMS from './constants';

class Ways extends IAbstarct {
  static id = nanoid();

  preload(scene) {}

  create(scene, featureMap) {
    this.policeCar = featureMap[PoliceCar.id].object;
    this.taxiCar = featureMap[TaxiCar.id].object;
    this.orangeCar = featureMap[OrangeCar.id].object;
    this.blueCar = featureMap[BlueCar.id].object;

    this.graphics = scene.add.graphics();

    this.path = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.bigCircle);
    this.path2 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.zigzag);
    this.path3 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.square);
    this.path4 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay1);
    this.path5 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay2);
    this.path6 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay3);
    this.path7 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay4);
    this.path8 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay5);
    this.path9 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.carWay6);
    this.path10 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay1);
    this.path11 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay2);
    this.path12 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay3);
    this.path13 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay4);
    this.path14 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay5);
    this.path15 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay6);
    this.path16 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay7);
    this.path17 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay8);
    this.path18 = new Phaser.Curves.Spline(PARAMS.WAYPOINTS.botWay9);

    this.bounds = new Phaser.Geom.Rectangle();
    this.path.getBounds(this.bounds);
    this.path2.getBounds(this.bounds);
    this.path3.getBounds(this.bounds);

    const pathFollower = new PathFollower(this.taxiCar, {
      path: this.path,
      rotateToPath: true,
      rotationOffset: Math.PI / 2,
    });

    const pathFollower2 = new PathFollower(this.policeCar, {
      path: this.path2,
      rotateToPath: true,
      rotationOffset: Math.PI / 2,
    });

    const pathFollower3 = new PathFollower(this.orangeCar, {
      path: this.path3,
      rotateToPath: true,
      rotationOffset: Math.PI / 2,
    });

    const pathFollower4 = new PathFollower(this.blueCar, {
      path: this.path4,
      rotateToPath: true,
      rotationOffset: Math.PI / 2,
    });

    scene.tweens.add({
      targets: [pathFollower, pathFollower2, pathFollower3, pathFollower4],
      t: 1,
      ease: 'Linear',
      duration: 35000,
      repeat: -1,
      yoyo: false,
      repeatDelay: 0,
    });

    // scene.tweens.add({
    //   targets: [pathFollower3],
    //   t: 1,
    //   ease: 'Linear',
    //   duration: 50000,
    //   repeat: -1,
    //   yoyo: true,
    //   repeatDelay: 0,
    // });
  }

  update(scene) {
    this.graphics.clear();
    this.graphics.lineStyle(1, 0x00ff00, 0.1).strokeRectShape(this.bounds);
    this.graphics.lineStyle(1, 0xffffff, 0.1);

    this.path.draw(this.graphics);
    this.path2.draw(this.graphics);
    this.path3.draw(this.graphics);
    this.path4.draw(this.graphics);
    this.path5.draw(this.graphics);
    this.path6.draw(this.graphics);
    this.path7.draw(this.graphics);
    this.path8.draw(this.graphics);
    this.path9.draw(this.graphics);
    this.path10.draw(this.graphics);
    this.path11.draw(this.graphics);
    this.path12.draw(this.graphics);
    this.path13.draw(this.graphics);
    this.path14.draw(this.graphics);
    this.path15.draw(this.graphics);
    this.path16.draw(this.graphics);
    this.path17.draw(this.graphics);
    this.path18.draw(this.graphics);
  }
}

export default Ways;
