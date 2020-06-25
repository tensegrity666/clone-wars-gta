import Map from './map';
import Player from './player';
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
  Interactions,
];

const featuresId = [];

const featuresMap = features.reduce((acc, FeatureCreater) => {
  acc[FeatureCreater.id] = new FeatureCreater();
  featuresId.push(FeatureCreater.id);
  return acc;
}, {});

export { featuresMap, featuresId };
