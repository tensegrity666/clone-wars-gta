/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';
import Phaser, { Scene } from 'phaser';
import VirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick';

import IAbstarct from '../interface';

class ScreenController extends IAbstarct {
  static id = nanoid();

  preload(scene) {}

  create(scene, featureMap) {
    this.joystic = new VirtualJoystickPlugin(scene, {
      x: 200,
      y: 600,
      radius: 100,
      base: scene.add.circle(0, 0, 100, 0x888888),
      thumb: scene.add.circle(0, 0, 50, 0xcccccc),
      dir: '8dir',
      forceMin: 16,
      enable: true,
    }).on('update', this.dumpJoyStickState, scene);

    this.text = scene.add.text(0, 0);
    this.dumpJoyStickState();
  }

  dumpJoyStickState() {
    // ЗДЕСЬ НАДО ОПИСАТЬ ЛОГИКУ ПЕРЕМЕЩЕНИЯ, МОЖНО ПОСМОТРЕТЬ В player/index.js
  }

  update(scene) {}
}

export default ScreenController;
