/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';

import IAbstarct from '../interface';
import PARAMS from './constants';
// import Player from '../player';

class Map extends IAbstarct {
  static id = nanoid();

  preload(scene) {
    scene.load.image(PARAMS.id, PARAMS.pic);
    scene.load.tilemapTiledJSON(this.constructor.id, PARAMS.mapJSON);
    scene.load.spritesheet('waterSprite', PARAMS.waterPic, {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create(scene, featuresMap) {
    // this.player = featuresMap[Player.id].object;

    this.map = scene.add.tilemap(this.constructor.id);

    const config = {
      key: 'waterAnimation',
      frames: scene.anims.generateFrameNumbers('waterSprite', {
        start: 43,
        end: 45,
      }),
      frameRate: 1,
      repeat: -1,
      repeatDelay: 2,
    };

    scene.anims.create(config);

    const waterLayer = this.map.layers[0].data;

    for (let pointArr = 0; pointArr < waterLayer.length; pointArr++) {
      for (let tile = 0; tile < waterLayer[pointArr].length; tile++) {
        const tileInfo = waterLayer[pointArr][tile];
        if (tileInfo.index !== -1) {
          const water = scene.add
            .sprite(tileInfo.x * 64, tileInfo.y * 64, 'waterSprite', 23)
            .setOrigin(0, 0);

          water.anims.delayedPlay(Math.random() * 3, 'waterAnimation');
        }
      }
    }

    const terrain = this.map.addTilesetImage('gta-tiles', PARAMS.id);

    this.map.createStaticLayer('ground', [terrain], 0, 0);
    this.map.createStaticLayer('roads', [terrain], 0, 0);

    this.object = this.map.createStaticLayer('box', [terrain], 0, 0);

    // scene.physics.add.collider(this.player, this.object);

    this.object.setCollisionByProperty({
      collides: true,
    });

    this.object.setCollision([894, 609]);

    scene.physics.world.setBounds(
      0,
      0,
      this.object.widthInPixels,
      this.object.heightInPixels
    );
  }
}

export default Map;
