import { nanoid } from 'nanoid';

import controlSprite from './assets/control.png';
import directionThumpSprite from './assets/directionThump.png';
import shootThumpSprite from './assets/shootThump.png';
import actionSprite from './assets/action.png';

const JOYSTISK_PARAMS = {
  directionId: nanoid(),
  directionPath: controlSprite,
  directionPosition: {
    x: 200,
    y: 600,
  },
  directionSize: {
    width: 160,
    height: 160,
  },
  directionRadius: 100,

  shootId: nanoid(),
  shootPath: controlSprite,
  shootPosition: {
    x: 1200,
    y: 600,
  },
  shootSize: {
    width: 160,
    height: 160,
  },
  shootRadius: 100,

  actionId: nanoid(),
  actionPath: actionSprite,
  actionPosition: {
    x: 1000,
    y: 600,
  },
  actionSize: {
    width: 160,
    height: 160,
  },
  actionRadius: 40,

  directionThumbId: nanoid(),
  directionThumbPath: directionThumpSprite,
  directionThumbSize: {
    width: 80,
    height: 80,
  },

  shootThumbId: nanoid(),
  shootThumbPath: shootThumpSprite,
  shootThumbSize: {
    width: 80,
    height: 80,
  },

  actionThumbId: nanoid(),
  actionThumbPath: actionSprite,
  actionThumbSize: {
    width: 80,
    height: 80,
  },

  joystickDepth: 150,
};

export default JOYSTISK_PARAMS;
