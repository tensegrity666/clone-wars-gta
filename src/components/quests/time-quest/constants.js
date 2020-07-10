import { nanoid } from 'nanoid';

import timeQuestStartIcon from '../assets/electron.png';
import timeQuestFinishIcon from '../assets/burning-hands.png';
import arrowIcon from '../assets/arrow.png';

const PARAMS = {
  INITIAL_COORDINATES_START: [6450, 6500],
  INITIAL_COORDINATES_FINISH: [6550, 7000],
  IMAGES: {
    TIME_QUEST_START_ICON: {
      id: nanoid(),
      img: timeQuestStartIcon,
      frameSize: { frameWidth: 64, frameHeight: 64 },
    },
    TIME_QUEST_FINISH_ICON: {
      id: nanoid(),
      img: timeQuestFinishIcon,
      frameSize: { frameWidth: 64, frameHeight: 64 },
    },
    ARROW_ICON: {
      id: nanoid(),
      img: arrowIcon,
      frameSize: { frameWidth: 512, frameHeight: 512 },
    },
  },
};

export default PARAMS;
