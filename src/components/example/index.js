import uniqid from 'uniqid';

import IAbstarct from '..';

const TEST_PARAMS = {
  url: '../assets/example/sky.png',
  x: 600,
  y: 400,
};

class Example extends IAbstarct {
  static id = uniqid('exmpl-');

  preload(scene) {
    scene.load.image(this.constructor.id, TEST_PARAMS.url);
  }

  create(scene) {
    scene.add.image(TEST_PARAMS.x, TEST_PARAMS.y, this.constructor.id);
  }
}

export default Example;
