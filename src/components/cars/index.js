/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import IAbstarct from '../interface';

import PARAMS from './constants';

class Car extends IAbstarct {
  static id = nanoid();

  state = {
    health: 100,
    isPlayerInside: false,
    speed: 0,
  };

  preload(scene) {}

  create(scene, featureMap) {}

  update(scene) {}
}

export default Car;
