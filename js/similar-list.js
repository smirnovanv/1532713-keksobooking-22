import {addPin} from './map.js';
import {housingTypeField} from './filter.js';

const SIMILAR_OFFERS_COUNT = 10;

const createSuitableArray = function (allOffers) {
  let suitableOffers = [];
  allOffers.forEach(function (currentOffer) {
    if (currentOffer.offer.type === housingTypeField.value || housingTypeField.value === 'any') {
      suitableOffers.push(currentOffer);
    }
  })

  return suitableOffers;
}

const renderSimilarList = function (similarOffers) {
  let copiedOffers = similarOffers.slice();
  let applicableOffers = createSuitableArray(copiedOffers).slice(0, SIMILAR_OFFERS_COUNT);
  applicableOffers.forEach(function (offer) {
    addPin(offer);
  })
}

export {renderSimilarList};
