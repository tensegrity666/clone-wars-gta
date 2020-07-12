import { nanoid } from 'nanoid';

import pistol from '../weapons/assets/pistol.png';
import machineGun from '../weapons/assets/hk.png';
import chaingun from '../weapons/assets/chaingun.png';

const PARAMS = {
  INITIAL_COORDINATES: [6200, 6300],
  IMAGES: {
    WEAPONS: {
      pistol: {
        id: nanoid(),
        img: pistol,
        frameSize: {
          frameWidth: 600,
          frameHeight: 600,
        },
      },
      machineGun: {
        id: nanoid(),
        img: machineGun,
        frameSize: {
          frameWidth: 1000,
          frameHeight: 460,
        },
      },
      chaingun: {
        id: nanoid(),
        img: chaingun,
        frameSize: {
          frameWidth: 920,
          frameHeight: 400,
        },
      },
    },
  },
  textCoords: [200, 660, 20, 50, 80],
  textStyle: {
    font: '32px gta',
    fill: '#ffffff',
  },
};

const WEAPONS = {
  pistol: 'pistol',
  machineGun: 'machine gun',
  chaingun: 'chaingun',
};

export { PARAMS, WEAPONS };
