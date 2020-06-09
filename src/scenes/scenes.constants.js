import uniqid from 'uniqid';

const PARAMS = {
  SCENES: {
    gameScene: 'game-scene',
    loadScene: 'loading-scene',
    menuScene: 'menu-scene',
    gameOverScene: 'game-over-scene',
  },
  IMAGES: {
    LOGO: {
      id: uniqid('logo-'),
      url: '../assets/images/logo.png',
    },
  },
};

export default PARAMS;
