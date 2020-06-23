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

    this.object = scene.add.tilemap(this.constructor.id);

    const terrain = this.object.addTilesetImage('gta-tiles', PARAMS.id);

    this.object.createStaticLayer('water', [terrain], 0, 0);
    this.object.createStaticLayer('ground', [terrain], 0, 0);
    const top = this.object.createStaticLayer('roads', [terrain], 0, 0);

    // scene.matter.add.collider(this.player, top);

    // top.setCollisionByProperty({ collides: true });
    // top.setCollision([894, 609]);

    scene.matter.world.setBounds(
      0,
      0,
      this.object.widthInPixels,
      this.object.heightInPixels,
    );
  }
}

export default Map;
