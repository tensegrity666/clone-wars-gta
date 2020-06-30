import { nanoid } from 'nanoid';

import car from '../assets/car.png';

const PARAMS = {
  IMAGES: {
    ORANGE_CAR: {
      id: nanoid(),
      img: car,
      frameSize: { frameWidth: 256, frameHeight: 256 },
    },
  },
};

export default PARAMS;
