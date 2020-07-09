/* eslint-disable class-methods-use-this */

import Phaser from 'phaser';

import PARAMS from './constants';

class TimeQuestScene extends Phaser.Scene {
  constructor() {
    super({
      key: PARAMS.SCENES.timeQuestScene,
    });
  }

  init() {}

  preload() {}

  create() {
    // console.log('time quest scene loaded');
  }

  update() {}
}

export default TimeQuestScene;
