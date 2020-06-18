import { nanoid } from 'nanoid';

import mapRoad from './assets/liberty-city.json';
import tileSetRoad from './assets/gta-tiles.jpg';

import mapBuild from './assets/build.json';
import tileSetBuild from './assets/build_tiles.png';

const PARAMS = {
  idRoad: nanoid(),
  idBuild: nanoid(),
  mapRoadJSON: mapRoad,
  picRoad: tileSetRoad,
  mapBuildJSON: mapBuild,
  picBuild: tileSetBuild,
};

export default PARAMS;
