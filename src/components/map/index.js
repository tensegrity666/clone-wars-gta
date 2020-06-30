/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';

import IAbstarct from '../interface';
import PARAMS from './constants';

class Map extends IAbstarct {
  static id = nanoid();

  preload(scene) {
    scene.load.image(PARAMS.id, PARAMS.pic);
    scene.load.tilemapTiledJSON(this.constructor.id, PARAMS.mapJSON);
    scene.load.spritesheet(PARAMS.waterID, PARAMS.waterPic, PARAMS.frameSize);
  }

  create(scene) {
    const config = {
      key: PARAMS.waterAnimationID,
      frames: scene.anims.generateFrameNumbers(
        PARAMS.waterID,
        PARAMS.frameBorders,
      ),
      frameRate: 1,
      repeat: -1,
      repeatDelay: 2,
    };

    const map = scene.add.tilemap(this.constructor.id);

    scene.anims.create(config);

    const waterLayer = map.layers[0].data;

    for (let pointArr = 0; pointArr < waterLayer.length; pointArr++) {
      for (let tile = 0; tile < waterLayer[pointArr].length; tile++) {
        const tileInfo = waterLayer[pointArr][tile];
        if (tileInfo.index !== -1) {
          const width = tileInfo.x * PARAMS.frameSize.frameWidth;
          const height = tileInfo.y * PARAMS.frameSize.frameHeight;
          const delay = Math.random() * 3;

          const water = scene.add
            .sprite(width, height, PARAMS.waterID)
            .setOrigin(0, 0);

          water.anims.delayedPlay(delay, PARAMS.waterAnimationID);
        }
      }
    }

    const terrain = map.addTilesetImage(PARAMS.mainTilesID, PARAMS.id);

    map.createStaticLayer(PARAMS.groundID, [terrain]);
    map.createStaticLayer(PARAMS.roadsID, [terrain]);

    this.object = map.createStaticLayer(PARAMS.boxID, [terrain]);

    this.object.setCollisionByProperty({
      collides: true,
    });

    this.object.setCollision(PARAMS.collisionsMap);

    scene.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }
}

export default Map;
