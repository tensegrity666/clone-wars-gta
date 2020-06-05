import Phaser from 'phaser';

import Example from '../components/example';
import ExampleTwo from '../components/example-two';
import ExampleThree from '../components/example-three';
import ExampleFour from '../components/example-four';


export default class MainScene extends Phaser.Scene {
  constructor() {
    super('game-scene');

    this.example = new Example();

    this.exampleTwo = new ExampleTwo();
    this.exampleThree = new ExampleThree();
    this.exampleFour = new ExampleFour();
  }

  preload() {
    this.example.preload(this);

    this.exampleThree.preload(this);
    this.exampleFour.preload(this);
  }

  create() {
    this.example.create(this);
    this.exampleTwo.create(this);

    const stars = this.exampleThree.create(this);
    const platforms = this.exampleFour.create(this);

    this.physics.add.collider(stars, platforms);
  }
}
