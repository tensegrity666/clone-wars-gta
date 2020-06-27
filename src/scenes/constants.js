import { nanoid } from 'nanoid';

import logo from './assets/images/logo.png';
import music from './assets/sounds/title.mp3';

const PARAMS = {
  SCENES: {
    gameScene: nanoid(),
    loadScene: nanoid(),
    menuScene: nanoid(),
    gameOverScene: nanoid(),
    UIScene: nanoid(),
  },
  IMAGES: {
    LOGO: {
      id: nanoid(),
      img: logo,
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
