import { nanoid } from 'nanoid';

import pistol from './assets/pistol.png';
import hk from './assets/hk.png';
import bomb from './assets/bomb.png';

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
      bomb: {
        id: nanoid(),
        img: bomb,
      },
    },
  },
};

export default PARAMS;
