import {getMapLoadStatus, mainPinMarker, resetMainMarker, DEFAULT_LAT, DEFAULT_LNG} from './map.js';
import {showSuccessWindow, showErrorWindow} from './modal-windows.js';

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

if (getMapLoadStatus()) {
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
addressField.value = `${DEFAULT_LAT}, ${DEFAULT_LNG}`;

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

// форма задание 9
const roomNumberField = yourOfferForm.querySelector('#room_number');
const capacityField = yourOfferForm.querySelector('#capacity');
const capacityOptions = capacityField.querySelectorAll('option');


roomNumberField.addEventListener('change', function () {
  if (roomNumberField.value === '1') {
    capacityOptions[2].removeAttribute('disabled');
    capacityOptions[2].setAttribute('selected', '');
    capacityOptions[0].setAttribute('disabled', '');
    capacityOptions[1].setAttribute('disabled', '');
    capacityOptions[3].setAttribute('disabled', '');
  }
  else if (roomNumberField.value === '2') {
    capacityOptions[1].removeAttribute('disabled');
    capacityOptions[2].removeAttribute('disabled');
    capacityOptions[1].setAttribute('selected', '');
    capacityOptions[0].setAttribute('disabled', '');
    capacityOptions[3].setAttribute('disabled', '');
  }
  else if (roomNumberField.value === '3') {
    capacityOptions[0].removeAttribute('disabled');
    capacityOptions[1].removeAttribute('disabled');
    capacityOptions[2].removeAttribute('disabled');
    capacityOptions[0].setAttribute('selected', '');
    capacityOptions[3].setAttribute('disabled', '');
  }
  else if (roomNumberField.value === '100') {
    capacityOptions[3].removeAttribute('disabled');
    capacityOptions[3].setAttribute('selected', '');
    capacityOptions[0].setAttribute('disabled', '');
    capacityOptions[1].setAttribute('disabled', '');
    capacityOptions[2].setAttribute('disabled', '');
  }
})

const formReset = function () {
  yourOfferForm.reset();
  priceField.setAttribute('min', '1000');
  priceField.setAttribute('placeholder', '1000');
  capacityOptions.forEach((capacityOption) => capacityOption.removeAttribute('disabled'));
  capacityOptions.forEach((capacityOption) => capacityOption.removeAttribute('selected'));
  capacityOptions[2].setAttribute('selected', '');

  resetMainMarker();
  addressField.value = `${DEFAULT_LAT}, ${DEFAULT_LNG}`;
};

//Отправка оффера
const sendOffer = function (cb) {
  yourOfferForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {if (response.ok) {
      formReset();
      cb();
      showSuccessWindow();
    } else {
      showErrorWindow();
    }},
    ).catch(() => showErrorWindow())
  })
};

const resetButton = document.querySelector('.ad-form__reset');

const clickResetButton = function (cb) {
  resetButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    cb();
  });
}

export {clickResetButton, formReset, sendOffer};
