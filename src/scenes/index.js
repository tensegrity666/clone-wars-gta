/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */

import Phaser from 'phaser';

import PARAMS from './constants';

import { featuresMap, featuresId } from '../components';

class MainScene extends Phaser.Scene {
  constructor() {
    super({
      key: PARAMS.SCENES.gameScene,
    });
  }

  init(data) {
    this.data = data;

    console.log(`${this.data}`);
  }

  preload() {
    featuresId.forEach((id) => featuresMap[id].preload(this, featuresMap));
  }

  create() {
    featuresId.forEach((id) => featuresMap[id].create(this, featuresMap));
  }

  update() {
    featuresId.forEach((id) => featuresMap[id].update(this, featuresMap));
  }
}

export default MainScene;
