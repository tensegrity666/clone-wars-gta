/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import IAbstarct from '../../interface';

import Player from '../../player';

import PARAMS from './constants';

class TimeQuest extends IAbstarct {
  static id = nanoid();

  state = {
    time: 60,
    isStarted: false,
    isCreated: false,
    isFinished: false,
    isActive: true,
  };

  preload(scene) {
    const sprites = Object.values(PARAMS.IMAGES);
    sprites.forEach((sprite) => {
      scene.load.spritesheet(sprite.id, sprite.img, sprite.frameSize);
    });
  }

  create(scene, interactionMap) {
    this.player = interactionMap[Player.id];
    this.startObj = scene.physics.add
      .sprite(
        ...PARAMS.INITIAL_COORDINATES_START,
        PARAMS.IMAGES.TIME_QUEST_START_ICON.id,
      )
      .setDepth(1)
      .setImmovable();
    this.finishObj = scene.physics.add
      .sprite(
        ...PARAMS.INITIAL_COORDINATES_FINISH,
        PARAMS.IMAGES.TIME_QUEST_FINISH_ICON.id,
      )
      .setDepth(1)
      .setImmovable();
    this.timeQuestScene = scene.game.scene.scenes[5];
    this.container = this.timeQuestScene.add.container();
    // this.container.add(this.finishObj);
    this.finishObj.visible = false;
  }

  showArrow() {
    const diffX = this.finishObj.x - this.player.object.x;
    const diffY = this.finishObj.y - this.player.object.y;
    const angle = Math.atan(Math.abs(diffX / diffY));
    if (diffX > 0 && diffY < 0) {
      this.arrow.rotation = -Math.PI / 2 + angle;
    }
    if (diffX < 0 && diffY < 0) {
      this.arrow.rotation = -Math.PI / 2 - angle;
    }
    if (diffX > 0 && diffY > 0) {
      this.arrow.rotation = Math.PI / 2 - angle;
    }
    if (diffX < 0 && diffY > 0) {
      this.arrow.rotation = Math.PI / 2 + angle;
    }
  }

  questActive() {
    this.time.setText(`time: ${this.state.time}`);
    this.showArrow();
  }

  update(scene) {
    if (this.state.isActive) {
      if (this.state.isStarted && !this.state.isCreated) {
        this.startObj.body.enable = false;
        // this.finishObj = this.container.getAt(0);
        // this.container.removeAll();
        this.finishObj.visible = true;
        this.container.add(this.startObj);
        this.startObj.visible = false;

        this.time = this.timeQuestScene.add.text(
          600,
          20,
          `time: ${this.state.time}`,
          { fontSize: '32px', fill: '#fff' },
        );
        setInterval(() => {
          this.state.time -= 1;
        }, 1000);

        this.state.isCreated = true;
        this.arrow = this.timeQuestScene.add
          .image(700, 200, PARAMS.IMAGES.ARROW_ICON.id)
          .setScale(0.3);
      }

      if (this.state.isStarted && this.state.isCreated) {
        this.questActive();
      }

      if (this.state.isFinished) {
        // if (this.state.time > 0) {
        // this.player.state.score += 1000;
        // this.state.isActive = false;
        // }
        // this.finishObj.body.enable = false;
        // this.container.removeAll();
        // this.startObj.body.enable = true;
        // this.container.add(this.finishObj);
      }
    }
  }
}

export default TimeQuest;
