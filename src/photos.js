function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./images', false, /\.jpg/));

const photos1 = [
    { src: images['1.jpg'], width: 400, height: 750 },
];

const photos2 = [];

const photos3 = [
    { src: images['3_1.jpg'], width: 500, height: 750 },
    { src: images['3_2.jpg'], width: 500, height: 750 },
];

const photos4 = [
    { src: images['4_1.jpg'], width: 600, height: 450 },
];

const photos5 = [];

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
    { src: images['12_1.jpg'], width: 900, height: 650 },
    { src: images['12_2.jpg'], width: 900, height: 650 },
    { src: images['12_3.jpg'], width: 500, height: 750 },
    { src: images['12_4.jpg'], width: 500, height: 750 },
];

const photos13 = [
    { src: images['13_1.jpg'], width: 900, height: 750 },
    { src: images['13_2.jpg'], width: 600, height: 850 },
    { src: images['13_3.jpg'], width: 600, height: 850 },
    { src: images['13_4.jpg'], width: 600, height: 850 },
    { src: images['13_5.jpg'], width: 600, height: 850 },
    { src: images['13_6.jpg'], width: 600, height: 850 },
];

export {photos1, photos2, photos3, photos4, photos5, photos6, photos7, photos8, photos9, photos10, photos11, photos12, photos13};