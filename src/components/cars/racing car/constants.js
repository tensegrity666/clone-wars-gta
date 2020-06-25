import { nanoid } from 'nanoid';

import car from '../assets/viper.png';

const PARAMS = {
  INITIAL_COORDINATES: [5500, 6450],
  IMAGES: {
    PLAYER_CAR: {
      id: nanoid(),
      img: car,
      frameSize: { frameWidth: 256, frameHeight: 256 },
    },
  },
  MAX_SPEED: 1000,
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
