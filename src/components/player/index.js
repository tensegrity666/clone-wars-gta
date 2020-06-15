/* eslint-disable no-unused-vars */

import Phaser from 'phaser';
import IAbstarct from '../interface';

const skyBg = '../../assets/sky.png';
const bomb = '../../assets/bomb.png';
const playerImg = '../../assets/player_walk.png';
const playerRunImg = '../../assets/player_run.png';
const playerShootPistolImg = '../../assets/player_pistol.png';
const playerWithChainGunImg = '../../assets/player_chaingun.png';
const playerShootChainGunImg = '../../assets/player_chaingun_shoot.png';

let player;
let controller;
let bullet;
const speedPlayer = 160;
// let worldBounds;

class Player extends IAbstarct {
  static get id() {
    return 'player';
  }

  constructor() {
    super();
    this.id = 'player';
  }

  state = {
    isRunning: false,
    isShooting: false,
    health: 100,
  }

  preload(scene, featureMap) {
    scene.load.image('sky', skyBg);
    scene.load.image('bullet', bomb);

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

  create(scene) {
    scene.input.mouse.disableContextMenu();
    // worldBounds = scene.physics.world.bounds;

    scene.add.image(700, 300, 'sky').setScale(3);

    player = scene.physics.add.sprite(scene.game.config.width / 2, scene.game.config.height / 2, 'player');
    player.setCollideWorldBounds(true);

    scene.physics.add.collider(player);

    scene.cameras.main.startFollow(player);

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
      keyObjAttack: scene.input.keyboard.addKey('J'),
    };
  }

  update(scene) {
    const pointer = scene.input.activePointer;

    if (controller.keyObjLeft.isDown && !this.state.isRunning) {
      player.setVelocityX(-speedPlayer);
      player.anims.play('walking', true);
      player.rotation = 3.14;
    }

    if (controller.keyObjRight.isDown && !this.state.isRunning) {
      player.setVelocityX(speedPlayer);
      player.anims.play('walking', true);
      player.rotation = 0;
    }

    if (controller.keyObjUp.isDown && !this.state.isRunning) {
      if (controller.keyObjRight.isDown) {
        player.rotation = -0.75;
      } else if (controller.keyObjLeft.isDown) {
        player.rotation = Math.PI * 5 / 4;
      } else {
        player.rotation = -Math.PI / 2;
      }
      player.setVelocityY(-speedPlayer);
      player.anims.play('walking', true);
    }

    if (controller.keyObjDown.isDown && !this.state.isRunning) {
      if (controller.keyObjRight.isDown) {
        player.rotation = Math.PI / 4;
      } else if (controller.keyObjLeft.isDown) {
        player.rotation = 2.5;
      } else {
        player.rotation = Math.PI / 2;
      }
      player.setVelocityY(speedPlayer);
      player.anims.play('walking', true);
    }

    if (
      !controller.keyObjLeft.isDown
      && !controller.keyObjRight.isDown
      && !controller.keyObjUp.isDown
      && !controller.keyObjDown.isDown
    ) {
      player.anims.play('stand');
    }

    if (!controller.keyObjLeft.isDown && !controller.keyObjRight.isDown) {
      player.setVelocityX(0);
    }
    if (!controller.keyObjUp.isDown && !controller.keyObjDown.isDown) {
      player.setVelocityY(0);
    }

    if (controller.keyObjRun.isDown) {
      this.state.isRunning = true;
      if (player.body.velocity.x > 0) {
        player.setVelocityX(speedPlayer * 2);
      }
      if (player.body.velocity.x < 0) {
        player.setVelocityX(-speedPlayer * 2);
      }
      if (player.body.velocity.y > 0) {
        player.setVelocityY(speedPlayer * 2);
      }
      if (player.body.velocity.y < 0) {
        player.setVelocityY(-speedPlayer * 2);
      }
      player.anims.play('run', true);
    }

    if (controller.keyObjRun.isUp) {
      this.state.isRunning = false;
    }

    // SHOOTING
    if (controller.keyObjAttack.isDown) {
      this.state.isShooting = true;
      player.anims.play('stand_chaingun', true);
      bullet = scene.physics.add.sprite(player.x + Math.cos(player.rotation) * 20, player.y + Math.sin(player.rotation) * 20, 'bullet');
      scene.physics.moveTo(bullet, player.x + Math.cos(player.rotation) * 1000, player.y + Math.sin(player.rotation) * 1000, 1000);
    }


    // show HP
  }
}

export default Player;
