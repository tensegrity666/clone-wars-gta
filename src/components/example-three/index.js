import uniqid from 'uniqid';
import Phaser from 'phaser';

import IAbstarct from '..';

const TEST_PARAMS = {
  url: '../assets/example/star.png',
  bounceMin: 0.4,
  bounceMax: 0.8,
};

/* Или вынести в константы, или оставить статическим свойством
const STARS_PROPS = {
  key: uniqid('exmpl-'),
  repeat: 11,
  setXY: { x: 12, y: 0, stepX: 70 },
};
*/


class ExampleThree extends IAbstarct {
  static props = {
    key: uniqid('exmpl-'),
    repeat: 11,
    setXY: { x: 210, y: 0, stepX: 70 },
  }

  preload(scene) {
    scene.load.image(this.constructor.props.key, TEST_PARAMS.url);
  }

  create(scene) {
    const stars = this.createStars(scene);
    return stars;
  }

  createStars(scene) {
    const stars = scene.physics.add.group(this.constructor.props);

    stars.children.iterate((child) => {
      child.setBounceY(
        Phaser.Math.FloatBetween(TEST_PARAMS.bounceMin, TEST_PARAMS.bounceMin),
      );
    });

    return stars;
  }
}

export default ExampleThree;
