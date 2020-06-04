import Phaser from 'phaser';

import Example from '../feature/test';


export default class MainScene extends Phaser.Scene {
  constructor() {
    super('game-scene');

    this.example = new Example();
  }

  preload() {
    this.example.preload(this);
  }

  create() {
    this.example.create(this);
  }
}
