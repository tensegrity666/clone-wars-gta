import Map from './map';
import Player from './player';
import Pistol from './weapons/pistol';
import PoliceCar from './cars/police';
import Interactions from './interactions';
import ScreenController from './screen-controller';

const features = [
  PoliceCar,
  Player,
  Map,
  Interactions,
  Pistol,
  ScreenController,
];
const featuresId = [];

const featuresMap = features.reduce((acc, FeatureCreater) => {
  acc[FeatureCreater.id] = new FeatureCreater();
  featuresId.push(FeatureCreater.id);
  return acc;
}, {});

export { featuresMap, featuresId };
