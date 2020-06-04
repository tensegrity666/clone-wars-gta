import IAbstarct from '..';

const TEST_URL = '../assets/sky.png';


class Example extends IAbstarct {
  constructor() {
    super();
    this.id = 'example';
  }

  preload(scene) {
    scene.load.image(this.id, TEST_URL);
  }

  create(scene) {
    scene.add.image(400, 300, this.id);
  }
}


export default Example;
