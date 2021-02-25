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

//форма цена и тип
const typeField = yourOfferForm.querySelector('#type');
const priceField = yourOfferForm.querySelector('#price');
const timeinField = yourOfferForm.querySelector('#timein');
const timeoutField = yourOfferForm.querySelector('#timeout');

typeField.addEventListener('change', function () {
  if (typeField.value === 'bungalow') {
    priceField.setAttribute('min', 0);
    priceField.placeholder = 0;}
  else if (typeField.value === 'flat') {
    priceField.setAttribute('min', 1000);
    priceField.placeholder = 1000;
  }
  else if (typeField.value ==='house') {
    priceField.setAttribute('min', 5000);
    priceField.placeholder = 5000;
  } else if (typeField.value === 'palace') {
    priceField.setAttribute('min', 10000);
    priceField.placeholder = 10000;
  }
})

timeinField.addEventListener('change', function () {
  if (timeinField.value === '12:00') {
    timeoutField.value = '12:00';
  } else if (timeinField.value === '13:00') {
    timeoutField.value = '13:00';
  } else if (timeinField.value === '14:00') {
    timeoutField.value = '14:00';
  }
})

timeoutField.addEventListener('change', function () {
  if (timeoutField.value === '12:00') {
    timeinField.value = '12:00';
  } else if (timeoutField.value === '13:00') {
    timeinField.value = '13:00';
  } else if (timeoutField.value === '14:00') {
    timeinField.value = '14:00';
  }
})

export {placeCoordinates};

