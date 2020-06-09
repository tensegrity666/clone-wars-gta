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

  create() {
    this.startBtn = this.add.image(this.game.renderer.width / 2,
      this.game.renderer.height * 0.7, PARAMS.IMAGES.START.id).setDepth(1);

    this.startBtn.setDisplaySize(200, 100);

    this.add.image(0, 0, PARAMS.IMAGES.LOGO.id).setOrigin(-0.7, -0.5).setDepth(0);

    this.sound.pauseOnBlur = false;
    this.sound.play(PARAMS.SOUNDS.MENU.id, { loop: true });

    this.addMenuInteractive();
  }

  addMenuInteractive() {
    this.startBtn.setInteractive();

    this.startBtn.on('pointerover', () => {
      this.startBtn.setDisplaySize(220, 120);
    });

    this.startBtn.on('pointerout', () => {
      this.startBtn.setDisplaySize(200, 100);
    });
  }
}

export default MenuScene;
