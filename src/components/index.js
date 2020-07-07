import Map from './map';
import Player from './player';
import Interactions from './interactions';
import Ways from './ways';

import Pistol from './weapons/pistol';
import MachineGun from './weapons/machine gun';
import Chaingun from './weapons/chaingun';

import Bullet from './weapons/bullet';
import PoliceCar from './cars/police';
import TaxiCar from './cars/taxi';
import RacingCar from './cars/racing-car';
import Citizens from './bots/citizens';
import Rednecks from './bots/rednecks';
import BlueCar from './cars/blue-car';
import OrangeCar from './cars/orange-car';
import Car from './cars';

import ScreenController from './screen-controller';

const features = [
  Car,
  PoliceCar,
  TaxiCar,
  RacingCar,
  BlueCar,
  OrangeCar,
  Citizens,
  Rednecks,
  Player,
  Map,
  Bullet,
  Pistol,
  ScreenController,
  Chaingun,
  MachineGun,
  Interactions,
  Ways,
];
const featuresId = [];

const featuresMap = features.reduce((acc, FeatureCreater) => {
  acc[FeatureCreater.id] = new FeatureCreater();
  featuresId.push(FeatureCreater.id);
  return acc;
}, {});

export { featuresMap, featuresId };
