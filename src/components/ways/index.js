/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import IAbstarct from '../interface';

class Ways extends IAbstarct {
  static id = nanoid();

  preload(scene) {}

  create(scene, featureMap) {}

  update(scene) {}
}

export default Ways;
