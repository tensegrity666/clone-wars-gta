import IAbstarct from '..';
import ScoreLabel from './score-label';

const EXAMPLE_TEXT_STYLE = {
  fontFamily: 'PT Sans',
  fontSize: '32px',
  fill: '#000',
};

const EXAMPLE_POSITION = {
  x: 600,
  y: 150,
};

const VALUE = 0;

class ExampleTwo extends IAbstarct {
  create(scene) {
    const style = EXAMPLE_TEXT_STYLE;
    const label = new ScoreLabel(
      scene,
      EXAMPLE_POSITION.x,
      EXAMPLE_POSITION.y,
      VALUE,
      style,
    );

    scene.add.existing(label);
  }
}

export default ExampleTwo;
