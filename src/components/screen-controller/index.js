/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';
import Phaser, { Scene } from 'phaser';
import VirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick';

import IAbstarct from '../interface';

import PARAMS from './constants';

class ScreenController extends IAbstarct {
  static id = nanoid();

  preload(scene) {
    scene.load.image(PARAMS.controlId, PARAMS.controlPath);
    scene.load.image(PARAMS.fingerId, PARAMS.fingerPath);
  }

  create(scene, featureMap) {
    this.joystic = new VirtualJoystickPlugin(scene, {
      x: 200,
      y: 600,
      radius: 100,
      base: scene.add.sprite(
        PARAMS.controlSize.controlWidth,
        PARAMS.controlSize.controlHeight,
        PARAMS.controlId,
      ),
      thumb: scene.add.sprite(
        PARAMS.fingerSize.fingerWidth,
        PARAMS.fingerSize.fingerHeight,
        PARAMS.fingerId,
      ),
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
