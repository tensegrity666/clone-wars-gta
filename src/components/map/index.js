/* eslint-disable no-unused-vars */
import IAbstarct from '../interface';
import PARAMS from './map.constants';

class Map extends IAbstarct {
  static id = PARAMS.id;

  preload(scene) {
    scene.load.tilemapTiledJSON(this.constructor.id, PARAMS.url);
  }

  create(scene) {
    const map = scene.add.tilemap(this.constructor.id);

    const terrain = map.addTilesetImage('tilesetmain');

    const layer = map.createStaticLayer('id', [terrain], 0, 0);
  }
}

export default Map;
