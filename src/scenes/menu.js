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
    this.cameras.main.fadeIn(PARAMS.CAMERA.fadeTime);
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
    const graphics = this.add.graphics();

    graphics.clear();
    graphics.lineStyle(...PARAMS.LINES.style);
    graphics.lineBetween(...PARAMS.LINES.horizontal);
    graphics.lineBetween(...PARAMS.LINES.vertical);
    graphics.strokeCircle(...PARAMS.CIRCLE);
  }

  openFullscreen() {
    this.btnFullscreen.on(
      'pointerup',
      () => {
        if (this.scale.isFullscreen) {
          this.screenMode.text = PARAMS.BUTTONS.text.off;
          this.screenMode.setColor(PARAMS.BUTTONS.color.red);
          this.scale.stopFullscreen();
        } else {
          this.screenMode.text = PARAMS.BUTTONS.text.on;
          this.screenMode.setColor(PARAMS.BUTTONS.color.green);
          this.scale.startFullscreen();
        }
      },
      this,
    );
  }

  showLogo() {
    this.add
      .image(...PARAMS.IMAGES.LOGO.coord, PARAMS.IMAGES.LOGO.id)
      .setDepth(1)
      .setOrigin(...PARAMS.originCenter)
      .setSize(...PARAMS.IMAGES.LOGO.size);
  }

  showBackground() {
    this.add
      .image(...PARAMS.IMAGES.COVER.coord, PARAMS.IMAGES.COVER.id)
      .setDepth(0)
      .setOrigin(0)
      .setSize(...PARAMS.IMAGES.COVER.size);
  }

  showButtons() {
    this.btnStart = this.make
      .text({
        x: PARAMS.BUTTONS.coord[0],
        y: PARAMS.BUTTONS.coord[1],
        text: PARAMS.BUTTONS.text.start,
        style: PARAMS.BUTTONS.startStyle,
      })
      .setOrigin(...PARAMS.originCenter)
      .setShadow(...PARAMS.BUTTONS.shadow);

    this.btnFullscreen = this.make
      .text({
        x: PARAMS.BUTTONS.coord[4],
        y: PARAMS.BUTTONS.coord[2],
        text: PARAMS.BUTTONS.text.fullscreen,
        style: PARAMS.BUTTONS.textStyle,
      })
      .setOrigin(...PARAMS.originCenter)
      .setShadow(...PARAMS.BUTTONS.shadow)
      .setInteractive();

    this.screenMode = this.make
      .text({
        x: PARAMS.BUTTONS.coord[5],
        y: PARAMS.BUTTONS.coord[2],
        text: PARAMS.BUTTONS.text.off,
        style: PARAMS.BUTTONS.switchStyle,
      })
      .setOrigin(...PARAMS.originCenter)
      .setShadow(...PARAMS.BUTTONS.shadow);

    this.btnScore = this.make
      .text({
        x: PARAMS.BUTTONS.coord[0],
        y: PARAMS.BUTTONS.coord[3],
        text: PARAMS.BUTTONS.text.score,
        style: PARAMS.BUTTONS.textStyle,
      })
      .setOrigin(...PARAMS.originCenter)
      .setShadow(...PARAMS.BUTTONS.shadow);
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
