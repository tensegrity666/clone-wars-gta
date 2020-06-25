/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import IAbstarct from '../interface';

import { PARAMS, MOVING_PARAMS, controlKeys } from './constants';
import Car from '../cars/standard';
import RacingCar from '../cars/racing car';
import PoliceCar from '../cars/police';
import TaxiCar from '../cars/taxi';

class Player extends IAbstarct {
  static id = nanoid();

  state = {
    isRunning: false,
    isShooting: false,
    isInsideCar: false,
    health: 100,
  };

  preload(scene) {
    scene.load.image(
      PARAMS.IMAGES.BULLET.bomb.id,
      PARAMS.IMAGES.BULLET.bomb.img,
    );

    const sprites = Object.values(PARAMS.IMAGES.PLAYER);

    sprites.forEach((sprite) => {
      scene.load.spritesheet(sprite.id, sprite.img, sprite.frameSize);
    });
  }

  create(scene, featureMap) {
    this.carContainer = scene.add.container();
    this.car = featureMap[Car.id];
    this.policeCar = featureMap[PoliceCar.id];
    this.taxiCar = featureMap[TaxiCar.id];
    this.racingCar = featureMap[RacingCar.id];

    this.object = scene.physics.add
      .sprite(...PARAMS.INITIAL_COORDINATES, this.constructor.id)
      .setDepth(1)
      .setScale(0.7);

    this.object.body.setCircle(22.5, -4, 7);

    this.object.setCollideWorldBounds(true);
    scene.physics.add.collider(this.object, this.car.object);
    scene.physics.add.collider(this.object, this.policeCar.object);
    scene.physics.add.collider(this.object, this.taxiCar.object);
    scene.physics.add.collider(this.object, this.racingCar.object);

    scene.cameras.main.setZoom(0.6);
    scene.cameras.main.zoomTo(1, 550);
    scene.cameras.main.startFollow(this.object);

    this.addAnimation(scene);
  }

  update(scene, featureMap) {
    this.actionsWithPlayer(scene, featureMap);
  }

  addAnimation(scene) {
    this.animations = {
      stand: {
        key: 'stand',
        frames: scene.anims.generateFrameNumbers(PARAMS.IMAGES.PLAYER.walk.id, {
          start: 0,
          end: 0,
        }),
        frameRate: 10,
        repeat: -1,
      },
      walk: {
        key: 'walking',
        frames: scene.anims.generateFrameNumbers(PARAMS.IMAGES.PLAYER.walk.id, {
          start: 0,
          end: 5,
        }),
        frameRate: 10,
        repeat: -1,
      },
      run: {
        key: 'run',
        frames: scene.anims.generateFrameNumbers(PARAMS.IMAGES.PLAYER.run.id, {
          start: 0,
          end: 5,
        }),
        frameRate: 10,
        repeat: -1,
      },
      pistol: {
        key: 'shoot_pistol',
        frames: scene.anims.generateFrameNumbers(
          PARAMS.IMAGES.PLAYER.pistol.id,
          {
            start: 0,
            end: 0,
          },
        ),
      },
      chaingun: {
        key: 'stand_chaingun',
        frames: scene.anims.generateFrameNumbers(
          PARAMS.IMAGES.PLAYER.chaingun.id,
          {
            start: 0,
            end: 0,
          },
        ),
      },
      chaingunShoot: {
        key: 'shoot_chaingun',
        frames: scene.anims.generateFrameNumbers(
          PARAMS.IMAGES.PLAYER.chaingunShoot.id,
          {
            start: 0,
            end: 1,
          },
        ),
        frameRate: 10,
        repeat: -1,
      },
    };

    const animConfig = Object.values(this.animations);

    animConfig.forEach((a) => scene.anims.create(a));
  }

