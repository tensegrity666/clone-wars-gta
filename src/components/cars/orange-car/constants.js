import { nanoid } from 'nanoid';

import car from '../assets/car.png';
import explosion from '../assets/explosion.png';

const PARAMS = {
  IMAGES: {
    ORANGE_CAR: {
      id: nanoid(),
      img: car,
      frameSize: { frameWidth: 256, frameHeight: 256 },
    },
    EXPLOSION: {
      id: nanoid(),
      img: explosion,
      frameSize: {
        frameWidth: 256,
        frameHeight: 128,
      },
    },
  },
};

export default PARAMS;
