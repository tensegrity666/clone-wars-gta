/* eslint-disable no-console */

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
    default: PROPERTIES.phisycs,
    arcade: {
      gravity: PROPERTIES.gravity,
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [LoadScene, MenuScene, MainScene, GameOverScene],
};

const loadHandler = () => {
  navigator.serviceWorker
    .register('./worker.js', { scope: './' })
    .then((reg) => {
      console.log(`SW is registered: ${reg.scope}`);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
};

if ('serviceWorker' in navigator) {
  window.addEventListener('load', loadHandler);
}

export default new Phaser.Game(config);
