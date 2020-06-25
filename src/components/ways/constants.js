import { nanoid } from 'nanoid';

// prettier-ignore
const PARAMS = {
  id: nanoid(),
  WAYPOINTS: {
    bigCircle: [
      5200, 6560, 5300, 6560, 5700, 6550, 6000, 6550, 6400, 6540,
      6400, 6310, 6400, 6020, 6420, 5600,
      6500, 5550, 6900, 5540, 7080, 5550, 7580, 5560,
      7580, 5150, 7580, 4780,
      7100, 4780, 6400, 4780, 5550, 4780, 5150, 4780, 5050,
      5080, 5050, 5480, 5060, 5880, 5050, 6300, 5030, 6480, 5060, 6550, 5200, 6560,
    ],
    square: [
      6650, 8320, 7400, 8350, 8800, 8300, 9200, 8300,
      9650, 8300, 9660, 7300, 9670, 6000,
      9670, 5600, 9000, 5600, 8000, 5600, 7500, 5600, 7000, 5650,
      6440, 5700, 6420, 6500, 6440, 7000, 6400, 8000,
      6400, 8250, 6500, 8300, 6650, 8320,
    ],
    zigzag: [
      8450, 5750,
      8450, 6450, 8450, 7000,
      8050, 7000, 7450, 7100,
      7450, 8300, 7100, 8300, 6800, 8300,
      6400, 8200, 6450, 6500,
      6450, 5670, 7500, 5600, 8000, 5580, 8300, 5540, 8450, 5750,
    ],
    carWay1: [
      5178, 4770, 5053, 4943,
      5035, 5324, 5071, 5837, 5055, 6331,
      5082, 6466, 5178, 6478, 5508, 6436,
      6222, 6433, 7553, 6433,
      7518, 5419,
      7525, 4882, 7510, 4807, 7392, 4762,
      6741, 4756, 5178, 4770,
    ],
    carWay2: [2932, 2375, 4036, 2387, 5223, 2384, 5371, 2492,
      5371, 3050, 5246, 3185, 4317, 3188, 4026, 3395,
      4048, 4261, 3847, 4387, 2857, 4386, 2761, 4203,
      2785, 3449, 2770, 2504, 2932, 2375,
    ],
    carWay3: [
      3328, 7181, 3106, 7367, 3130, 7769, 3346, 7856,
      4828, 7844, 5706, 7838, 5868, 7682, 5860, 7313,
      5602, 7175, 4850, 7202, 4739, 7031, 4730, 6683,
      5084, 6569, 6287, 6523, 7500, 6523,
      7574, 6280, 7584, 5623, 7536, 4912,
      7245, 4759, 5964, 4756, 5216, 4761,
      5021, 4983, 5031, 6318, 4939, 6448,
      4648, 6697, 4662, 7024, 4530, 7168,
      3884, 7182, 3328, 7181,
    ],
    carWay4: [
      1057, 929, 1057, 1772, 1039, 2887,
      1123, 3112, 1113, 3790, 1116, 4828,
      1122, 5973, 1119, 7056, 1124, 7898,
      1130, 9001, 995, 9115, 731, 9109,
      674, 9145, 749, 9172, 1109, 9172,
      1181, 8989, 1178, 7360, 1175, 6017,
      1184, 4895, 1181, 3071, 1103, 2902,
      1109, 1676, 1105, 926, 1300, 857,
      2275, 848, 4358, 839, 4462, 750,
      4492, 536, 4345, 497, 3319, 485,
      3271, 725, 3145, 794, 2431, 788,
      1080, 794, 1057, 929,
    ],
    carWay5: [
      4093, 823, 5290, 853, 6024, 862,
      7341, 853, 8484, 856, 9373, 865,
      10912, 844, 10984, 973, 10981, 2011,
      10995, 2660, 10848, 2732, 9486, 2720,
      8196, 2720, 7653, 2720, 7543, 2851,
      7540, 3112, 7327, 3181, 6227, 3171,
      5441, 3177, 5399, 2964, 5388, 2505,
      5286, 2352, 4575, 2334, 4047, 2337,
      3985, 2180, 3976, 935, 4093, 823,
    ],
    carWay6: [
      7719, 2814, 9369, 2826, 10683, 2829,
      11385, 2823, 11501, 2922, 11510, 3885,
      11522, 4909, 11759, 5008, 12302, 4994,
      12404, 5126, 12397, 5817, 12391, 6888,
      11986, 6945, 10897, 6939, 10834, 6615,
      10846, 5904, 10840, 5358, 10708, 5211,
      10384, 5220, 10330, 5016, 10294, 4370,
      10117, 4310, 9061, 4307, 7713, 4317,
      7632, 4227, 7638, 3519, 7635, 2895,
      7719, 2814,
    ],
  },
};

export default PARAMS;
