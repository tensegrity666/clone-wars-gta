/* eslint-disable no-console */

import Phaser from 'phaser';
import PARAMS from './constants';

class UIScene extends Phaser.Scene {
  constructor() {
    super({
      key: PARAMS.SCENES.UIScene,
    });
  }

  create() {
    console.log('load UIScene');
  }

  update() {}
}

export default UIScene;
