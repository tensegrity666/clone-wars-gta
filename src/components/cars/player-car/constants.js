import { nanoid } from 'nanoid';

const PARAMS = {
  id: nanoid(),
};

const controlKeys = {
  up: 'UP',
  down: 'DOWN',
  left: 'LEFT',
  rigth: 'RIGHT',
  stop: 'SPACE',
  attackMain: 'J',
  action: 'ENTER',
};

export { PARAMS, controlKeys };
