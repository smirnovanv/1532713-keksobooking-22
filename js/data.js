import {getRandomInRange, getRandomFloatNumber, createMocks} from './util.js';

const PROPERTY_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const OFFERED_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const OFFER_TITLES = [
  'Уютное местечко в самом центре города',
  'Комфортабельные апартаменты с видом на парк',
  'Дизайнерские апартаменты в стиле Лофт',
  'Апартаменты в современном стиле',
  'Современные апартаменты в стиле грандж',
  'Тихие апартаменты с видом на озеро',
  'Апартаменты мечты в Старом городе',
  'Двухуровневые апартаменты в стиле грандж',
  'Уютные апартаменты вдали от шума главных улиц',
  'Эксклюзивные апартаменты с видом на старый город',
];
const OFFER_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];
const OFFER_DESCRIPTIONS = [
  'Яркий и броский дизайн апартаментов подойдет активным людям. В числе стандартных удобств — телевизор с плоским экраном и спутниковыми каналами, а также мини-сейф.',
  'Дизайн апартаментов выполнен в пастельных тонах. В стоимость входит еженедельная уборка и смена постельного белья, а также приветственный продуктовый набор по прибытии.',
  'Стильно и просто. Это любимая часть города среди наших гостей согласно независимым отзывам.',
  'Апартаменты в нескольких минутах ходьбы от остановок общественного транспорта, с которых можно добраться до основных достопримечательностей.',
  'Из окон апартаментов открывается чудесный вид на парк. Станция метро, с которой можно доехать до аэропорта, находится в трех минутах хотьбы.',
  'Дизайн апaртаментов отличается универсальностью. Апартаменты обставлены элегантной современной мебелью, есть сейф для ноутбука, телевизор с плоским экраном.',
  'Апартаменты декорированы превосходным текстилем и обставлены дизайнерской мебелью. В соседнем здании находится спа-центр и крытый бассейн.',
  'Апартаменты отличаются тщательно продуманным интерьером. Окна выходят на запад и восток. До магазинов и достопримечательностей всего 20 минут ходьбы или 10 минут езды на метро.',
  'В апартаментах сочетаются современные удобства и роскошь. До главных достопримечательностей можно дойти за несколько минут.',
  'Апартаменты расположены в элегантном здании 19 века в самом сердце города. Главные достопримечательности находятся в шаговой доступности.',
];
//описания взяты с booking.com
const SIMILAR_OFFERS_COUNT = 10;

const createApartment = function () {
  let author = {
    avatar: 'img/avatars/user0' + getRandomInRange(1, 8) + '.png',
  };

  let location = {
    x: getRandomFloatNumber(35.65000, 35.70000, 5),
    y: getRandomFloatNumber(139.70000, 139.80000, 5),
  };

  let offer = {
    title: OFFER_TITLES[getRandomInRange(0, OFFER_TITLES.length -1)],
    address: `${location.x}, ${location.y}`,
    price: getRandomInRange(1, 1000000),
    type: PROPERTY_TYPES[getRandomInRange(0, PROPERTY_TYPES.length -1)],
    rooms: getRandomInRange(1, 100),
    guests: getRandomInRange(0, 3),
    checkin: getRandomInRange(12, 14) + ':00',
    checkout: getRandomInRange(12, 14) + ':00',
    features: createMocks(OFFERED_FEATURES),
    description: OFFER_DESCRIPTIONS[getRandomInRange(0, OFFER_DESCRIPTIONS.length -1)],
    photos: createMocks(OFFER_PHOTOS),
  };

  return {author, offer, location}
}

const createSimilarOffers = function () {
  let similarOffers = new Array(SIMILAR_OFFERS_COUNT).fill(null).map(() => createApartment());
  return similarOffers;
}

export {createSimilarOffers};
