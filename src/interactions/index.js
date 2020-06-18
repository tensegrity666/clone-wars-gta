import Interaction from './player';

const interactions = [Interaction];

const interactionsId = [];

const interactionsMap = interactions.reduce((acc, InteractionCreater) => {
  acc[InteractionCreater.id] = new InteractionCreater();
  interactionsId.push(InteractionCreater.id);
  return acc;
}, {});

export { interactionsMap, interactionsId };
