/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import IAbstarct from '../interface';
import PARAMS from './map.constants';
import Player from '../player';

class Map extends IAbstarct {
  static id = PARAMS.id;

  preload(scene) {
    scene.load.image('terrain', PARAMS.pic);
    scene.load.tilemapTiledJSON(this.constructor.id, PARAMS.url);
  }

  create(scene, featuresMap) {
    this.player = featuresMap[Player.id].object;
    console.log(this.player);

    const map = scene.add.tilemap(this.constructor.id);

    const terrain = map.addTilesetImage('gta-tiles', 'terrain');

    map.createStaticLayer('Ground', [terrain], 0, 0).setDepth(-1);
    const top = map.createStaticLayer('Top', [terrain], 0, 0).setDepth(-1);

    scene.physics.add.collider(this.player, top);
    top.setCollision([894, 609]);

    scene.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }
}

export default Map;
