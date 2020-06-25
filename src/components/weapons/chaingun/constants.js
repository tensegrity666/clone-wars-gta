import { nanoid } from 'nanoid';

import chaingun from '../assets/chaingun.png';
import bomb from '../assets/bomb.png';

const PARAMS = {
  INITIAL_COORDINATES: [6750, 6500],
  IMAGES: {
    CHAINGUN: {
      id: nanoid(),
      img: chaingun,
      frameSize: { frameWidth: 820, frameHeight: 363 },
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
