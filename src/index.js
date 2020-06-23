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
    pixelart: false,
  },
  physics: {
    default: 'matter',
    matter: {
      enabled: true,
      positionIterations: 6,
      velocityIterations: 4,
      debug: true,
      gravity: { y: 0 },
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [LoadScene, MenuScene, MainScene, GameOverScene],
};

export default new Phaser.Game(config);
