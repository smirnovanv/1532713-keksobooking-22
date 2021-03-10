import {addPin, removeMarkers} from './map.js';
import {housingTypeField, housingPriceField, housingRoomsField, housingGuestsField, wifiField, dishwasherField, parkingField, washerField, elevatorField, conditionerField} from './filter.js';

const SIMILAR_OFFERS_COUNT = 10;

const createSuitableArray = (allOffers) => {
  let suitableOffers = [];

  allOffers.forEach((currentOffer) => {
    if ((currentOffer.offer.type === housingTypeField.value || housingTypeField.value === 'any')
    && (currentOffer.offer.rooms === Number(housingRoomsField.value) || housingRoomsField.value === 'any')
    && (currentOffer.offer.guests === Number(housingGuestsField.value) || housingGuestsField.value === 'any')
    && ((currentOffer.offer.price < 10000 && housingPriceField.value === 'low')
    || (currentOffer.offer.price > 50000 && housingPriceField.value === 'high')
    || (currentOffer.offer.price >= 10000 && currentOffer.offer.price <= 50000 && housingPriceField.value === 'middle')
    || (housingPriceField.value === 'any'))
    && (
      (!wifiField.checked && !dishwasherField.checked && !parkingField.checked && !washerField.checked && !elevatorField.checked && !conditionerField.checked)
    || ((currentOffer.offer.features.includes('elevator') && elevatorField.checked) || (!elevatorField.checked))
    && ((currentOffer.offer.features.includes('wifi') && wifiField.checked) || (!wifiField.checked))
    && ((currentOffer.offer.features.includes('dishwasher') && dishwasherField.checked) || (!dishwasherField.checked))
    && ((currentOffer.offer.features.includes('washer') && washerField.checked) || (!washerField.checked))
    && ((currentOffer.offer.features.includes('parking') && parkingField.checked) || (!parkingField.checked))
    && ((currentOffer.offer.features.includes('conditioner') && conditionerField.checked) || (!conditionerField.checked))
    )) {
      suitableOffers.push(currentOffer);
    }
  })

  return suitableOffers;
}

const renderSimilarList = (similarOffers) => {
  removeMarkers();
  let copiedOffers = similarOffers.slice();
  let applicableOffers = createSuitableArray(copiedOffers).slice(0, SIMILAR_OFFERS_COUNT);
  applicableOffers.forEach((offer) => {
    addPin(offer);
  })
}

export {renderSimilarList};
