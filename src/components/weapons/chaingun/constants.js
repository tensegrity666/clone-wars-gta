import { nanoid } from 'nanoid';

import chaingun from '../assets/chaingun.png';
import bullet from '../assets/bullet.png';

const PARAMS = {
  INITIAL_COORDINATES: [6750, 6500],
  IMAGES: {
    CHAINGUN: {
      id: nanoid(),
      img: chaingun,
      frameSize: { frameWidth: 820, frameHeight: 363 },
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
