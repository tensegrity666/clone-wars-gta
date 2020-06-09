/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

import Phaser from 'phaser';

import PARAMS from './scenes.constants';

class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: PARAMS.SCENES.menuScene,
    });
  }

  init(data) {
    this.data = data;

    console.log(this.data);
  }

  preload() {}

  create() {}
}

export default MenuScene;