  getClosestCar(arrayOfCars) {
    let closestCar;

    const arrayOfDiffX = arrayOfCars.reduce((acc, car) => {
      acc.push(Math.abs(this.object.x - car.object.x));
      return acc;
    }, []);
    const arrayOfDiffY = arrayOfCars.reduce((acc, car) => {
      acc.push(Math.abs(this.object.y - car.object.y));
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
    if (car.x + 100 < this.object.x || car.x - 100 > this.object.x) {
      return false;
    }
    if (car.y + 100 < this.object.y || car.y - 100 > this.object.y) {
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
    this.currentCar = car;
    return true;
  }

  actionsWithPlayer(scene, featureMap) {
    this.cars = [this.car, this.policeCar, this.racingCar, this.taxiCar];
    this.closestCar = this.getClosestCar(this.cars);

    this.controller = {
      moveUp: scene.input.keyboard.addKey(controlKeys.up),
      moveRight: scene.input.keyboard.addKey(controlKeys.rigth),
      moveDown: scene.input.keyboard.addKey(controlKeys.down),
      moveLeft: scene.input.keyboard.addKey(controlKeys.left),
      run: scene.input.keyboard.addKey(controlKeys.run),
      doMainAttack: scene.input.keyboard.addKey(controlKeys.attackMain),
      doAction: scene.input.keyboard.addKey(controlKeys.action),
    };

    if (
      this.controller.doAction.isDown
      && !this.state.isInsideCar
      && this.changeCurrentCar(this.closestCar)
      && this.isCarClose(this.currentCar.object)
    ) {
      this.object.body.enable = false;
      this.carContainer.add(this.object);
      this.currentCar.state.isPlayerInside = true;
      scene.cameras.main.startFollow(this.currentCar.object);
      setTimeout(this.changePosition.bind(this), 1000);
    }

    if (this.controller.doAction.isDown && this.state.isInsideCar) {
      this.object.body.enable = true;
      this.object = this.carContainer.getAt(0);
      this.carContainer.removeAll();
      this.currentCar.state.isPlayerInside = false;
      scene.add.existing(this.object);
      scene.cameras.main.startFollow(this.object);
      this.object.x = this.currentCar.object.x + 100;
      this.object.y = this.currentCar.object.y + 100;
      this.state.isInsideCar = false;
    }

    if (this.controller.moveLeft.isDown && !this.state.isRunning) {
      this.object.setVelocityX(-MOVING_PARAMS.PLAYER_SPEED);
      this.object.anims.play(this.animations.walk.key, true);

      this.object.rotation = MOVING_PARAMS.ROTATION.rotateLeft;
    }

    if (this.controller.moveRight.isDown && !this.state.isRunning) {
      this.object.setVelocityX(MOVING_PARAMS.PLAYER_SPEED);
      this.object.anims.play(this.animations.walk.key, true);

      this.object.rotation = MOVING_PARAMS.ROTATION.rotateRight;
    }

    if (this.controller.moveUp.isDown && !this.state.isRunning) {
      if (this.controller.moveRight.isDown) {
        this.object.rotation = MOVING_PARAMS.ROTATION.rotateUpAndRight;
      } else if (this.controller.moveLeft.isDown) {
        this.object.rotation = MOVING_PARAMS.ROTATION.rotateUpAndLeft;
      } else {
        this.object.rotation = MOVING_PARAMS.ROTATION.rotateUp;
      }

      this.object.setVelocityY(-MOVING_PARAMS.PLAYER_SPEED);

      this.object.anims.play(this.animations.walk.key, true);
    }

    if (this.controller.moveDown.isDown && !this.state.isRunning) {
      if (this.controller.moveRight.isDown) {
        this.object.rotation = MOVING_PARAMS.ROTATION.rotateDownAndRight;
      } else if (this.controller.moveLeft.isDown) {
        this.object.rotation = MOVING_PARAMS.ROTATION.rotateDownAndLeft;
      } else {
        this.object.rotation = MOVING_PARAMS.ROTATION.rotateDown;
      }

      this.object.setVelocityY(MOVING_PARAMS.PLAYER_SPEED);

      this.object.anims.play(this.animations.walk.key, true);
    }

    if (
      !this.controller.moveLeft.isDown
      && !this.controller.moveRight.isDown
      && !this.controller.moveUp.isDown
      && !this.controller.moveDown.isDown
    ) {
      this.object.anims.play(this.animations.stand.key);
    }

    if (!this.controller.moveLeft.isDown && !this.controller.moveRight.isDown) {
      this.object.setVelocityX(0);
    }
    if (!this.controller.moveUp.isDown && !this.controller.moveDown.isDown) {
      this.object.setVelocityY(0);
    }

    if (this.controller.run.isDown) {
      this.state.isRunning = true;

      if (this.object.body.velocity.x > 0) {
        this.object.setVelocityX(
          MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF,
        );
      }
      if (this.object.body.velocity.x < 0) {
        this.object.setVelocityX(
          -(MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF),
        );
      }
      if (this.object.body.velocity.y > 0) {
        this.object.setVelocityY(
          MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF,
        );
      }
      if (this.object.body.velocity.y < 0) {
        this.object.setVelocityY(
          -(MOVING_PARAMS.PLAYER_SPEED * MOVING_PARAMS.SPEED_COF),
        );
      }
      this.object.anims.play(this.animations.run.key, true);
    }

    if (this.controller.run.isUp) {
      this.state.isRunning = false;
    }

    if (this.controller.doMainAttack.isDown) {
      this.state.isShooting = true;

      this.object.anims.play(this.animations.chaingunShoot.key, true);

      this.bullet = scene.physics.add.sprite(
        this.object.x + Math.cos(this.object.rotation) * 20,
        this.object.y + Math.sin(this.object.rotation) * 20,
        PARAMS.IMAGES.BULLET.bomb.id,
      );

      scene.physics.moveTo(
        this.bullet,
        this.object.x + Math.cos(this.object.rotation) * 1000,
        this.object.y + Math.sin(this.object.rotation) * 1000,
        1000,
      );
    }
  }
}

export default Player;
