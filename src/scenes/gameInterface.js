/* eslint-disable no-console */

import Phaser from 'phaser';
// import Player from '../components/player';
import PARAMS from './constants';

class UIScene extends Phaser.Scene {
  constructor() {
    super({
      key: PARAMS.SCENES.UIScene,
    });
  }

  create() {
    console.log('load UIScene');
    // this.player = interactionMap[Player.id];
  }

  update() {}
}

export default UIScene;
