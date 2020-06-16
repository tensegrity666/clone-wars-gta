/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';

import IAbstarct from '../interface';
import PARAMS from './constants';
import Player from '../player';

class Map extends IAbstarct {
  static id = nanoid();

  preload(scene) {
    scene.load.image(PARAMS.id, PARAMS.pic);
    scene.load.tilemapTiledJSON(this.constructor.id, PARAMS.mapJSON);
  }

  create(scene, featuresMap) {
    this.player = featuresMap[Player.id].object;

    const map = scene.add.tilemap(this.constructor.id);

    const terrain = map.addTilesetImage('gta-tiles', PARAMS.id);

    map.createStaticLayer('water', [terrain], 0, 0);
    map.createStaticLayer('ground', [terrain], 0, 0);
    const top = map.createStaticLayer('roads', [terrain], 0, 0);

    // scene.physics.add.collider(this.player, top);

    // top.setCollisionByProperty({ collides: true });
    // top.setCollision([894, 609]);

    scene.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }
}

export default Map;
