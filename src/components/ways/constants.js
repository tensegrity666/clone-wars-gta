import { nanoid } from 'nanoid';

import car from './assets/car.png';

const PARAMS = {
  INITIAL_COORDINATES: [6000, 6450],
  IMAGES: {
    PLAYER_CAR: {
      id: nanoid(),
      img: car,
      frameSize: { frameWidth: 256, frameHeight: 256 },
    },
  },
};

export default PARAMS;
