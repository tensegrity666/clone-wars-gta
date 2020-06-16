import { nanoid } from 'nanoid';

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
      path: '../assets/images/logo.png',
    },
  },
  SOUNDS: {
    MENU: {
      id: nanoid(),
      path: '../assets/sounds/title.mp3',
    },
  },
  // SPRITES: {

  // }
};

export default PARAMS;
