import Map from './map';
import Player from './player';
import Interactions from './interactions';

import Pistol from './weapons/pistol';
import MachineGun from './weapons/machine gun';
import Chaingun from './weapons/chaingun';
// import Bullet from './weapons/bullet';

import Citizens from './bots/citizens';
import Rednecks from './bots/rednecks';

import PoliceCar from './cars/police';
import TaxiCar from './cars/taxi';
import RacingCar from './cars/racing-car';

import ScreenController from './screen-controller';

const features = [
  PoliceCar,
  TaxiCar,
  RacingCar,
  Player,
  Map,
  Pistol,
  ScreenController,
  Chaingun,
  MachineGun,
  Citizens,
  Rednecks,
  // Bullet,
  Interactions,
];
const featuresId = [];

const featuresMap = features.reduce((acc, FeatureCreater) => {
  acc[FeatureCreater.id] = new FeatureCreater();
  featuresId.push(FeatureCreater.id);
  return acc;
}, {});

export { featuresMap, featuresId };
