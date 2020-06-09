/* eslint-disable class-methods-use-this */

import Phaser from 'phaser';

import PARAMS from './scenes.constants';

class MainScene extends Phaser.Scene {
  constructor() {
    super({
      key: PARAMS.SCENES.gameScene,
    });
  }

  preload() {}

  create() {}
}

export default MainScene;
