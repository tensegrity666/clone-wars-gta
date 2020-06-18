/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';

import IAbstarct from '../interface';
import PARAMS from './constants';
import Player from '../player';

class Map extends IAbstarct {
  static idRoad = nanoid();

  static idBuild = nanoid();

  preload(scene) {
    scene.load.image(PARAMS.idRoad, PARAMS.picRoad);
    scene.load.tilemapTiledJSON(this.constructor.idRoad, PARAMS.mapRoadJSON);

    scene.load.image(PARAMS.idBuild, PARAMS.picBuild);
    scene.load.tilemapTiledJSON(this.constructor.idBuild, PARAMS.mapBuildJSON);
  }

  create(scene, featuresMap) {
    this.player = featuresMap[Player.id].object;

    this.object = scene.add.tilemap(this.constructor.idRoad);

    const terrain = this.object.addTilesetImage('gta-tiles', PARAMS.idRoad);

    this.object.createStaticLayer('water', [terrain], 0, 0);
    this.object.createStaticLayer('ground', [terrain], 0, 0);
    const roadObject = this.object.createStaticLayer('roads', [terrain], 0, 0);

    this.object_build = scene.add.tilemap(this.constructor.idBuild);

    const build = this.object.addTilesetImage('build', PARAMS.idRoad);

    this.object_build.createStaticLayer('green', [build], 0, 0);
    this.object_build.createStaticLayer('build', [build], 0, 0);
    this.object_build.createStaticLayer('tree', [build], 0, 0);
    this.object_build.createStaticLayer('top', [build], 0, 0);

    // scene.physics.add.collider(this.player, top);

    // top.setCollisionByProperty({ collides: true });
    // top.setCollision([894, 609]);

    scene.physics.world.setBounds(
      0,
      0,
      this.object.widthInPixels,
      this.object.heightInPixels
    );
  }
}

export default Map;
