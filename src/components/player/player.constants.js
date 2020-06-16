import uniqid from 'uniqid';

const PARAMS = {
  INITIAL_COORDINATES: {
    x: 6240,
    y: 6300,
  },
  IMAGES: {
    PLAYER: {
      walk: {
        id: uniqid(),
        path: '../../assets/player/player_walk.png',
        frameSize: {
          frameWidth: 35,
          frameHeight: 57,
        },
      },
      run: {
        id: uniqid(),
        path: '../../assets/player/player_run.png',
        frameSize: {
          frameWidth: 80,
          frameHeight: 87,
        },
      },
      pistol: {
        id: uniqid(),
        path: '../../assets/player/player_pistol.png',
        frameSize: {
          frameWidth: 60,
          frameHeight: 60,
        },
      },
      chaingun: {
        id: uniqid(),
        path: '../../assets/player/player_chaingun.png',
        frameSize: {
          frameWidth: 54,
          frameHeight: 32,
        },
      },
      chaingunShoot: {
        id: uniqid(),
        path: '../../assets/player/player_chaingun_shoot.png',
        frameSize: {
          frameWidth: 53,
          frameHeight: 30,
        },
      },
    },
    BULLET: {
      bomb: {
        id: uniqid(),
        path: '../../assets/player/bomb.png',
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
