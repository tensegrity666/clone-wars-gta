import { nanoid } from 'nanoid';

import tileSet from './assets/gta-tiles.jpg';
import map from './assets/liberty-city.json';

const PARAMS = {
  id: nanoid(),
  mapJSON: map,
  pic: tileSet,
};

export default PARAMS;
