import './index.css';
import Phaser from 'phaser';

import PROPERTIES from './game-props';
import MainScene from './scenes';
import MenuScene from './scenes/menu';
import LoadScene from './scenes/load';
import GameOverScene from './scenes/gameover';

const config = {
  parent: 'container',
  type: Phaser.AUTO,
  width: PROPERTIES.width,
  height: PROPERTIES.height,
  render: {
    pixelart: true,
  },
  physics: {
    default: PROPERTIES.phisycs,
    arcade: {
      gravity: PROPERTIES.gravity,
      debug: true,
    },
  },
  scale: {
    // mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [LoadScene, MenuScene, MainScene, GameOverScene],
};

export default new Phaser.Game(config);
