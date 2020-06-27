import Map from './map';
import Player from './player';
import Pistol from './weapons/pistol';
import MachineGun from './weapons/machine gun';
import Chaingun from './weapons/chaingun';
// import Bullet from './weapons/bullet';
import Car from './cars/standard';
import PoliceCar from './cars/police';
import TaxiCar from './cars/taxi';
import RacingCar from './cars/racing car';
import Citizens from './bots/citizens';
import Rednecks from './bots/rednecks';
import Interactions from './interactions';

const features = [
  Car,
  Citizens,
  Rednecks,
  PoliceCar,
  TaxiCar,
  RacingCar,
  Player,
  Map,
  Pistol,
  Chaingun,
  MachineGun,
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
