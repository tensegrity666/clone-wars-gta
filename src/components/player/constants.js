import uniqid from 'uniqid';

import walk from './assets/player_walk.png';
import run from './assets/player_run.png';
import pistol from './assets/player_pistol.png';
import chaingun from './assets/player_chaingun.png';
import chaingunShoot from './assets/player_chaingun_shoot.png';
import bomb from './assets/bomb.png';

const PARAMS = {
  INITIAL_COORDINATES: {
    x: 6240,
    y: 6300,
  },
  IMAGES: {
    PLAYER: {
      walk: {
        id: uniqid(),
        img: walk,
        frameSize: {
          frameWidth: 35,
          frameHeight: 57,
        },
      },
      run: {
        id: uniqid(),
        img: run,
        frameSize: {
          frameWidth: 80,
          frameHeight: 87,
        },
      },
      pistol: {
        id: uniqid(),
        img: pistol,
        frameSize: {
          frameWidth: 60,
          frameHeight: 60,
        },
      },
      chaingun: {
        id: uniqid(),
        img: chaingun,
        frameSize: {
          frameWidth: 54,
          frameHeight: 32,
        },
      },
      chaingunShoot: {
        id: uniqid(),
        img: chaingunShoot,
        frameSize: {
          frameWidth: 53,
          frameHeight: 30,
        },
      },
    },
    BULLET: {
      bomb: {
        id: uniqid(),
        img: bomb,
      },
    },
  },
};

const controlKeys = {
  up: 'W',
  down: 'S',
  left: 'A',
  rigth: 'D',
  run: 'SPACE',
  attackMain: 'J',
  action: 'ENTER',
};

const MOVING_PARAMS = {
  PLAYER_SPEED: 160,
  SPEED_COF: 2,
  ROTATION: {
    noRotate: 0,
    rotate: Math.PI,
  },
};

export { PARAMS, MOVING_PARAMS, controlKeys };
