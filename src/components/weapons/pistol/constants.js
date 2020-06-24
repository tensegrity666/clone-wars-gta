import { nanoid } from 'nanoid';

import pistol from '../assets/pistol.png';
import hk from '../assets/hk.png';
import bullet from '../assets/bullet.png';

const PARAMS = {
  INITIAL_COORDINATES: [6250, 6500],
  IMAGES: {
    PISTOL: {
      id: nanoid(),
      img: pistol,
      frameSize: { frameWidth: 600, frameHeight: 600 },
    },
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
