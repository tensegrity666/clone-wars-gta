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
    },
    COVER: {
      id: nanoid(),
      img: cover,
    },
  },
  SOUNDS: {
    MENU: {
      id: nanoid(),
      file: music,
    },
  },
  // SPRITES: {

  // }
};

export default PARAMS;
