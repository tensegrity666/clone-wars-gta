import { nanoid } from 'nanoid';

import walk from './assets/player_walk.png';
import run from './assets/player_run.png';
import pistol from './assets/player_pistol.png';
import chaingun from './assets/player_chaingun.png';
import chaingunShoot from './assets/player_chaingun_shoot.png';
import bomb from './assets/bomb.png';

const PARAMS = {
  INITIAL_COORDINATES: [6200, 6300],
  IMAGES: {
    PLAYER: {
      walk: {
        id: nanoid(),
        img: walk,
        frameSize: {
          frameWidth: 35,
          frameHeight: 57,
        },
      },
      run: {
        id: nanoid(),
        img: run,
        frameSize: {
          frameWidth: 80,
          frameHeight: 87,
        },
      },
      pistol: {
        id: nanoid(),
        img: pistol,
        frameSize: {
          frameWidth: 60,
          frameHeight: 60,
        },
      },
      chaingun: {
        id: nanoid(),
        img: chaingun,
        frameSize: {
          frameWidth: 54,
          frameHeight: 32,
        },
      },
      chaingunShoot: {
        id: nanoid(),
        img: chaingunShoot,
        frameSize: {
          frameWidth: 53,
          frameHeight: 30,
        },
      },
    },
    BULLET: {
      bomb: {
        id: nanoid(),
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
    rotateRight: 0,
    rotateLeft: Math.PI,
    rotateUpAndRight: -0.75,
    rotateUpAndLeft: (Math.PI * 5) / 4,
    rotateUp: -(Math.PI / 2),
    rotateDownAndRight: Math.PI / 4,
    rotateDownAndLeft: 2.5,
    rotateDown: Math.PI / 2,
  },
};

export { PARAMS, MOVING_PARAMS, controlKeys };
