import { nanoid } from 'nanoid';

import map from './assets/liberty-city.json';
import tileSet from './assets/gta-tiles.jpg';

const PARAMS = {
  id: nanoid(),
  mapJSON: map,
  pic: tileSet,
};

export default PARAMS;
