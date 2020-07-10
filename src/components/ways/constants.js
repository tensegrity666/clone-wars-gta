import { nanoid } from 'nanoid';

// // prettier-ignore
const PARAMS = {
  id: nanoid(),
  WAYPOINTS: {
    bigCircle: [
      5200 + 640,
      6560 + 640,
      5300 + 640,
      6560 + 640,
      5700 + 640,
      6550 + 640,
      6000 + 640,
      6550 + 640,
      6400 + 640,
      6540 + 640,
      6400 + 640,
      6310 + 640,
      6400 + 640,
      6020 + 640,
      6420 + 640,
      5600 + 640,
      6500 + 640,
      5550 + 640,
      6900 + 640,
      5540 + 640,
      7080 + 640,
      5550 + 640,
      7580 + 640,
      5560 + 640,
      7580 + 640,
      5150 + 640,
      7580 + 640,
      4780 + 640,
      7100 + 640,
      4780 + 640,
      6400 + 640,
      4780 + 640,
      5550 + 640,
      4780 + 640,
      5150 + 640,
      4780 + 640,
      5050 + 640,
      5080 + 640,
      5050 + 640,
      5480 + 640,
      5060 + 640,
      5880 + 640,
      5050 + 640,
      6300 + 640,
      5030 + 640,
      6480 + 640,
      5060 + 640,
      6550 + 640,
      5200 + 640,
      6560 + 640,
    ],
    square: [
      7650 - 400,
      8320 + 640,
      8400 - 400,
      8350 + 640,
      9800 - 400,
      8300 + 640,
      10200 - 400,
      8300 + 640,
      10650 - 400,
      8300 + 640,
      10660 - 400,
      7300 + 640,
      10670 - 400,
      6000 + 640,
      10670 - 400,
      5600 + 640,
      10000 - 400,
      5600 + 640,
      9000 - 400,
      5600 + 640,
      8500 - 400,
      5600 + 640,
      8000 - 400,
      5650 + 640,
      7440 - 400,
      5700 + 640,
      7420 - 400,
      6500 + 640,
      7440 - 400,
      7000 + 640,
      7400 - 400,
      8000 + 640,
      7400 - 400,
      8250 + 640,
      7500 - 400,
      8300 + 640,
      7650 - 400,
      8320 + 640,
    ],
    zigzag: [
      8450 + 640,
      5750 + 640,
      8450 + 640,
      6450 + 640,
      8450 + 640,
      7000 + 640,
      8050 + 640,
      7000 + 640,
      7450 + 640,
      7100 + 640,
      7450 + 640,
      8300 + 640,
      7100 + 640,
      8300 + 640,
      6800 + 640,
      8300 + 640,
      6400 + 640,
      8200 + 640,
      6450 + 640,
      6500 + 640,
      6450 + 640,
      5670 + 640,
      7500 + 640,
      5600 + 640,
      8000 + 640,
      5580 + 640,
      8300 + 640,
      5540 + 640,
      8450 + 640,
      5750 + 640,
    ],
    carWay1: [
      5178 + 640,
      4770 + 640,
      5053 + 640,
      4943 + 640,
      5035 + 640,
      5324 + 640,
      5071 + 640,
      5837 + 640,
      5055 + 640,
      6331 + 640,
      5082 + 640,
      6466 + 640,
      5178 + 640,
      6478 + 640,
      5508 + 640,
      6436 + 640,
      6222 + 640,
      6433 + 640,
      7553 + 640,
      6433 + 640,
      7518 + 640,
      5419 + 640,
      7525 + 640,
      4882 + 640,
      7510 + 640,
      4807 + 640,
      7392 + 640,
      4762 + 640,
      6741 + 640,
      4756 + 640,
      5178 + 640,
      4770 + 640,
    ],
    carWay2: [
      2932 + 640,
      2375 + 640,
      4036 + 640,
      2387 + 640,
      5223 + 640,
      2384 + 640,
      5371 + 640,
      2492 + 640,
      5371 + 640,
      3050 + 640,
      5246 + 640,
      3185 + 640,
      4317 + 640,
      3188 + 640,
      4026 + 640,
      3395 + 640,
      4048 + 640,
      4261 + 640,
      3847 + 640,
      4387 + 640,
      2857 + 640,
      4386 + 640,
      2761 + 640,
      4203 + 640,
      2785 + 640,
      3449 + 640,
      2770 + 640,
      2504 + 640,
      2932 + 640,
      2375 + 640,
    ],
    carWay3: [
      3328 + 640,
      7181 + 640,
      3106 + 640,
      7367 + 640,
      3130 + 640,
      7769 + 640,
      3346 + 640,
      7856 + 640,
      4828 + 640,
      7844 + 640,
      5706 + 640,
      7838 + 640,
      5868 + 640,
      7682 + 640,
      5860 + 640,
      7313 + 640,
      5602 + 640,
      7175 + 640,
      4850 + 640,
      7202 + 640,
      4739 + 640,
      7031 + 640,
      4730 + 640,
      6683 + 640,
      5084 + 640,
      6569 + 640,
      6287 + 640,
      6523 + 640,
      7500 + 640,
      6523 + 640,
      7574 + 640,
      6280 + 640,
      7584 + 640,
      5623 + 640,
      7536 + 640,
      4912 + 640,
      7245 + 640,
      4759 + 640,
      5964 + 640,
      4756 + 640,
      5216 + 640,
      4761 + 640,
      5021 + 640,
      4983 + 640,
      5031 + 640,
      6318 + 640,
      4939 + 640,
      6448 + 640,
      4648 + 640,
      6697 + 640,
      4662 + 640,
      7024 + 640,
      4530 + 640,
      7168 + 640,
      3884 + 640,
      7182 + 640,
      3328 + 640,
      7181 + 640,
    ],
    carWay4: [
      1057 + 640,
      929 + 640,
      1057 + 640,
      1772 + 640,
      1039 + 640,
      2887 + 640,
      1123 + 640,
      3112 + 640,
      1113 + 640,
      3790 + 640,
      1116 + 640,
      4828 + 640,
      1122 + 640,
      5973 + 640,
      1119 + 640,
      7056 + 640,
      1124 + 640,
      7898 + 640,
      1130 + 640,
      9001 + 640,
      995 + 640,
      9115 + 640,
      731 + 640,
      9109 + 640,
      674 + 640,
      9145 + 640,
      749 + 640,
      9172 + 640,
      1109 + 640,
      9172 + 640,
      1181 + 640,
      8989 + 640,
      1178 + 640,
      7360 + 640,
      1175 + 640,
      6017 + 640,
      1184 + 640,
      4895 + 640,
      1181 + 640,
      3071 + 640,
      1103 + 640,
      2902 + 640,
      1109 + 640,
      1676 + 640,
      1105 + 640,
      926 + 640,
      1300 + 640,
      857 + 640,
      2275 + 640,
      848 + 640,
      4358 + 640,
      839 + 640,
      4462 + 640,
      750 + 640,
      4492 + 640,
      536 + 640,
      4345 + 640,
      497 + 640,
      3319 + 640,
      485 + 640,
      3271 + 640,
      725 + 640,
      3145 + 640,
      794 + 640,
      2431 + 640,
      788 + 640,
      1080 + 640,
      794 + 640,
      1057 + 640,
      929 + 640,
    ],
    carWay5: [
      4093 + 640,
      823 + 640,
      5290 + 640,
      853 + 640,
      6024 + 640,
      862 + 640,
      7341 + 640,
      853 + 640,
      8484 + 640,
      856 + 640,
      9373 + 640,
      865 + 640,
      10912 + 640,
      844 + 640,
      10984 + 640,
      973 + 640,
      10981 + 640,
      2011 + 640,
      10995 + 640,
      2660 + 640,
      10848 + 640,
      2732 + 640,
      9486 + 640,
      2720 + 640,
      8196 + 640,
      2720 + 640,
      7653 + 640,
      2720 + 640,
      7543 + 640,
      2851 + 640,
      7540 + 640,
      3112 + 640,
      7327 + 640,
      3181 + 640,
      6227 + 640,
      3171 + 640,
      5441 + 640,
      3177 + 640,
      5399 + 640,
      2964 + 640,
      5388 + 640,
      2505 + 640,
      5286 + 640,
      2352 + 640,
      4575 + 640,
      2334 + 640,
      4047 + 640,
      2337 + 640,
      3985 + 640,
      2180 + 640,
      3976 + 640,
      935 + 640,
      4093 + 640,
      823 + 640,
    ],
    carWay6: [
      7719 + 640,
      2814 + 640,
      9369 + 640,
      2826 + 640,
      10683 + 640,
      2829 + 640,
      11385 + 640,
      2823 + 640,
      11501 + 640,
      2922 + 640,
      11510 + 640,
      3885 + 640,
      11522 + 640,
      4909 + 640,
      11759 + 640,
      5008 + 640,
      12302 + 640,
      4994 + 640,
      12404 + 640,
      5126 + 640,
      12397 + 640,
      5817 + 640,
      12391 + 640,
      6888 + 640,
      11986 + 640,
      6945 + 640,
      10897 + 640,
      6939 + 640,
      10834 + 640,
      6615 + 640,
      10846 + 640,
      5904 + 640,
      10840 + 640,
      5358 + 640,
      10708 + 640,
      5211 + 640,
      10384 + 640,
      5220 + 640,
      10330 + 640,
      5016 + 640,
      10294 + 640,
      4370 + 640,
      10117 + 640,
      4310 + 640,
      9061 + 640,
      4307 + 640,
      7713 + 640,
      4317 + 640,
      7632 + 640,
      4227 + 640,
      7638 + 640,
      3519 + 640,
      7635 + 640,
      2895 + 640,
      7719 + 640,
      2814 + 640,
    ],
    botWay1: [
      5210 + 640,
      6347 + 640,
      5690 + 640,
      6350 + 640,
      6206 + 640,
      6332 + 640,
      6245 + 640,
      6188 + 640,
      6272 + 640,
      5507 + 640,
      6395 + 640,
      5384 + 640,
      6842 + 640,
      5372 + 640,
      7331 + 640,
      5378 + 640,
      7424 + 640,
      5300 + 640,
      7424 + 640,
      4958 + 640,
      7295 + 640,
      4895 + 640,
      6089 + 640,
      4892 + 640,
      5229 + 640,
      4913 + 640,
      5181 + 640,
      5129 + 640,
      5210 + 640,
      6347 + 640,
    ],
    botWay2: [
      6778 + 640,
      7266 + 640,
      7057 + 640,
      7305 + 640,
      7108 + 640,
      7713 + 640,
      7034 + 640,
      7729 + 640,
      7001 + 640,
      7840 + 640,
      7058 + 640,
      7903 + 640,
      7220 + 640,
      7903 + 640,
      7268 + 640,
      7831 + 640,
      7265 + 640,
      7393 + 640,
      7265 + 640,
      6829 + 640,
      7334 + 640,
      6748 + 640,
      7964 + 640,
      6748 + 640,
      8027 + 640,
      6685 + 640,
      8030 + 640,
      6289 + 640,
      8087 + 640,
      6220 + 640,
      8159 + 640,
      6211 + 640,
      8195 + 640,
      6163 + 640,
      8189 + 640,
      5857 + 640,
      8138 + 640,
      5812 + 640,
      7910 + 640,
      5809 + 640,
      7862 + 640,
      5851 + 640,
      7859 + 640,
      6175 + 640,
      7988 + 640,
      6211 + 640,
      8027 + 640,
      6298 + 640,
      8033 + 640,
      6670 + 640,
      7979 + 640,
      6751 + 640,
      7751 + 640,
      6754 + 640,
      7328 + 640,
      6760 + 640,
      7253 + 640,
      6925 + 640,
      7262 + 640,
      7351 + 640,
      7262 + 640,
      7846 + 640,
      7205 + 640,
      7897 + 640,
      7046 + 640,
      7906 + 640,
      7007 + 640,
      7867 + 640,
      6980 + 640,
      7750 + 640,
      6755 + 640,
      7747 + 640,
      6707 + 640,
      7672 + 640,
      6731 + 640,
      7324 + 640,
      6778 + 640,
      7266 + 640,
    ],
    botWay3: [
      6609 + 640,
      5734 + 640,
      7433 + 640,
      5740 + 640,
      7457 + 640,
      5665 + 640,
      7448 + 640,
      5395 + 640,
      7439 + 640,
      4912 + 640,
      7439 + 640,
      4588 + 640,
      7428 + 640,
      4324 + 640,
      7449 + 640,
      3469 + 640,
      7320 + 640,
      3361 + 640,
      7107 + 640,
      3352 + 640,
      6312 + 640,
      3346 + 640,
      5277 + 640,
      3346 + 640,
      5154 + 640,
      3406 + 640,
      5163 + 640,
      3811 + 640,
      5160 + 640,
      4609 + 640,
      5310 + 640,
      4675 + 640,
      6231 + 640,
      4690 + 640,
      7353 + 640,
      4681 + 640,
      7449 + 640,
      4717 + 640,
      7470 + 640,
      4852 + 640,
      7386 + 640,
      5290 + 640,
      7428 + 640,
      5396 + 640,
      7455 + 640,
      5732 + 640,
      7515 + 640,
      5954 + 640,
      7515 + 640,
      6266 + 640,
      7422 + 640,
      6347 + 640,
      7122 + 640,
      6353 + 640,
      6591 + 640,
      6350 + 640,
      6504 + 640,
      6221 + 640,
      6510 + 640,
      5822 + 640,
      6609 + 640,
      5734 + 640,
    ],
    botWay4: [
      3405 + 640,
      8408 + 640,
      4077 + 640,
      8417 + 640,
      4973 + 640,
      8434 + 640,
      5027 + 640,
      8311 + 640,
      5042 + 640,
      8107 + 640,
      4940 + 640,
      8074 + 640,
      4126 + 640,
      8060 + 640,
      3046 + 640,
      8012 + 640,
      2950 + 640,
      7829 + 640,
      2957 + 640,
      7272 + 640,
      2957 + 640,
      7092 + 640,
      3212 + 640,
      7035 + 640,
      3830 + 640,
      7044 + 640,
      3929 + 640,
      6903 + 640,
      3929 + 640,
      6645 + 640,
      3908 + 640,
      6048 + 640,
      3626 + 640,
      5994 + 640,
      2738 + 640,
      6000 + 640,
      2630 + 640,
      6099 + 640,
      2624 + 640,
      6312 + 640,
      2618 + 640,
      6999 + 640,
      2687 + 640,
      7071 + 640,
      2693 + 640,
      7266 + 640,
      2692 + 640,
      8042 + 640,
      3079 + 640,
      8090 + 640,
      3091 + 640,
      8399 + 640,
      2899 + 640,
      8423 + 640,
      2659 + 640,
      8426 + 640,
      2623 + 640,
      8504 + 640,
      2611 + 640,
      8732 + 640,
      2650 + 640,
      8792 + 640,
      3175 + 640,
      8789 + 640,
      3405 + 640,
      8408 + 640,
    ],
    botWay5: [
      5110 + 640,
      6698 + 640,
      4894 + 640,
      6701 + 640,
      4858 + 640,
      6836 + 640,
      4864 + 640,
      7012 + 640,
      5311 + 640,
      7048 + 640,
      5860 + 640,
      7048 + 640,
      5956 + 640,
      7042 + 640,
      6052 + 640,
      7168 + 640,
      6058 + 640,
      7585 + 640,
      6061 + 640,
      7882 + 640,
      5947 + 640,
      7984 + 640,
      5656 + 640,
      7993 + 640,
      5572 + 640,
      8065 + 640,
      5560 + 640,
      8293 + 640,
      5659 + 640,
      8726 + 640,
      5563 + 640,
      8867 + 640,
      5548 + 640,
      9419 + 640,
      5689 + 640,
      9488 + 640,
      6127 + 640,
      9485 + 640,
      7210 + 640,
      9485 + 640,
      7306 + 640,
      9311 + 640,
      7303 + 640,
      8852 + 640,
      7267 + 640,
      8390 + 640,
      7309 + 640,
      8204 + 640,
      7264 + 640,
      8138 + 640,
      7198 + 640,
      8198 + 640,
      7240 + 640,
      8255 + 640,
      7210 + 640,
      8426 + 640,
      7054 + 640,
      8444 + 640,
      6358 + 640,
      8432 + 640,
      6259 + 640,
      8330 + 640,
      6301 + 640,
      7637 + 640,
      6277 + 640,
      6782 + 640,
      6145 + 640,
      6638 + 640,
      5407 + 640,
      6668 + 640,
      5110 + 640,
      6698 + 640,
    ],
    botWay6: [
      1321 + 640,
      925 + 640,
      1819 + 640,
      934 + 640,
      2272 + 640,
      922 + 640,
      3000 + 640,
      928 + 640,
      3788 + 640,
      916 + 640,
      3866 + 640,
      1045 + 640,
      3867 + 640,
      1405 + 640,
      3273 + 640,
      1588 + 640,
      3021 + 640,
      1627 + 640,
      2934 + 640,
      1672 + 640,
      3075 + 640,
      1696 + 640,
      3795 + 640,
      1684 + 640,
      3843 + 640,
      1735 + 640,
      3861 + 640,
      2041 + 640,
      3837 + 640,
      2206 + 640,
      3526 + 640,
      2227 + 640,
      2776 + 640,
      2221 + 640,
      2593 + 640,
      2248 + 640,
      2573 + 640,
      2413 + 640,
      2579 + 640,
      2698 + 640,
      2459 + 640,
      2836 + 640,
      2073 + 640,
      2857 + 640,
      1284 + 640,
      2866 + 640,
      1206 + 640,
      2650 + 640,
      1215 + 640,
      2254 + 640,
      1179 + 640,
      1630 + 640,
      1206 + 640,
      1114 + 640,
      1321 + 640,
      925 + 640,
    ],
    botWay7: [
      8928 + 640,
      5655 + 640,
      8640 + 640,
      5676 + 640,
      8556 + 640,
      5814 + 640,
      8553 + 640,
      5961 + 640,
      8568 + 640,
      6756 + 640,
      8613 + 640,
      6942 + 640,
      8622 + 640,
      7044 + 640,
      8427 + 640,
      7086 + 640,
      7965 + 640,
      7074 + 640,
      7632 + 640,
      7077 + 640,
      7554 + 640,
      7233 + 640,
      7536 + 640,
      7713 + 640,
      7533 + 640,
      8133 + 640,
      7626 + 640,
      8211 + 640,
      7950 + 640,
      8208 + 640,
      8097 + 640,
      8040 + 640,
      8079 + 640,
      7599 + 640,
      8157 + 640,
      7482 + 640,
      8390 + 640,
      7480 + 640,
      9446 + 640,
      7474 + 640,
      9554 + 640,
      7237 + 640,
      9549 + 640,
      6795 + 640,
      9522 + 640,
      5967 + 640,
      9493 + 640,
      5779 + 640,
      9271 + 640,
      5653 + 640,
      8928 + 640,
      5655 + 640,
    ],
    botWay8: [
      7986 + 640,
      4387 + 640,
      8646 + 640,
      4387 + 640,
      9474 + 640,
      4360 + 640,
      10115 + 640,
      4369 + 640,
      10208 + 640,
      4525 + 640,
      10199 + 640,
      5203 + 640,
      10256 + 640,
      5377 + 640,
      10511 + 640,
      5395 + 640,
      10583 + 640,
      5626 + 640,
      10565 + 640,
      6345 + 640,
      10574 + 640,
      6819 + 640,
      10580 + 640,
      7425 + 640,
      10352 + 640,
      7506 + 640,
      9842 + 640,
      7509 + 640,
      9764 + 640,
      7278 + 640,
      9770 + 640,
      6425 + 640,
      9785 + 640,
      5522 + 640,
      9554 + 640,
      5435 + 640,
      9083 + 640,
      5422 + 640,
      8570 + 640,
      5416 + 640,
      7985 + 640,
      5440 + 640,
      7743 + 640,
      5371 + 640,
      7734 + 640,
      4906 + 640,
      7737 + 640,
      4489 + 640,
      7986 + 640,
      4387 + 640,
    ],
    botWay9: [
      5084 + 640,
      2483 + 640,
      4493 + 640,
      2459 + 640,
      3893 + 640,
      2477 + 640,
      3784 + 640,
      2663 + 640,
      3829 + 640,
      3008 + 640,
      4132 + 640,
      3098 + 640,
      5050 + 640,
      3086 + 640,
      5140 + 640,
      3185 + 640,
      5158 + 640,
      3368 + 640,
      4957 + 640,
      3374 + 640,
      4381 + 640,
      3365 + 640,
      4267 + 640,
      3464 + 640,
      4270 + 640,
      3780 + 640,
      4282 + 640,
      4512 + 640,
      4279 + 640,
      5112 + 640,
      4283 + 640,
      5853 + 640,
      4283 + 640,
      6276 + 640,
      4490 + 640,
      6339 + 640,
      4838 + 640,
      6324 + 640,
      4934 + 640,
      6069 + 640,
      4922 + 640,
      5604 + 640,
      4907 + 640,
      4956 + 640,
      4802 + 640,
      4854 + 640,
      4856 + 640,
      4692 + 640,
      4973 + 640,
      4665 + 640,
      5012 + 640,
      4566 + 640,
      5003 + 640,
      3993 + 640,
      5185 + 640,
      3930 + 640,
      5197 + 640,
      3105 + 640,
      5266 + 640,
      3027 + 640,
      5266 + 640,
      2856 + 640,
      5254 + 640,
      2568 + 640,
      5084 + 640,
      2483 + 640,
    ],
    botWay10: [],
  },
};

export default PARAMS;
