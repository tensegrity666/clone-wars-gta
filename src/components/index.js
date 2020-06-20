import Map from './map';
import Player from './player';
import Car from './cars';
import OrangeCar from './cars/orange-car';
import BlueCar from './cars/blue-car';
import Ways from './ways';

const features = [Car, Player, Map, OrangeCar, BlueCar, Ways];
const featuresId = [];

const featuresMap = features.reduce((acc, FeatureCreater) => {
  acc[FeatureCreater.id] = new FeatureCreater();
  featuresId.push(FeatureCreater.id);
  return acc;
}, {});

export { featuresMap, featuresId };
