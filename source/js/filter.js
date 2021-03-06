import {getMapLoadStatus} from './map.js';

const mapFiltersForm = document.querySelector('.map__filters');
const filterSelectFields = mapFiltersForm.querySelectorAll('select');
const filterFeaturesField = mapFiltersForm.querySelector('fieldset');
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

mapFiltersForm.classList.add('map__filters--disabled');
filterSelectFields.forEach((currentFilterField) => {
  currentFilterField.setAttribute('disabled', '');
});
filterFeaturesField.setAttribute('disabled', '');

const startFilter = () => {
  if (getMapLoadStatus()) {
    mapFiltersForm.classList.remove('map__filters--disabled');
    filterSelectFields.forEach((currentFilterField) => {
      currentFilterField.removeAttribute('disabled');
    });
    filterFeaturesField.removeAttribute('disabled');
  }
}

const onHousingTypeFieldChange = (cb) => {
  housingTypeField.addEventListener('change', () => {
    cb();
  })
}

const onRoomsNumberFieldChange = (cb) => {
  housingRoomsField.addEventListener('change', () => {
    cb();
  })
}

const onGuestsNumberFieldChange = (cb) => {
  housingGuestsField.addEventListener('change', () => {
    cb();
  })
}

const onPriceRangeFieldChange = (cb) => {
  housingPriceField.addEventListener('change', () => {
    cb();
  })
}

const onFeaturesFieldChange = (cb) => {
  housingFeaturesField.addEventListener('change', () => {
    cb();
  })
}

export {startFilter, mapFiltersForm, onHousingTypeFieldChange, onRoomsNumberFieldChange, onGuestsNumberFieldChange, onPriceRangeFieldChange, onFeaturesFieldChange, housingTypeField, housingPriceField, housingRoomsField, housingGuestsField, housingFeaturesField, wifiField, dishwasherField, parkingField, washerField, elevatorField, conditionerField};
