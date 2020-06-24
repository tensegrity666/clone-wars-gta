/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import IAbstarct from '../interface';

import {
  PARAMS, MOVING_PARAMS, controlKeys, WEAPONS,
} from './constants';
import Car from '../cars';
import Pistol from '../weapons/pistol';
import MachineGun from '../weapons/machine gun';
import Chaingun from '../weapons/chaingun';

class Player extends IAbstarct {
  static id = nanoid();

  state = {
    isRunning: false,
    isShooting: false,
    health: 100,
    ammo: 0,
    currentWeapon: '',
  };

  preload(scene) {
    const sprites = Object.values(PARAMS.IMAGES.PLAYER);

    sprites.forEach((sprite) => {
      scene.load.spritesheet(sprite.id, sprite.img, sprite.frameSize);
    });
  }

  create(scene, featureMap) {
    this.featureMap = featureMap;
    this.pistol = featureMap[Pistol.id];
    this.machineGun = featureMap[MachineGun.id];
    this.chaingun = featureMap[Chaingun.id];
    this.car = featureMap[Car.id].object;

    this.object = scene.physics.add
      .sprite(...PARAMS.INITIAL_COORDINATES, this.constructor.id)
      .setDepth(1);

    this.object.setCollideWorldBounds(true);
    scene.physics.add.collider(this.object, this.car);

    scene.physics.add.collider(this.object, this.pistol.object, () => {
      this.state.currentWeapon = WEAPONS.pistol;
      featureMap[Pistol.id].object.destroy();
      this.state.ammo += featureMap[Pistol.id].state.ammo;
    });
    scene.physics.add.collider(this.object, this.machineGun.object, () => {
      this.state.currentWeapon = WEAPONS.machineGun;
      featureMap[MachineGun.id].object.destroy();
      this.state.ammo += featureMap[Pistol.id].state.ammo;
    });
    scene.physics.add.collider(this.object, this.chaingun.object, () => {
      this.state.currentWeapon = WEAPONS.chaingun;
      featureMap[Chaingun.id].object.destroy();
      this.state.ammo += featureMap[Chaingun.id].state.ammo;
    });

    scene.cameras.main.setZoom(0.6);
    scene.cameras.main.zoomTo(1, 550);
    scene.cameras.main.startFollow(this.object);

    this.addAnimation(scene);
  }

  update(scene) {
    this.actionsWithPlayer(scene);
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
      machineGun: {
        key: 'shoot_machinegun',
        frames: scene.anims.generateFrameNumbers(
          PARAMS.IMAGES.PLAYER.machineGun.id,
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

  actionsWithPlayer(scene) {
    if (this.state.health <= 0) {
      this.object.destroy();
    }

    this.controller = {
      moveUp: scene.input.keyboard.addKey(controlKeys.up),
      moveRight: scene.input.keyboard.addKey(controlKeys.rigth),
      moveDown: scene.input.keyboard.addKey(controlKeys.down),
      moveLeft: scene.input.keyboard.addKey(controlKeys.left),
      run: scene.input.keyboard.addKey(controlKeys.run),
      doMainAttack: scene.input.keyboard.addKey(controlKeys.attackMain),
      doAction: scene.input.keyboard.addKey(controlKeys.action),
    };

    if (this.controller.moveLeft.isDown && !this.state.isRunning) {
      this.object.setVelocityX(-MOVING_PARAMS.PLAYER_SPEED);
      this.object.anims.play(this.animations.walk.key, true);

      this.object.rotation = MOVING_PARAMS.ROTATION.rotate;
    }

    if (this.controller.moveRight.isDown && !this.state.isRunning) {
      this.object.setVelocityX(MOVING_PARAMS.PLAYER_SPEED);
      this.object.anims.play(this.animations.walk.key, true);

      this.object.rotation = MOVING_PARAMS.ROTATION.noRotate;
    }

    if (this.controller.moveUp.isDown && !this.state.isRunning) {
      if (this.controller.moveRight.isDown) {
        this.object.rotation = -0.75;
      } else if (this.controller.moveLeft.isDown) {
        this.object.rotation = (Math.PI * 5) / 4;
      } else {
        this.object.rotation = -(Math.PI / 2);
      }

      this.object.setVelocityY(-MOVING_PARAMS.PLAYER_SPEED);

      this.object.anims.play(this.animations.walk.key, true);
    }

    if (this.controller.moveDown.isDown && !this.state.isRunning) {
      if (this.controller.moveRight.isDown) {
        this.object.rotation = Math.PI / 4;
      } else if (this.controller.moveLeft.isDown) {
        this.object.rotation = 2.5;
      } else {
        this.object.rotation = Math.PI / 2;
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

    if (
      this.controller.doMainAttack.isDown
      && this.state.ammo
      && !this.state.isShooting
    ) {
      this.state.isShooting = true;

      switch (this.state.currentWeapon) {
        case WEAPONS.pistol:
          this.object.anims.play(this.animations.pistol.key, true);
          Pistol.shooting(scene, this, this.featureMap);
          setTimeout(() => {
            this.state.isShooting = false;
          }, 500);
          break;
        case WEAPONS.machineGun:
          this.object.anims.play(this.animations.machineGun.key, true);
          MachineGun.shooting(scene, this, this.featureMap);
          setTimeout(() => {
            this.state.isShooting = false;
          }, 250);
          break;
        case WEAPONS.chaingun:
          this.object.anims.play(this.animations.chaingunShoot.key, true);
          Chaingun.shooting(scene, this, this.featureMap);
          setTimeout(() => {
            this.state.isShooting = false;
          }, 50);
          break;
        default:
          break;
      }
    }
  }
}

export default Player;
