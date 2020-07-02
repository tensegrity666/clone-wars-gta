/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import {
  nanoid,
} from 'nanoid';
import Phaser, {
  Scene,
} from 'phaser';
import VirtualJoystickPlugin from 'phaser3-rex-plugins/plugins/virtualjoystick';

import IAbstarct from '../interface';

import PARAMS from './constants';

import Player from '../player';
import {
  MOVING_PARAMS,
} from '../player/constants';

let gameObject;

class ScreenController extends IAbstarct {
  static id = nanoid();

  preload(scene) {
    scene.load.image(PARAMS.controlId, PARAMS.controlPath);
    scene.load.image(PARAMS.fingerId, PARAMS.fingerPath);
  }

  create(scene, featureMap) {
    for (const key in featureMap) {
      if (featureMap[key] instanceof Player) {
        gameObject = featureMap[key];
      }
    }

    this.joystic = new VirtualJoystickPlugin(scene, {
      x: PARAMS.startPosition.x,
      y: PARAMS.startPosition.y,
      radius: PARAMS.radius,
      base: scene.add.sprite(
        PARAMS.controlSize.controlWidth,
        PARAMS.controlSize.controlHeight,
        PARAMS.controlId,
      ),
      thumb: scene.add.sprite(
        PARAMS.fingerSize.fingerWidth,
        PARAMS.fingerSize.fingerHeight,
        PARAMS.fingerId,
      ),
      dir: '8dir',
      forceMin: 16,
      enable: true,
    }).on('update', this.dumpJoyStickState, this);

    this.text = scene.add.text(0, 0);
    this.dumpJoyStickState();
  }

  dumpJoyStickState() {
    const cursorKeys = this.joystick.createCursorKeys();

    for (const name in cursorKeys) {
      if (cursorKeys[name].isDown) {
        gameObject.state.isRunning = true;

        if (name === 'right') {
          gameObject.object.setVelocityX(
            MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF,
          );
        }
        if (name === 'left') {
          gameObject.object.setVelocityX(
            -(MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF),
          );
        }
        if (name === 'down') {
          gameObject.object.setVelocityY(
            MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF,
          );
        }
        if (name === 'up') {
          gameObject.object.setVelocityY(
            -(MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF),
          );
        }
        gameObject.object.anims.play(gameObject.animations.run.key, true);
      }
    }
  }

  update(scene) {
    const pointer = scene.input.activePointer;

    if (pointer.isDown) {
      const touchX = pointer.x;
      const touchY = pointer.y;

      if ((touchX - PARAMS.startPosition.x) > 20) {
        gameObject.object.setVelocityX(
          MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF,
        );
      }
      if ((touchX - PARAMS.startPosition.x) < -20) {
        gameObject.object.setVelocityX(
          -(MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF),
        );
      }
      if ((touchY - PARAMS.startPosition.y) > 20) {
        gameObject.object.setVelocityY(
          MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF,
        );
      }
      if ((touchY - PARAMS.startPosition.y) < -20) {
        gameObject.object.setVelocityY(
          -(MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF),
        );
      }
      gameObject.object.anims.play(gameObject.animations.run.key, true);
    }
  }
}

export default ScreenController;
