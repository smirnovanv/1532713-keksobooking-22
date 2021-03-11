import {getMapLoadStatus, mainPinMarker, resetMainMarker, DEFAULT_LAT, DEFAULT_LNG} from './map.js';
import {showSuccessWindow, showAdErrorWindow} from './modal-windows.js';
import {avatarPreview, photosContainer} from './photo.js';

const DEFAULT_AVATAR = 'img/muffin-grey.svg';

const yourOfferForm = document.querySelector('.ad-form');
const yourOfferFormFields = yourOfferForm.querySelectorAll('fieldset');
const addressField = yourOfferForm.querySelector('#address');

yourOfferForm.classList.add('ad-form--disabled');
yourOfferFormFields.forEach((currentField) => {
  currentField.setAttribute('disabled', '');
})

if (getMapLoadStatus()) {
  yourOfferForm.classList.remove('ad-form--disabled');
  yourOfferFormFields.forEach((currentField) => {
    currentField.removeAttribute('disabled');
  });
}

// Поле координат
addressField.setAttribute('readonly', '');
addressField.value = `${DEFAULT_LAT}, ${DEFAULT_LNG}`;

let placeCoordinates = (evt) => {
  let coordinates = evt.target.getLatLng();

  addressField.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
}

let transferCoordinates = () => {
  return placeCoordinates;
}

//отслеживатель в картах, запускает функцию
mainPinMarker.on('moveend', transferCoordinates());

//форма цена и тип
const typeField = yourOfferForm.querySelector('#type');
const priceField = yourOfferForm.querySelector('#price');
const timeinField = yourOfferForm.querySelector('#timein');
const timeoutField = yourOfferForm.querySelector('#timeout');

typeField.addEventListener('change', () => {
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

timeinField.addEventListener('change', () => {
  if (timeinField.value === '12:00') {
    timeoutField.value = '12:00';
  } else if (timeinField.value === '13:00') {
    timeoutField.value = '13:00';
  } else if (timeinField.value === '14:00') {
    timeoutField.value = '14:00';
  }
})

timeoutField.addEventListener('change', () => {
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

roomNumberField.addEventListener('change', () => {
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

const formReset = () => {
  yourOfferForm.reset();
  priceField.setAttribute('min', '1000');
  priceField.setAttribute('placeholder', '1000');
  capacityOptions.forEach((capacityOption) => capacityOption.removeAttribute('disabled'));
  capacityOptions.forEach((capacityOption) => capacityOption.removeAttribute('selected'));
  capacityOptions[2].setAttribute('selected', '');
  avatarPreview.src = DEFAULT_AVATAR;

  while (photosContainer.firstChild) {
    photosContainer.removeChild(photosContainer.firstChild);
  }

  resetMainMarker();
  addressField.value = `${DEFAULT_LAT}, ${DEFAULT_LNG}`;
};

//Отправка оффера
const onOfferFormSumbmit = (cb) => {
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
      showAdErrorWindow();
    }},
    ).catch(() => showAdErrorWindow())
  })
};

const resetButton = document.querySelector('.ad-form__reset');

const onResetButtonClick = (cb) => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    cb();
  });
}

export {onResetButtonClick, formReset, onOfferFormSumbmit};
