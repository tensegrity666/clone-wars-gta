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

    console.log(`Hello ${this.data}`);
  }

  preload() {
  }

  create() {
    this.showLogo();
    this.showMenuButton();

    this.sound.pauseOnBlur = false;
    this.sound.play(PARAMS.SOUNDS.MENU.id, { loop: true });

    this.addMenuInteractive();
  }

  showLogo() {
    this.add.image(0, 300, PARAMS.IMAGES.LOGO.id).setOrigin(-1.5).setDepth(0);
  }

  showMenuButton() {
    this.startBtn = this.add
      .image(
        650,
        1000,
        PARAMS.IMAGES.START.id,
      )
      .setDepth(1);

    this.startBtn.setScale(1);
  }

  addMenuInteractive() {
    this.startBtn.setInteractive();

    this.startBtn.on('pointerover', () => {
      this.startBtn.setScale(1.3);
    });

    this.startBtn.on('pointerout', () => {
      this.startBtn.setScale(1);
    });

    this.startBtn.on('pointerup', () => {
      this.scene.start(PARAMS.SCENES.gameScene, 'start');
      this.sound.stopByKey(PARAMS.SOUNDS.MENU.id);
    });
  }
}

export default MenuScene;
