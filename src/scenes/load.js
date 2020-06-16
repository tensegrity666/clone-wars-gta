/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

import Phaser from 'phaser';

import PARAMS from './constants';
import PROPERTIES from '../game-props';

class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: PARAMS.SCENES.loadScene,
    });
  }

  preload() {
    this.loadImages();
    this.loadAudio();
    // this.loadSprites({
    //   frameHeight: 32,
    //   frameWidth: 32,
    // });

    this.addLoader();
  }

  create() {
    this.scene.start(PARAMS.SCENES.menuScene, '%USERNAME%');
  }

  loadImages() {
    const img = Object.values(PARAMS.IMAGES);

    img.forEach((element) => this.load.image(element.id, element.path));
  }

  loadAudio() {
    const snd = Object.values(PARAMS.SOUNDS);

    snd.forEach((element) => this.load.audio(element.id, element.path));
  }

  // loadSprites(frameConfig) {
  //   const sprt = Object.values(PARAMS.SPRITES);

  //   sprt.forEach((element) => this.load.spritesheet(element.id, element.path, frameConfig));
  // }

  addLoader() {
    this.loading = this.add
      .text(PROPERTIES.width * 0.4, PROPERTIES.height * 0.4, '', {
        font: '60px gta',
        fill: 'orange',
      })
      .setOrigin(0);

    this.load.on('progress', (percent) => {
      const loadText = Math.round(percent * 100);
      this.loading.setText(`${loadText}%`);
    });

    this.load.on('complete', () => console.log('Game is loaded'));
  }
}

export default LoadScene;
