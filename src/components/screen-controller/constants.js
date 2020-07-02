import { nanoid } from 'nanoid';

import controlSprite from './assets/control.png';
import fingerSprite from './assets/finger.png';

const PARAMS = {
  controlId: nanoid(),
  controlPath: controlSprite,
  controlSize: {
    controlWidth: 160,
    controlHeight: 160,
  },
  startPosition: {
    x: 200,
    y: 600,
  },
  radius: 100,
  fingerId: nanoid(),
  fingerPath: fingerSprite,
  fingerSize: {
    fingerWidth: 80,
    fingerHeight: 80,
  },
};

export default PARAMS;
