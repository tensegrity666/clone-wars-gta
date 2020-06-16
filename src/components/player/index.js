/* eslint-disable no-unused-vars */

import { nanoid } from 'nanoid';

import IAbstarct from '../interface';

import { PARAMS, MOVING_PARAMS, controlKeys } from './constants';
import Car from '../cars';

class Player extends IAbstarct {
  static id = nanoid();

  state = {
    isRunning: false,
    isShooting: false,
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
    this.car = featureMap[Car.id].object;

    this.object = scene.physics.add
      .sprite(
        PARAMS.INITIAL_COORDINATES.x,
        PARAMS.INITIAL_COORDINATES.y,
        this.constructor.id,
      )
      .setDepth(1);

    this.object.setCollideWorldBounds(true);
    scene.physics.add.collider(this.object, this.car);
    // scene.physics.add.collider(this.bullet, this.car);

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
