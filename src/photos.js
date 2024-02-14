function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./images', false, /\.jpg/));

const photos1 = [
    { src: images['1.jpg'], width: 400, height: 750 },
];

const photos2 = [
    { src: images['2_1.jpg'], width: 700, height: 550 },
    { src: images['2_2.jpg'], width: 700, height: 450 },
];

const photos3 = [
    { src: images['3_1.jpg'], width: 500, height: 750 },
    { src: images['3_2.jpg'], width: 500, height: 750 },
    { src: images['3_3.jpg'], width: 600, height: 350 },
];

const photos4 = [
    { src: images['4_1.jpg'], width: 600, height: 450 },
    { src: images['4_2.jpg'], width: 300, height: 650 },
];

const photos5 = [
    { src: images['5_1.jpg'], width: 500, height: 450 },
    { src: images['5_2.jpg'], width: 600, height: 450 },
    { src: images['5_3.jpg'], width: 600, height: 450 },
    { src: images['5_4.jpg'], width: 400, height: 850 },
];

const photos6 = [
    { src: images['6_1.jpg'], width: 500, height: 750 },
    { src: images['6_2.jpg'], width: 600, height: 750 },
    { src: images['6_3.jpg'], width: 800, height: 650 },
];

const photos7 = [
    { src: images['7_1.jpg'], width: 600, height: 450 },
    { src: images['7_2.jpg'], width: 500, height: 750 },
    { src: images['7_3.jpg'], width: 500, height: 750 },
];

const photos8 = [
    { src: images['8_1.jpg'], width: 500, height: 750 },
    { src: images['8_2.jpg'], width: 500, height: 750 },
    { src: images['8_3.jpg'], width: 500, height: 750 },
    { src: images['8_4.jpg'], width: 500, height: 750 },
    { src: images['8_5.jpg'], width: 500, height: 750 },
    { src: images['8_6.jpg'], width: 500, height: 750 },
    { src: images['8_7.jpg'], width: 500, height: 750 },
    { src: images['8_8.jpg'], width: 500, height: 750 },
];

const photos9 = [
    { src: images['9_1.jpg'], width: 500, height: 700 },
    { src: images['9_2.jpg'], width: 500, height: 750 },
    { src: images['9_3.jpg'], width: 500, height: 750 },
    { src: images['9_4.jpg'], width: 500, height: 750 },
    { src: images['9_5.jpg'], width: 500, height: 750 },
    { src: images['9_6.jpg'], width: 500, height: 750 },
    { src: images['9_7.jpg'], width: 500, height: 750 },
    { src: images['9_8.jpg'], width: 500, height: 750 },
    { src: images['9_9.jpg'], width: 500, height: 750 },
    { src: images['9_10.jpg'], width: 500, height: 750 },
    { src: images['9_11.jpg'], width: 500, height: 750 },
    { src: images['9_12.jpg'], width: 500, height: 750 },
    { src: images['9_13.jpg'], width: 500, height: 750 },
    { src: images['9_14.jpg'], width: 500, height: 750 },
];

const photos10 = [
    { src: images['10_1.jpg'], width: 900, height: 750 },
    { src: images['10_2.jpg'], width: 900, height: 750 },
    { src: images['10_3.jpg'], width: 900, height: 750 },
];

const photos11 = [
    { src: images['11_1.jpg'], width: 400, height: 750 },
    { src: images['11_2.jpg'], width: 500, height: 750 },
    { src: images['11_3.jpg'], width: 400, height: 750 },
];

const photos12 = [
    { src: images['12_1.jpg'], width: 900, height: 550 },
    { src: images['12_2.jpg'], width: 900, height: 550 },
    { src: images['12_3.jpg'], width: 450, height: 750 },
    { src: images['12_4.jpg'], width: 450, height: 750 },
];

const photos13 = [
    { src: images['13_1.jpg'], width: 900, height: 750 },
    { src: images['13_2.jpg'], width: 600, height: 850 },
    { src: images['13_3.jpg'], width: 600, height: 850 },
    { src: images['13_4.jpg'], width: 600, height: 850 },
    { src: images['13_5.jpg'], width: 600, height: 850 },
    { src: images['13_6.jpg'], width: 600, height: 850 },
];

const photos14 = [

]

const photos15 = [
    { src: images['15_1.jpg'], width: 864, height: 1024 },
    { src: images['15_2.jpg'], width: 864, height: 1024 },
    { src: images['15_3.jpg'], width: 864, height: 1024 },
    { src: images['15_4.jpg'], width: 864, height: 1024 },
]

const photos16 = [
    { src: images['16_1.jpg'], width: 900, height: 1024 },
    { src: images['16_2.jpg'], width: 600, height: 1024 },
    { src: images['16_3.jpg'], width: 1024, height: 600 },
    { src: images['16_4.jpg'], width: 600, height: 1024 },
    { src: images['16_5.jpg'], width: 700, height: 1024 },
    { src: images['16_6.jpg'], width: 700, height: 1024 },
    { src: images['16_7.jpg'], width: 1024, height: 600 },
    { src: images['16_8.jpg'], width: 700, height: 1024 },
    { src: images['16_9.jpg'], width: 700, height: 1024 },
    { src: images['16_10.jpg'], width: 700, height: 1024 },
    { src: images['16_11.jpg'], width: 1024, height: 600 },
    { src: images['16_12.jpg'], width: 700, height: 1024 },
    { src: images['16_13.jpg'], width: 700, height: 1024 },
    { src: images['16_14.jpg'], width: 700, height: 1024 },
    { src: images['16_15.jpg'], width: 700, height: 1024 },
    { src: images['16_16.jpg'], width: 500, height: 1024 },
    { src: images['16_17.jpg'], width: 1024, height: 500 },
    { src: images['16_18.jpg'], width: 1024, height: 900 },
    { src: images['16_19.jpg'], width: 500, height: 1024 },
    { src: images['16_20.jpg'], width: 700, height: 1024 },
    { src: images['16_21.jpg'], width: 700, height: 900 },
    { src: images['16_22.jpg'], width: 700, height: 600 },
    { src: images['16_23.jpg'], width: 700, height: 900 },
    { src: images['16_24.jpg'], width: 700, height: 900 },
    { src: images['16_25.jpg'], width: 1024, height: 300 },
]


export {photos1, photos2, photos3, photos4, photos5, photos6, photos7, photos8, photos9, photos10, photos11, photos12, photos13, photos14, photos15, photos16};