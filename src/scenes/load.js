/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */

import Phaser from 'phaser';

import PARAMS from './scenes.constants';

class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: PARAMS.SCENES.loadScene,
    });
  }

  init() {}

  preload() {
    this.load.image(PARAMS.IMAGES.LOGO.id, PARAMS.IMAGES.LOGO.url);

    const loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff,
      },
    });

    // ! large load simulation
    for (let i = 0; i < 100; i++) {
      this.load.image(PARAMS.IMAGES.LOGO.id + i, PARAMS.IMAGES.LOGO.url);
    }

    this.load.on(
      'progress',
      (percent) => {
        loadingBar.fillRect(
          0,
          this.game.renderer.height / 2,
          this.game.renderer.width * percent,
          50,
        );
      },
      this,
    );
  }

  create() {
    this.scene.start(PARAMS.SCENES.menuScene, 'Game is loaded');
  }
}

export default LoadScene;
