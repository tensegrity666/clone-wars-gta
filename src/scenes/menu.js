/* eslint-disable no-console */

import Phaser from 'phaser';

import PARAMS from './constants';
import PROPERTIES from '../game-props';

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

  create() {
    this.showLogo();
    this.showButtons();

    this.sound.pauseOnBlur = false;
    this.sound.play(PARAMS.SOUNDS.MENU.id, { loop: true });

    this.addMenuInteractive();
  }

  showLogo() {
    this.add
      .image(
        PROPERTIES.width * 0.33,
        PROPERTIES.height * 0.2,
        PARAMS.IMAGES.LOGO.id,
      )
      .setDepth(0)
      .setOrigin(0)
      .setSize(300, 400);
  }

  showButtons() {
    this.btnStart = this.add
      .text(PROPERTIES.width * 0.35, PROPERTIES.height * 0.5, 'START GAME', {
        font: '60px gta',
        fill: 'orange',
      })
      .setOrigin(0);

    this.btnMenu = this.add
      .text(PROPERTIES.width * 0.35, PROPERTIES.height * 0.57, 'MENU', {
        font: '60px gta',
        fill: 'orange',
      })
      .setOrigin(0);

    this.btnScore = this.add
      .text(PROPERTIES.width * 0.35, PROPERTIES.height * 0.64, 'SCORE', {
        font: '60px gta',
        fill: 'orange',
      })
      .setOrigin(0);
  }

  addMenuInteractive() {
    const menu = [this.btnStart, this.btnMenu, this.btnScore];

    menu.forEach((element) => {
      element.setInteractive();

      element.on('pointerover', () => {
        element.setScale(1.05);
      });

      element.on('pointerout', () => {
        element.setScale(1);
      });
    });

    this.btnStart.on('pointerup', () => {
      this.scene.start(PARAMS.SCENES.gameScene, 'start');
      this.sound.stopByKey(PARAMS.SOUNDS.MENU.id);
    });
  }
}

export default MenuScene;
