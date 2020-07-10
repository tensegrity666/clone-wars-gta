import { nanoid } from 'nanoid';

import hk from '../assets/hk.png';
import bullet from '../assets/bullet.png';

const PARAMS = {
  INITIAL_COORDINATES: [6550, 6500],
  IMAGES: {
    HK: {
      id: nanoid(),
      img: hk,
      frameSize: { frameWidth: 1000, frameHeight: 460 },
    },
    BULLET: {
      bullet: {
        id: nanoid(),
        img: bullet,
      },
    },
  },
};

export default PARAMS;
