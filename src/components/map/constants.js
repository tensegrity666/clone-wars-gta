import { nanoid } from 'nanoid';

import map from './assets/liberty-city.json';
import tileSet from './assets/gta-tiles.jpg';
import waterSet from './assets/water-tiles.png';

const PARAMS = {
  id: nanoid(),
  mapJSON: map,
  pic: tileSet,
  waterPic: waterSet,
  mainTilesID: 'gta-tiles',
  groundID: 'ground',
  roadsID: 'roads',
  boxID: 'box',
  obstacleID: 'obstacle',
  collisionsMap: [894, 609],
  waterID: nanoid(),
  waterAnimationID: nanoid(),
  frameSize: {
    frameWidth: 64,
    frameHeight: 64,
  },
  frameBorders: {
    start: 43,
    end: 45,
  },
};

export default PARAMS;
