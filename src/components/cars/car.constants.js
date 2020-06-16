import uniqid from 'uniqid';

const PARAMS = {
  INITIAL_COORDINATES: {
    x: 6000,
    y: 6450,
  },
  IMAGES: {
    PLAYER_CAR: {
      id: uniqid(),
      path: '../../assets/cars/car.png',
      frameSize: {
        frameWidth: 256,
        frameHeight: 256,
      },
    },
  },
};

const controlKeys = {
  up: 'UP',
  down: 'DOWN',
  left: 'LEFT',
  rigth: 'RIGHT',
  stop: 'SPACE',
  attackMain: 'J',
  action: 'ENTER',
};

export { PARAMS, controlKeys };
