import { nanoid } from 'nanoid';

import bullet from '../assets/bullet.png';

const PARAMS = {
  IMAGES: {
    BULLET: {
      bullet: {
        id: nanoid(),
        img: bullet,
      },
    },
  },
};

export default PARAMS;
