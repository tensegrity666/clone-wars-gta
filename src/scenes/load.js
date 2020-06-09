/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

import Phaser from 'phaser';

import PARAMS from './scenes.constants';

class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: PARAMS.SCENES.loadScene,
    });
  }

  preload() {
    this.loadImages();
    this.loadAudio();
    this.loadSprites({
      frameHeight: 32,
      frameWidth: 32,
    });


    // ! large load simulation
    for (let i = 0; i < 100; i++) {
      this.load.image(PARAMS.IMAGES.LOGO.id + i, PARAMS.IMAGES.LOGO.url);
    }

    this.addLoader();
  }

  create() {
    this.scene.start(PARAMS.SCENES.menuScene, 'Welcome to the game!');
  }

  loadImages() {
    const img = Object.values(PARAMS.IMAGES);

    img.forEach((element) => this.load.image(element.id, element.url));
  }

  loadAudio() {
    const snd = Object.values(PARAMS.SOUNDS);

    snd.forEach((element) => this.load.audio(element.id, element.url));
  }

  loadSprites(frameConfig) {
    const sprt = Object.values(PARAMS.SPRITES);

    sprt.forEach((element) => this.load.spritesheet(element.id, element.url, frameConfig));
  }

  addLoader() {
    const loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffc400,
      },
    });

    this.load.on(
      'progress',
      (percent) => {
        loadingBar.fillRect(
          0,
          this.game.renderer.height / 2,
          this.game.renderer.width * percent,
          50,
        );

        console.log(Math.round(percent * 100));
      },
    );

    this.load.on('complete', () => console.log('Game is loaded'));
  }
}

export default LoadScene;
