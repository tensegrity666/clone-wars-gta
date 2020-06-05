import './index.css';
import Phaser from 'phaser';

import MainScene from './scenes';
import PROPERTIES from './game-props';

const config = {
  type: Phaser.AUTO,
  width: PROPERTIES.width,
  height: PROPERTIES.height,
  physics: {
    default: PROPERTIES.phisycs,
    arcade: {
      gravity: PROPERTIES.gravity,
    },
  },
  scene: [MainScene],
};

export default new Phaser.Game(config);
