/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */

import Phaser from 'phaser';
import IAbstarct from '../interface';

const bomb = '../../assets/bomb.png';
const playerImg = '../../assets/player_walk.png';
const playerRunImg = '../../assets/player_run.png';
const aimImg = '../../assets/aim.png';
const playerShootPistolImg = '../../assets/player_pistol.png';
const playerWithChainGunImg = '../../assets/player_chaingun.png';
const playerShootChainGunImg = '../../assets/player_chaingun_shoot.png';

let controller;
let bullet;
const speedPlayer = 160;
let aim;

class Player extends IAbstarct {
  static id = 'player';

  state = {
    isRunning: false,
    isShooting: false,
    hp: 100,
  };

  preload(scene) {
    scene.load.image('bullet', bomb);
    scene.load.image('aim', aimImg);

    scene.load.spritesheet('player', playerImg, {
      frameWidth: 35,
      frameHeight: 57,
    });

    scene.load.spritesheet('player_run', playerRunImg, {
      frameWidth: 80,
      frameHeight: 87,
    });

    scene.load.spritesheet('player_shoot_pistol', playerShootPistolImg, {
      frameWidth: 60,
      frameHeight: 60,
    });

    scene.load.spritesheet('player_with_chaingun', playerWithChainGunImg, {
      frameWidth: 54,
      frameHeight: 32,
    });

    scene.load.spritesheet('player_shoot_chaingun', playerShootChainGunImg, {
      frameWidth: 53,
      frameHeight: 30,
    });
  }

  create(scene, featuresMap) {
    scene.input.mouse.disableContextMenu();

    scene.add.image(700, 300, 'sky').setScale(3);

    this.object = scene.physics.add.sprite(2100, 3350, 'player').setDepth(1);
    this.object.setCollideWorldBounds(true);

    aim = scene.physics.add.sprite(0, 0, 'aim');

    scene.anims.create({
      key: 'walking',
      frames: scene.anims.generateFrameNumbers('player', {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: 'stand',
      frames: scene.anims.generateFrameNumbers('player', {
        start: 0,
        end: 0,
      }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: 'run',
      frames: scene.anims.generateFrameNumbers('player_run', {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });

    scene.anims.create({
      key: 'shoot_pistol',
      frames: scene.anims.generateFrameNumbers('player_shoot_pistol', {
        start: 0,
        end: 0,
      }),
    });

    scene.anims.create({
      key: 'stand_chaingun',
      frames: scene.anims.generateFrameNumbers('player_with_chaingun', {
        start: 0,
        end: 0,
      }),
    });

    scene.anims.create({
      key: 'shoot_chaingun',
      frames: scene.anims.generateFrameNumbers('player_shoot_chaingun', {
        start: 0,
        end: 1,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Get keys object
    controller = {
      keyObjLeft: scene.input.keyboard.addKey('A'),
      keyObjRight: scene.input.keyboard.addKey('D'),
      keyObjUp: scene.input.keyboard.addKey('W'),
      keyObjDown: scene.input.keyboard.addKey('S'),
      keyObjRun: scene.input.keyboard.addKey('SPACE'),
      keyObjAction: scene.input.keyboard.addKey('ENTER'),
    };

    scene.cameras.main.setZoom(0.6);
    scene.cameras.main.zoomTo(1, 550);
    scene.cameras.main.startFollow(this.object);
  }

  update(scene) {
    const pointer = scene.input.activePointer;

    if (controller.keyObjLeft.isDown && !this.state.isRunning) {
      this.object.setVelocityX(-speedPlayer);
      this.object.anims.play('walking', true);
      this.object.rotation = 3.14;
    }

    if (controller.keyObjRight.isDown && !this.state.isRunning) {
      this.object.setVelocityX(speedPlayer);
      this.object.anims.play('walking', true);
      this.object.rotation = 0;
    }

    if (controller.keyObjUp.isDown && !this.state.isRunning) {
      if (controller.keyObjRight.isDown) {
        this.object.rotation = -0.75;
      } else if (controller.keyObjLeft.isDown) {
        this.object.rotation = (Math.PI * 5) / 4;
      } else {
        this.object.rotation = -Math.PI / 2;
      }
      this.object.setVelocityY(-speedPlayer);
      this.object.anims.play('walking', true);
    }

    if (controller.keyObjDown.isDown && !this.state.isRunning) {
      if (controller.keyObjRight.isDown) {
        this.object.rotation = Math.PI / 4;
      } else if (controller.keyObjLeft.isDown) {
        this.object.rotation = 2.5;
      } else {
        this.object.rotation = Math.PI / 2;
      }
      this.object.setVelocityY(speedPlayer);
      this.object.anims.play('walking', true);
    }

    if (
      !controller.keyObjLeft.isDown
      && !controller.keyObjRight.isDown
      && !controller.keyObjUp.isDown
      && !controller.keyObjDown.isDown
    ) {
      this.object.anims.play('stand');
    }

    if (!controller.keyObjLeft.isDown && !controller.keyObjRight.isDown) {
      this.object.setVelocityX(0);
    }
    if (!controller.keyObjUp.isDown && !controller.keyObjDown.isDown) {
      this.object.setVelocityY(0);
    }

    if (controller.keyObjRun.isDown) {
      this.state.isRunning = true;
      if (this.object.body.velocity.x > 0) {
        this.object.setVelocityX(speedPlayer * 2);
      }
      if (this.object.body.velocity.x < 0) {
        this.object.setVelocityX(-speedPlayer * 2);
      }
      if (this.object.body.velocity.y > 0) {
        this.object.setVelocityY(speedPlayer * 2);
      }
      if (this.object.body.velocity.y < 0) {
        this.object.setVelocityY(-speedPlayer * 2);
      }
      this.object.anims.play('run', true);

      scene.cameras.main.zoomTo(0.95, 250);
    }

    if (controller.keyObjRun.isUp) {
      this.state.isRunning = false;
      scene.cameras.main.zoomTo(1, 150);
    }

    // SHOOTING
    if (pointer.rightButtonDown()) {
      this.state.isShooting = true;
      aim.x = pointer.x;
      aim.y = pointer.y;
      // player.anims.play('shoot_pistol', true);
      this.object.anims.play('stand_chaingun', true);

      const angle = Phaser.Math.Angle.Between(
        this.object.x,
        this.object.y,
        scene.input.x,
        scene.input.y,
      );
      this.object.setRotation(angle);

      if (pointer.leftButtonDown()) {
        console.log(this.object.rotation);

        // scene.cameras.main.shake(); ВЗРЫВ

        this.object.anims.play('shoot_chaingun', true);
        bullet = scene.physics.add.sprite(
          this.object.x + 30,
          this.object.y,
          'bullet',
        );
        scene.physics.moveTo(bullet, pointer.x, pointer.y, 1000);
      }
    }
    if (!pointer.rightButtonDown()) {
      // aim.disableInteractive();
      aim.x = 0;
      aim.y = 0;
    }

    // show HP
  }
}

export default Player;
