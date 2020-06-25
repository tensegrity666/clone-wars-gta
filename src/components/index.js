import Map from './map';
import Player from './player';
import Car from './cars';
import Pistol from './weapons/pistol';
import MachineGun from './weapons/machine gun';
import Chaingun from './weapons/chaingun';
import Bullet from './weapons/bullet';

const features = [Car, Pistol, Chaingun, MachineGun, Bullet, Map, Player];
const featuresId = [];

const featuresMap = features.reduce((acc, FeatureCreater) => {
  acc[FeatureCreater.id] = new FeatureCreater();
  featuresId.push(FeatureCreater.id);
  return acc;
}, {});

export { featuresMap, featuresId };
