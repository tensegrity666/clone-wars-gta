/* eslint-disable no-param-reassign */
import { nanoid } from 'nanoid';

import IAbstarct from '../interface';
import Citizen from '../bots/citizens';
import Rednecks from '../bots/rednecks';

import TaxiCar from '../cars/taxi';
import PoliceCar from '../cars/police';
import RacingCar from '../cars/racing-car';
import Car from '../cars';

import Pistol from '../weapons/pistol';
import MachineGun from '../weapons/machine gun';
import Chaingun from '../weapons/chaingun';
import Bullet from '../weapons/bullet';

import { PARAMS } from './constants';

import Map from '../map';
import Player from '../player';

class Interactions extends IAbstarct {
  static id = nanoid();

  preload(scene) {
    const sprites = Object.values(PARAMS.IMAGES.WEAPONS);

    sprites.forEach((sprite) => {
      scene.load.spritesheet(sprite.id, sprite.img, sprite.frameSize);
    });
  }

  create(scene, interactionMap) {
    // eslint-disable-next-line prefer-destructuring
    this.sceneUI = scene.game.scene.scenes[4];
    const map = interactionMap[Map.id].object;
    this.player = interactionMap[Player.id];

    this.score = this.sceneUI.add.text(
      150,
      20,
      `score: ${this.player.state.score}`,
      { fontSize: '32px', fill: '#fff' },
    );
    this.health = this.sceneUI.add.text(
      150,
      50,
      `health: ${this.player.state.health}`,
      { fontSize: '32px', fill: '#fff' },
    );
    this.ammo = this.sceneUI.add.text(
      150,
      80,
      `ammo: ${this.player.state.ammo}`,
      { fontSize: '32px', fill: '#fff' },
    );

    this.interactionMap = interactionMap;
    this.carContainer = scene.add.container();
    this.citizen = interactionMap[Citizen.id];
    this.rednecks = interactionMap[Rednecks.id];

    this.taxiCar = interactionMap[TaxiCar.id];
    this.policeCar = interactionMap[PoliceCar.id];
    this.racingCar = interactionMap[RacingCar.id];
    this.car = interactionMap[Car.id];
    this.allCars = [this.car, this.policeCar, this.racingCar, this.taxiCar];

    this.bullet = interactionMap[Bullet.id];
    this.pistol = interactionMap[Pistol.id];
    this.machineGun = interactionMap[MachineGun.id];
    this.chaingun = interactionMap[Chaingun.id];

    scene.physics.add.collider(this.player.object, [
      this.citizen.object,
      this.rednecks.object,
      this.car.object,
      this.taxiCar.object,
      this.policeCar.object,
      this.racingCar.object,
      map,
    ]);

    scene.physics.add.collider(this.player.object, this.pistol.object, () => {
      this.player.state.currentWeapon = this.player.WEAPONS.pistol;
      interactionMap[Pistol.id].object.destroy();
      this.player.state.ammo = interactionMap[Pistol.id].state.ammo;
      if (this.player.state.currentWeaponIcon) {
        this.player.state.currentWeaponIcon.destroy(this.sceneUI);
      }
      this.player.state.currentWeaponIcon = this.sceneUI.add
        .image(220, 150, PARAMS.IMAGES.WEAPONS.pistol.id)
        .setScale(0.2);
    });
    scene.physics.add.collider(
      this.player.object,
      this.machineGun.object,
      () => {
        this.player.state.currentWeapon = this.player.WEAPONS.machineGun;
        interactionMap[MachineGun.id].object.destroy();
        this.player.state.ammo = interactionMap[MachineGun.id].state.ammo;
        if (this.player.state.currentWeaponIcon) {
          this.player.state.currentWeaponIcon.destroy(this.sceneUI);
        }
        this.player.state.currentWeaponIcon = this.sceneUI.add
          .image(220, 150, PARAMS.IMAGES.WEAPONS.machineGun.id)
          .setScale(0.2);
      },
    );
    scene.physics.add.collider(this.player.object, this.chaingun.object, () => {
      this.player.state.currentWeapon = this.player.WEAPONS.chaingun;
      interactionMap[Chaingun.id].object.destroy();
      this.player.state.ammo = interactionMap[Chaingun.id].state.ammo;
      if (this.player.state.currentWeaponIcon) {
        this.player.state.currentWeaponIcon.destroy(this.sceneUI);
      }
      this.player.state.currentWeaponIcon = this.sceneUI.add
        .image(220, 150, PARAMS.IMAGES.WEAPONS.chaingun.id)
        .setScale(0.2);
    });

    this.allCars.forEach((car) => {
      scene.physics.add.collider(
        car.object,
        [this.citizen.object, this.citizen.rednecks, map],
        () => {
          // урон ботам когда на них наезжают
        },
      );
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

  actionsWithUI() {
    this.score.setText(`score: ${this.player.state.score}`);
    this.health.setText(`health: ${this.player.state.health}`);
    this.ammo.setText(`ammo: ${this.player.state.ammo}`);
  }

  actionWithBulletsAndCars(bullet, car) {
    bullet.destroy();
    car.state.health -= 15;
  }

  actionsWithBullets(scene, interactionMap) {
    if (this.bullet.newBullet) {
      // cars
      scene.physics.add.collider(this.bullet.newBullet, this.car.object, () => {
        this.actionWithBulletsAndCars(this.bullet.newBullet, this.car);
      });
      scene.physics.add.collider(
        this.bullet.newBullet,
        this.policeCar.object,
        () => {
          this.actionWithBulletsAndCars(this.bullet.newBullet, this.policeCar);
        },
      );
      scene.physics.add.collider(
        this.bullet.newBullet,
        this.racingCar.object,
        () => {
          this.actionWithBulletsAndCars(this.bullet.newBullet, this.racingCar);
        },
      );
      scene.physics.add.collider(
        this.bullet.newBullet,
        this.taxiCar.object,
        () => {
          this.actionWithBulletsAndCars(this.bullet.newBullet, this.taxiCar);
        },
      );

      // map
      scene.physics.add.collider(
        this.bullet.newBullet,
        interactionMap[Map.id].object,
        () => {
          this.bullet.newBullet.destroy();
        },
      );

      // citizens
      scene.physics.add.collider(
        this.bullet.newBullet,
        this.citizen.object,
        () => {
          this.bullet.newBullet.destroy();
        },
      );
      scene.physics.add.collider(
        this.bullet.newBullet,
        this.rednecks.object,
        () => {
          this.bullet.newBullet.destroy();
        },
      );
    }
  }

  update(scene, interactionMap) {
    this.actionsWithBullets(scene, interactionMap);
    this.actionsWithPlayer(scene);
    this.actionsWithUI();
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
