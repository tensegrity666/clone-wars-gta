import { nanoid } from 'nanoid';

import IAbstarct from '../interface';
import PoliceCar from '../cars/police';
import Map from '../map';
import Player from '../player';

class Interactions extends IAbstarct {
  static id = nanoid();

  create(scene, interactionMap) {
    const car = interactionMap[PoliceCar.id].object;
    const map = interactionMap[Map.id].object;

    this.object = interactionMap[Player.id].object;

    scene.physics.add.collider(this.object, [car, map]);
  }
}

export default Interactions;
