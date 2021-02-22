import {loadStatus, mainPinMarker} from './map.js';

const yourOfferForm = document.querySelector('.ad-form');
const yourOfferFormFields = yourOfferForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterFields = mapFilter.querySelectorAll('select');
const mapFilterFeature = mapFilter.querySelector('fieldset');
const addressField = yourOfferForm.querySelector('#address');

yourOfferForm.classList.add('ad-form--disabled');
yourOfferFormFields.forEach(function (currentField) {
  currentField.setAttribute('disabled', '');
})

mapFilter.classList.add('map__filters--disabled');
mapFilterFields.forEach(function (mapFilterField) {
  mapFilterField.setAttribute('disabled', '');
})
mapFilterFeature.setAttribute('disabled', '');

if (loadStatus === true) {
  yourOfferForm.classList.remove('ad-form--disabled');
  yourOfferFormFields.forEach(function (currentField) {
    currentField.removeAttribute('disabled');
  });
  mapFilter.classList.remove('map__filters--disabled');
  mapFilterFields.forEach(function (mapFilterField) {
    mapFilterField.removeAttribute('disabled');
  });
  mapFilterFeature.removeAttribute('disabled');
}

// Поле координат
addressField.setAttribute('readonly', '');
addressField.value = '35.6895, 139.69171';

let placeCoordinates = function (evt) {
  let coordinates = evt.target.getLatLng();

  addressField.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
}

let transferCoordinates = function () {
  return placeCoordinates;
}

//отслеживатель в картах, запускает функцию
mainPinMarker.on('moveend', transferCoordinates());

export {placeCoordinates};

