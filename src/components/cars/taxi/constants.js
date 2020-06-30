import { nanoid } from 'nanoid';

import car from '../assets/taxi.png';

const PARAMS = {
  INITIAL_COORDINATES: [6000, 5550],
  IMAGES: {
    PLAYER_CAR: {
      id: nanoid(),
      img: car,
      frameSize: { frameWidth: 256, frameHeight: 256 },
    },
  },
  MAX_SPEED: 400,
};

const controlKeys = {
  up: 'W',
  down: 'S',
  left: 'A',
  rigth: 'D',
  stop: 'SPACE',
  action: 'ENTER',
};

export { PARAMS, controlKeys };
