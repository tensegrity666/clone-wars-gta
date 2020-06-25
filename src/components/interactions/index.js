import { nanoid } from 'nanoid';

import IAbstarct from '../interface';
import Citizen from '../bots/citizens';
import Rednecks from '../bots/rednecks';
import Car from '../cars';
import Map from '../map';
import Player from '../player';

class Interactions extends IAbstarct {
  static id = nanoid();

  create(scene, interactionMap) {
    const citizen = interactionMap[Citizen.id].object;
    const rednecks = interactionMap[Rednecks.id].object;
    const car = interactionMap[Car.id].object;
    const map = interactionMap[Map.id].object;

    this.object = interactionMap[Player.id].object;

    scene.physics.add.collider(this.object, [citizen, rednecks, car, map]);
  }
}

export default Interactions;
