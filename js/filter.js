import {loadStatus} from './map.js';

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
  if (loadStatus === true) {
    mapFiltersForm.classList.remove('map__filters--disabled');
    filterSelectFields.forEach(function (currentFilterField) {
      currentFilterField.removeAttribute('disabled');
    });
    filterFeaturesField.removeAttribute('disabled');
  }
}

//Слушаем события

const housingTypeField = mapFiltersForm.querySelector('#housing-type');

const selectHousingType = function (cb) {
  housingTypeField.addEventListener('change', function () {
    cb();
  })
}

/*
Заготовка для других полей фильтра
const housingPriceField = mapFiltersForm.querySelector('#housing-price');
const housingRoomsField = mapFiltersForm.querySelector('#housing-rooms');
const housingGuestsField = mapFiltersForm.querySelector('#housing-guests');
const housingFeaturesField = mapFiltersForm.querySelector('#housing-features');

housingPriceField.addEventListener('change', function () {})
housingRoomsField.addEventListener('change', function () {})
housingGuestsField.addEventListener('change', function () {})
housingFeaturesField.addEventListener('change', function () {})
*/

export {startFilter, selectHousingType, housingTypeField};
