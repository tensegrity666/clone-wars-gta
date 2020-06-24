import { nanoid } from 'nanoid';

import hk from '../assets/hk.png';
import bomb from '../assets/bomb.png';

const PARAMS = {
  INITIAL_COORDINATES: [6550, 6500],
  IMAGES: {
    HK: {
      id: nanoid(),
      img: hk,
      frameSize: { frameWidth: 1000, frameHeight: 460 },
    },
    BULLET: {
      bomb: {
        id: nanoid(),
        img: bomb,
      },
    },
  },
};

export default PARAMS;
