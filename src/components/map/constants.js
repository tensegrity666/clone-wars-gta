import uniqid from 'uniqid';

import tileSet from './assets/gta-tiles.jpg';
import map from './assets/liberty-city.json';

const PARAMS = {
  id: uniqid('tile-'),
  mapJSON: map,
  pic: tileSet,
};

export default PARAMS;
