import uniqid from 'uniqid';

import IAbstarct from '..';

const TEST_PARAMS = {
  url: '../assets/example/platform.png',
  objOne: { x: 600, y: 700 },
  objTwo: { x: 400, y: 550 },
  objThree: { x: 800, y: 650 },
  objFour: { x: 800, y: 450 },
  objFive: { x: 700, y: 200 },
};

class ExampleFour extends IAbstarct {
  static id = uniqid('exmpl-');

  preload(scene) {
    scene.load.image(this.constructor.id, TEST_PARAMS.url);
  }

  create(scene) {
    const platforms = this.createPlatforms(scene);

    return platforms;
  }

  createPlatforms(scene) {
    const platforms = scene.physics.add.staticGroup();

    platforms.create(TEST_PARAMS.objOne.x, TEST_PARAMS.objOne.y, this.constructor.id)
      .setScale(2)
      .refreshBody();

    platforms.create(TEST_PARAMS.objTwo.x, TEST_PARAMS.objTwo.y, this.constructor.id);
    platforms.create(TEST_PARAMS.objThree.x, TEST_PARAMS.objThree.y, this.constructor.id);
    platforms.create(TEST_PARAMS.objFour.x, TEST_PARAMS.objFour.y, this.constructor.id);
    platforms.create(TEST_PARAMS.objFive.x, TEST_PARAMS.objFive.y, this.constructor.id);

    return platforms;
  }
}

export default ExampleFour;
