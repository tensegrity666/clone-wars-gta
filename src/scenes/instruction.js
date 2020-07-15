/* eslint-disable no-unused-vars */

import Phaser from 'phaser';
import { nanoid } from 'nanoid';

import PARAMS from './constants';

class InctructionScene extends Phaser.Scene {
  constructor() {
    super(PARAMS.SCENES.instructionScene);
  }

  preload(scene) {
    this.load.image(
      PARAMS.spritesJoystick.controlId,
      PARAMS.spritesJoystick.controlPath,
    );

    this.load.image(
      PARAMS.spritesJoystick.directionId,
      PARAMS.spritesJoystick.directionPath,
    );

    this.load.image(
      PARAMS.spritesJoystick.shootId,
      PARAMS.spritesJoystick.shootPath,
    );

    this.load.image(
      PARAMS.spritesJoystick.actionId,
      PARAMS.spritesJoystick.actionPath,
    );

    this.load.image(
      PARAMS.spritesJoystick.runId,
      PARAMS.spritesJoystick.runPath,
    );
  }

  init(data) {}

  async create() {
    this.cameras.main.fadeIn(PARAMS.CAMERA.fadeTime);

    this.add
      .graphics({ fillStyle: PARAMS.STATS.RECT.style })
      .fillRoundedRect(...PARAMS.STATS.RECT.size)
      .setDepth(1);

    const x = 350;
    const y = 100;
    const tableRows = 15;
    const padding = 10;
    const verticalGap = 40;

    const spriteFirstJoystick = this.add
      .sprite(x, y, PARAMS.spritesJoystick.controlId)
      .setOrigin(0, 0);
    spriteFirstJoystick.setDepth(100);

    const spriteFirstThumb = this.add
      .sprite(x, y, PARAMS.spritesJoystick.directionId)
      .setOrigin(-0.5, -0.5);
    spriteFirstThumb.setDepth(101);

    const textDirectionKeyboard = this.add.text(
      x + 200,
      y + 50,
      'or WASD',
      PARAMS.STATS.score,
    );
    textDirectionKeyboard.setDepth(101);

    const textFirstJoystick = this.add.text(
      x + 200,
      y + 70,
      PARAMS.textJoystick.firstJoystick,
      PARAMS.STATS.score,
    );
    textFirstJoystick.setDepth(101);
    // textFirstJoystick.setOrigin(-0.5, -0.5);

    const spriteSecondJoystick = this.add
      .sprite(x, y + 200, PARAMS.spritesJoystick.controlId)
      .setOrigin(0, 0);
    spriteSecondJoystick.setDepth(100);

    const spriteSecondThumb = this.add
      .sprite(x, y + 200, PARAMS.spritesJoystick.shootId)
      .setOrigin(-0.5, -0.5);
    spriteSecondThumb.setDepth(101);

    const textFireKeyboard = this.add.text(
      x + 200,
      y + 250,
      'or J',
      PARAMS.STATS.score,
    );
    textFireKeyboard.setDepth(101);

    const textSecondJoystick = this.add.text(
      x + 200,
      y + 270,
      PARAMS.textJoystick.secondJoystick,
      PARAMS.STATS.score,
    );
    textSecondJoystick.setDepth(101);
    // textSecondJoystick.setOrigin(-0.5, -0.5);

    const spriteActionButton = this.add
      .sprite(x, y + 350, PARAMS.spritesJoystick.actionId)
      .setOrigin(-0.5, -0.5);
    spriteActionButton.setDepth(100);

    const textActionKeyboard = this.add.text(
      x + 200,
      y + 400,
      'or Enter',
      PARAMS.STATS.score,
    );
    textActionKeyboard.setDepth(101);
    // textActionButton.setOrigin(-0.5, -0.5);

    const textActionButton = this.add.text(
      x + 200,
      y + 420,
      PARAMS.textJoystick.actionButton,
      PARAMS.STATS.score,
    );
    textActionButton.setDepth(101);

    const spriteRunButton = this.add
      .sprite(x, y + 450, PARAMS.spritesJoystick.runId)
      .setOrigin(-0.5, -0.5);
    spriteRunButton.setDepth(100);

    const textRunKeyboar = this.add.text(
      x + 200,
      y + 500,
      'or Space',
      PARAMS.STATS.score,
    );
    textRunKeyboar.setDepth(101);

    const textRunButton = this.add.text(
      x + 200,
      y + 520,
      PARAMS.textJoystick.runButton,
      PARAMS.STATS.score,
    );
    textRunButton.setDepth(101);
    // textRunButton.setOrigin(-0.5, -0.5);

    /*
    for (let i = 0; i < tableRows; ++i) {
      const num = this.add
        .text(x, y, `${i + 1}.`, PARAMS.STATS.score)
        .setOrigin(0, 0.5)
        .setDepth(2);

      if (i < this.scores.length) {
        const scoreItem = this.scores[i];

        const name = this.add
          .text(
            num.x + num.width + padding,
            y,
            scoreItem.userName,
            PARAMS.STATS.name,
          )
          .setOrigin(0, 0.5)
          .setDepth(2);

        const nameWidth = 400;
        this.add
          .text(
            name.x + nameWidth + padding,
            y,
            scoreItem.score.toString(),
            PARAMS.STATS.score,
          )
          .setOrigin(0, 0.5)
          .setDepth(2);
      }

      y += verticalGap;
    } */

    this.showBackground();
    this.backToMenu();
  }

  showBackground() {
    this.add
      .image(...PARAMS.IMAGES.STATS.coord, PARAMS.IMAGES.STATS.id)
      .setDepth(0)
      .setOrigin(0)
      .setSize(...PARAMS.IMAGES.COVER.size);
  }

  backToMenu() {
    this.btnBack = this.make
      .text({
        x: 110,
        y: 700,
        text: '<BACK',
        style: PARAMS.BUTTONS.textStyle,
      })
      .setDepth(2)
      .setOrigin(...PARAMS.originCenter)
      .setShadow(...PARAMS.BUTTONS.shadow)
      .setInteractive();

    this.btnBack.on('pointerover', () => {
      this.btnBack.setScale(1.05);
    });

    this.btnBack.on('pointerout', () => {
      this.btnBack.setScale(1);
    });

    this.btnBack.on('pointerup', () => {
      this.scene.switch(PARAMS.SCENES.menuScene);
    });
  }
}

export default InctructionScene;
