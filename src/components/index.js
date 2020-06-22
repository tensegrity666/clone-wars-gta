import Map from './map';
import Player from './player';
import Car from './cars';
import Citizens from './bots/citizens';

const features = [Car, Citizens, Player, Map];
const featuresId = [];

const featuresMap = features.reduce((acc, FeatureCreater) => {
  acc[FeatureCreater.id] = new FeatureCreater();
  featuresId.push(FeatureCreater.id);
  return acc;
}, {});

export { featuresMap, featuresId };
