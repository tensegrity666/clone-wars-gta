import { nanoid } from 'nanoid';

import IAbstarct from '../interface';
import Citizen from '../../components/bots/citizen';
import Player from '../../components/player';

class Interaction extends IAbstarct {
  static id = nanoid();

  create(scene, interactionMap) {
    this.citizen = interactionMap[Citizen.id].object;
    this.player = interactionMap[Player.id].object;

    console.log(interactionMap[Player.id].object);

    scene.physics.add.collider(this.player, this.citizen);
  }
}

export default Interaction;
