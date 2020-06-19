import Map from './map';
import Player from './player';
import Car from './cars';
import Ways from './ways';

const features = [Car, Player, Map, Ways];
const featuresId = [];

const featuresMap = features.reduce((acc, FeatureCreater) => {
  acc[FeatureCreater.id] = new FeatureCreater();
  featuresId.push(FeatureCreater.id);
  return acc;
}, {});

export { featuresMap, featuresId };
