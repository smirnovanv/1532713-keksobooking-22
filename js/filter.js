import {getMapLoadStatus} from './map.js';

const mapFiltersForm = document.querySelector('.map__filters');
const filterSelectFields = mapFiltersForm.querySelectorAll('select');
const filterFeaturesField = mapFiltersForm.querySelector('fieldset');

//Активируем фильтр

mapFiltersForm.classList.add('map__filters--disabled');
filterSelectFields.forEach(function (currentFilterField) {
  currentFilterField.setAttribute('disabled', '');
});
filterFeaturesField.setAttribute('disabled', '');


const startFilter = function () {
  if (getMapLoadStatus()) {
    mapFiltersForm.classList.remove('map__filters--disabled');
    filterSelectFields.forEach(function (currentFilterField) {
      currentFilterField.removeAttribute('disabled');
    });
    filterFeaturesField.removeAttribute('disabled');
  }
}

//Слушаем события

const housingTypeField = mapFiltersForm.querySelector('#housing-type');
const housingPriceField = mapFiltersForm.querySelector('#housing-price');
const housingRoomsField = mapFiltersForm.querySelector('#housing-rooms');
const housingGuestsField = mapFiltersForm.querySelector('#housing-guests');
const housingFeaturesField = mapFiltersForm.querySelector('#housing-features');
const wifiField = housingFeaturesField.querySelector('#filter-wifi');
const dishwasherField = housingFeaturesField.querySelector('#filter-dishwasher');
const parkingField = housingFeaturesField.querySelector('#filter-parking');
const washerField = housingFeaturesField.querySelector('#filter-washer');
const elevatorField = housingFeaturesField.querySelector('#filter-elevator');
const conditionerField = housingFeaturesField.querySelector('#filter-conditioner');



const selectHousingType = function (cb) {
  housingTypeField.addEventListener('change', function () {
    cb();
  })
}

const selectRoomsNumber = function (cb) {
  housingRoomsField.addEventListener('change', function () {
    cb();
  })
}

const selectGuestsNumber = function (cb) {
  housingGuestsField.addEventListener('change', function () {
    cb();
  })
}

const selectPriceRange = function (cb) {
  housingPriceField.addEventListener('change', function () {
    cb();
  })
}

const selectFeatures = function (cb) {
  housingFeaturesField.addEventListener('change', function () {
    cb();
  })
}

export {startFilter, mapFiltersForm, selectHousingType, selectRoomsNumber, selectGuestsNumber, selectPriceRange, selectFeatures, housingTypeField, housingPriceField, housingRoomsField, housingGuestsField, housingFeaturesField, wifiField, dishwasherField, parkingField, washerField, elevatorField, conditionerField};
