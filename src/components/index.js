import Map from './map';
import Player from './player';
import Car from './cars';
import Citizens from './bots/citizens';
import Rednecks from './bots/rednecks';
import Interactions from './interactions';

const features = [Car, Citizens, Rednecks, Player, Map, Interactions];
const featuresId = [];

const featuresMap = features.reduce((acc, FeatureCreater) => {
  acc[FeatureCreater.id] = new FeatureCreater();
  featuresId.push(FeatureCreater.id);
  return acc;
}, {});

export { featuresMap, featuresId };
