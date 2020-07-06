/* eslint-disable no-console */
import { nanoid } from 'nanoid';

import IAbstarct from '../interface';
import Citizen from '../bots/citizens';
import Rednecks from '../bots/rednecks';

import TaxiCar from '../cars/taxi';
import PoliceCar from '../cars/police';
import RacingCar from '../cars/racing-car';

import Pistol from '../weapons/pistol';
import MachineGun from '../weapons/machine gun';
import Chaingun from '../weapons/chaingun';

import Map from '../map';
import Player from '../player';

class Interactions extends IAbstarct {
  static id = nanoid();

  create(scene, interactionMap) {
    this.interactionMap = interactionMap;
    this.carContainer = scene.add.container();

    const citizen = interactionMap[Citizen.id].object;
    const rednecks = interactionMap[Rednecks.id].object;

    this.taxiCar = interactionMap[TaxiCar.id];
    this.policeCar = interactionMap[PoliceCar.id];
    this.racingCar = interactionMap[RacingCar.id];
    this.allCars = [this.policeCar, this.racingCar, this.taxiCar];

    this.pistol = interactionMap[Pistol.id];
    this.machineGun = interactionMap[MachineGun.id];
    this.chaingun = interactionMap[Chaingun.id];

    const map = interactionMap[Map.id].object;
    this.player = interactionMap[Player.id];

    scene.physics.add.collider(this.player.object, [
      citizen,
      rednecks,
      this.taxiCar.object,
      this.policeCar.object,
      this.racingCar.object,
      map,
    ]);

    scene.physics.add.collider(this.player.object, this.pistol.object, () => {
      this.player.state.currentWeapon = this.player.WEAPONS.pistol;
      interactionMap[Pistol.id].object.destroy();
      this.player.state.ammo += interactionMap[Pistol.id].state.ammo;
    });
    scene.physics.add.collider(
      this.player.object,
      this.machineGun.object,
      () => {
        this.player.state.currentWeapon = this.player.WEAPONS.machineGun;
        interactionMap[MachineGun.id].object.destroy();
        this.player.state.ammo += interactionMap[MachineGun.id].state.ammo;
      },
    );
    scene.physics.add.collider(this.player.object, this.chaingun.object, () => {
      this.player.state.currentWeapon = this.player.WEAPONS.chaingun;
      interactionMap[Chaingun.id].object.destroy();
      this.player.state.ammo += interactionMap[Chaingun.id].state.ammo;
    });

    this.allCars.forEach((car) => {
      scene.physics.add.collider(car.object, [citizen, rednecks, map], () => {
        // урон ботам когда на них наезжают
      });
      scene.physics.add.collider(
        car.object,
        this.allCars.reduce((acc, currCar) => {
          acc.push(currCar.object);
          return acc;
        }, []),
        () => {
          // урон машинам при аварии
        },
      );
    });
  }

  update(scene) {
    // console.log(this.bullet);

    this.actionsWithPlayer(scene);
  }

  getClosestCar(arrayOfCars) {
    let closestCar;

    const arrayOfDiffX = arrayOfCars.reduce((acc, car) => {
      acc.push(Math.abs(this.player.object.x - car.object.x));
      return acc;
    }, []);
    const arrayOfDiffY = arrayOfCars.reduce((acc, car) => {
      acc.push(Math.abs(this.player.object.y - car.object.y));
      return acc;
    }, []);
    let minDiff = arrayOfDiffX[0] + arrayOfDiffY[0];
    for (let i = 0; i < arrayOfCars.length; i++) {
      const currentDiff = arrayOfDiffX[i] + arrayOfDiffY[i];
      if (currentDiff <= minDiff) {
        minDiff = currentDiff;
        closestCar = arrayOfCars[i];
      }
    }
    return closestCar;
  }

  isCarClose(car) {
    if (
      car.x + 100 < this.player.object.x
      || car.x - 100 > this.player.object.x
    ) {
      return false;
    }
    if (
      car.y + 100 < this.player.object.y
      || car.y - 100 > this.player.object.y
    ) {
      return false;
    }
    return true;
  }

  changePosition() {
    this.state.isInsideCar = true;
  }

  changeCurrentCar(car) {
    if (car === undefined) {
      return true;
    }
    this.player.currentCar = car;
    return true;
  }

  actionsWithPlayer(scene) {
    // cars
    this.player.closestCar = this.getClosestCar(this.allCars);

    if (
      this.player.controller.doAction.isDown
      && !this.player.state.isInsideCar
      && this.changeCurrentCar(this.player.closestCar)
      && this.isCarClose(this.player.currentCar.object)
    ) {
      this.player.object.body.enable = false;
      this.carContainer.add(this.player.object);
      this.player.currentCar.state.isPlayerInside = true;
      scene.cameras.main.startFollow(this.player.currentCar.object);
      setTimeout(this.changePosition.bind(this.player), 1000);
      this.player.currentCar.object.setImmovable(false);
    }

    if (
      this.player.controller.doAction.isDown
      && this.player.state.isInsideCar
    ) {
      this.player.object.body.enable = true;
      this.player.object = this.carContainer.getAt(0);
      this.carContainer.removeAll();
      this.player.currentCar.state.isPlayerInside = false;
      scene.add.existing(this.player.object);
      scene.cameras.main.startFollow(this.player.object);
      this.player.object.x = this.player.currentCar.object.x + 100;
      this.player.object.y = this.player.currentCar.object.y + 100;
      this.player.state.isInsideCar = false;
    }

    // weapons
    if (
      this.player.controller.doMainAttack.isDown
      && this.player.state.ammo
      && !this.player.state.isShooting
    ) {
      this.player.state.isShooting = true;

      switch (this.player.state.currentWeapon) {
        case this.player.WEAPONS.pistol:
          this.player.object.anims.play(
            this.player.animations.pistol.key,
            true,
          );
          Pistol.shooting(scene, this.player, this.interactionMap);
          setTimeout(() => {
            this.player.state.isShooting = false;
          }, 500);
          break;
        case this.player.WEAPONS.machineGun:
          this.player.object.anims.play(
            this.player.animations.machineGun.key,
            true,
          );
          MachineGun.shooting(scene, this.player, this.interactionMap);
          setTimeout(() => {
            this.player.state.isShooting = false;
          }, 250);
          break;
        case this.player.WEAPONS.chaingun:
          this.player.object.anims.play(
            this.player.animations.chaingunShoot.key,
            true,
          );
          Chaingun.shooting(scene, this.player, this.interactionMap);
          setTimeout(() => {
            this.player.state.isShooting = false;
          }, 50);
          break;
        default:
          break;
      }
    }
  }
}

export default Interactions;
