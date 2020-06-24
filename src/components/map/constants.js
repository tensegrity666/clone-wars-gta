import { nanoid } from 'nanoid';

import map from './assets/liberty-city.json';
import tileSet from './assets/gta-tiles.jpg';
import waterSet from './assets/water-tiles.png';

const PARAMS = {
  id: nanoid(),
  mapJSON: map,
  pic: tileSet,
  waterPic: waterSet,
};

export default PARAMS;
