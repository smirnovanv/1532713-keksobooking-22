import {isEscEvent} from './util.js';

const main = document.querySelector('main');
const successfulAdTemplate = document.querySelector('#success').content;
const successfulAdMarkup = successfulAdTemplate.querySelector('.success');
const mapCanvas = document.querySelector('.map__canvas');

const errorAdTemplate = document.querySelector('#error').content;
const errorAdMarkup = errorAdTemplate.querySelector('.error');

const successfulAdWindow = successfulAdMarkup.cloneNode(true);
const errorAdWindow = errorAdMarkup.cloneNode(true);

const showSuccessWindow = function () {
  main.insertBefore(successfulAdWindow, main.childNodes[0]);
  mapCanvas.style.zIndex = -1;
}

const closeSuccessWindow = function () {
  main.addEventListener('click', function () {
    if (main.contains(successfulAdWindow)) {
      main.removeChild(successfulAdWindow);
      mapCanvas.style.zIndex = 10;
    }
  })
}

const closeEscSuccessWindow = function () {
  main.addEventListener('keydown', function (evt) {
    if (isEscEvent(evt)) {
      if (main.contains(successfulAdWindow)) {
        main.removeChild(successfulAdWindow);
        mapCanvas.style.zIndex = 10;
      }
    }
  },
  )
}

const showErrorWindow = function () {
  main.insertBefore(errorAdWindow, main.childNodes[0]);
  mapCanvas.style.zIndex = -1;
}

const closeErrorWindow = function () {
  main.addEventListener('click', function () {
    if (main.contains(errorAdWindow)) {
      main.removeChild(errorAdWindow);
      mapCanvas.style.zIndex = 10;
    }
  })
}

const closeEscErrorWindow = function () {
  main.addEventListener('keydown', function (evt) {
    if (isEscEvent(evt)) {
      if (main.contains(errorAdWindow)) {
        main.removeChild(errorAdWindow);
        mapCanvas.style.zIndex = 10;
      }
    }
  },
  )
}

export {showSuccessWindow, closeSuccessWindow, showErrorWindow, closeErrorWindow, closeEscSuccessWindow, closeEscErrorWindow};
