import { nanoid } from 'nanoid';

import logo from './assets/images/logo.png';
import cover from './assets/images/cover.jpg';
import music from './assets/sounds/title.mp3';

const PARAMS = {
  SCENES: {
    gameScene: nanoid(),
    loadScene: nanoid(),
    menuScene: nanoid(),
    gameOverScene: nanoid(),
  },
  IMAGES: {
    LOGO: {
      id: nanoid(),
      img: logo,
      coord: [680, 200],
      size: [400, 500],
    },
    COVER: {
      id: nanoid(),
      img: cover,
      coord: [0, 0],
      size: [1360, 768],
    },
  },
  SOUNDS: {
    MENU: {
      id: nanoid(),
      file: music,
    },
  },
  LINES: {
    horizontal: [0, 660, 1360, 660],
    vertical: [1170, 0, 1170, 768],
    style: [2, 0xff0000, 0.3],
  },
  CIRCLE: [1170, 660, 50],
  BUTTONS: {
    color: {
      red: '#ff0000',
      green: '#004d00',
    },
    coord: [660, 400, 470, 540, 600, 820],
    text: {
      start: 'START GAME',
      fullscreen: 'FULLSCREEN:',
      off: 'off',
      on: 'on',
      score: 'SCORE',
    },
    switchStyle: {
      fontFamily: '60px gta',
      fill: '#ff0000',
    },
    startStyle: {
      font: '80px gta',
      fill: '#ffa500',
    },
    textStyle: {
      font: '60px gta',
      fill: '#ffa500',
    },
    shadow: [3, 1, '#000000'],
  },
  CAMERA: {
    fadeTime: 650,
  },
  originCenter: [0.5, 0.5],
};

export default PARAMS;
