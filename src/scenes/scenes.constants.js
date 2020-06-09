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
      url: '../assets/images/logo.png',
    },
  },
  SOUNDS: {
    MENU: {
      id: uniqid('menusnd-'),
      url: '../assets/sounds/title.mp3',
    },
  },
  SPRITES: {
    PLAYER: {
      id: uniqid('plyr-'),
      url: '../assets/sprites/player.png',
    },
  },
};

export default PARAMS;
