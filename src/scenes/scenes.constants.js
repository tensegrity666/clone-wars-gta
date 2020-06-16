import uniqid from 'uniqid';

const PARAMS = {
  SCENES: {
    gameScene: uniqid('game-'),
    loadScene: uniqid('load-'),
    menuScene: uniqid('menu-'),
    gameOverScene: uniqid('gameover-'),
  },
  IMAGES: {
    LOGO: {
      id: uniqid('logo-'),
      path: '../assets/images/logo.png',
    },
  },
  SOUNDS: {
    MENU: {
      id: uniqid('menusnd-'),
      path: '../assets/sounds/title.mp3',
    },
  },
  // SPRITES: {

  // }
};

export default PARAMS;
