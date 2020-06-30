/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

import Phaser from 'phaser';

import PARAMS from './constants';

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

    img.forEach((element) => this.load.image(element.id, element.img));
  }

  loadAudio() {
    const snd = Object.values(PARAMS.SOUNDS);

    snd.forEach((element) => this.load.audio(element.id, element.file));
  }

  // loadSprites(frameConfig) {
  //   const sprt = Object.values(PARAMS.SPRITES);

  //   sprt.forEach((element) => this.load.spritesheet(element.id, element.path, frameConfig));
  // }

  addLoader() {
    const boxColor = [0xffa500, 0.8];
    const barColor = [0xffffff, 1];
    const box = [500, 370, 320, 50];
    const barCoord = [510, 380];
    const textCoord = [660, 300];
    const jokesCoord = [660, 500];
    const textStyle = {
      font: '60px gta',
      fill: '#ffa500',
    };
    const filesStyle = {
      font: '30px gta',
      fill: '#ffffff',
    };

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(...boxColor);
    progressBox.fillRect(...box);

    const loadingText = this.make
      .text({
        x: textCoord[0],
        y: textCoord[1],
        style: textStyle,
      })
      .setOrigin(0.5, 0.5);

    const loadingJokes = this.make
      .text({
        x: jokesCoord[0],
        y: jokesCoord[1],
        style: filesStyle,
      })
      .setOrigin(0.5, 0.5);

    this.load.on('progress', (percent) => {
      const loadText = Math.round(percent * 100);
      loadingText.setText(`${loadText}%`);

      progressBar.clear();
      progressBar.fillStyle(...barColor);
      progressBar.fillRect(...barCoord, 300 * percent, 30);

      if (percent < 0.1) {
        loadingJokes.setText('Загрузка бананов в коробки');
      }
      if (percent > 0.1 && percent < 0.25) {
        loadingJokes.setText('Загрузка шуток');
      }
      if (percent > 0.25 && percent < 0.75) {
        loadingJokes.setText('Загрузка патронов в магазины');
      }
      if (percent > 0.75 && percent < 1) {
        loadingJokes.setText('Загрузка денег в чемоданы');
      }
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      loadingJokes.destroy();
    });
  }
}

export default LoadScene;
