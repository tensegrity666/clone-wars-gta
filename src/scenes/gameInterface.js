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
    this.scene.add.text(6200, 6200, 'hello');
    // Phaser.GameObjects.Text.call(this, scene, x, y, text,
    //  { color: '#ffffff', align: 'left', fontSize: 15 });
  }
}

export default UIScene;
