/* eslint-disable no-console */

import Phaser from 'phaser';

import PARAMS from './constants';

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
    this.cameras.main.fadeIn(650);
    this.showLogo();
    this.showBackground();
    this.showButtons();

    this.sound.pauseOnBlur = false;
    this.sound.play(PARAMS.SOUNDS.MENU.id, { loop: true });

    this.addMenuInteractive();
    this.showCross();
    this.openFullscreen();
  }

  showCross() {
    const lineHorizontal = [0, 660, 1360, 660];
    const lineVertical = [1170, 0, 1170, 768];
    const graphics = this.add.graphics();

    graphics.clear();
    graphics.lineStyle(2, 0xff0000, 0.3);
    graphics.lineBetween(...lineHorizontal);
    graphics.lineBetween(...lineVertical);
    graphics.strokeCircle(1170, 660, 50);
  }

  openFullscreen() {
    this.btnFullscreen.on(
      'pointerup',
      () => {
        if (this.scale.isFullscreen) {
          this.screenMode.text = 'OFF';
          this.screenMode.setColor('#ff0000');
          this.scale.stopFullscreen();
        } else {
          this.screenMode.text = 'ON';
          this.screenMode.setColor('#004d00');
          this.scale.startFullscreen();
        }
      },
      this,
    );
  }

  showLogo() {
    this.add
      .image(680, 200, PARAMS.IMAGES.LOGO.id)
      .setDepth(1)
      .setOrigin(0.5, 0.5)
      .setSize(400, 500);
  }

  showBackground() {
    this.add
      .image(0, 0, PARAMS.IMAGES.COVER.id)
      .setDepth(0)
      .setOrigin(0)
      .setSize(1360, 768);
  }

  showButtons() {
    const coord = [660, 400, 470, 540];
    const switchStyle = {
      font: '60px gta',
      fill: '#ff0000',
    };
    const startStyle = {
      font: '80px gta',
      fill: '#ffa500',
    };
    const textStyle = {
      font: '60px gta',
      fill: '#ffa500',
    };

    this.btnStart = this.make
      .text({
        x: coord[0],
        y: coord[1],
        text: 'START GAME',
        style: startStyle,
      })
      .setOrigin(0.5, 0.5)
      .setShadow(3, 1, '#000000');

    this.btnFullscreen = this.make
      .text({
        x: 600,
        y: coord[2],
        text: 'FULLSCREEN:',
        style: textStyle,
      })
      .setOrigin(0.5, 0.5)
      .setShadow(3, 1, '#000000')
      .setInteractive();

    this.screenMode = this.make
      .text({
        x: 820,
        y: coord[2],
        text: 'off',
        style: switchStyle,
      })
      .setOrigin(0.5, 0.5)
      .setShadow(3, 1, '#000000');

    this.btnScore = this.make
      .text({
        x: coord[0],
        y: coord[3],
        text: 'SCORE',
        style: textStyle,
      })
      .setOrigin(0.5, 0.5)
      .setShadow(3, 1, '#000000');
  }

  addMenuInteractive() {
    const menu = [this.btnStart, this.btnFullscreen, this.btnScore];

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
