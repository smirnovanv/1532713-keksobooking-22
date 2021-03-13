import {isEscEvent} from './util.js';

const main = document.querySelector('main');
const successfulAdTemplate = document.querySelector('#success').content;
const successfulAdMarkup = successfulAdTemplate.querySelector('.success');
const mapCanvas = document.querySelector('.map__canvas');
const errorAdTemplate = document.querySelector('#error').content;
const errorAdMarkup = errorAdTemplate.querySelector('.error');

const successfulAdWindow = successfulAdMarkup.cloneNode(true);
const errorAdWindow = errorAdMarkup.cloneNode(true);

const onSuccessfulAdWindowClick = () => {
  closeSuccessWindow();
}

const onSuccessfulAdWindowEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessWindow();
  }
}

const showSuccessWindow = () => {
  main.insertBefore(successfulAdWindow, main.childNodes[0]);
  mapCanvas.style.zIndex = '-1';

  document.addEventListener('click', onSuccessfulAdWindowClick);
  document.addEventListener('keydown', onSuccessfulAdWindowEscKeydown)
}

const closeSuccessWindow = () => {
  main.removeChild(successfulAdWindow);
  mapCanvas.style.zIndex = '10';

  document.removeEventListener('click', onSuccessfulAdWindowClick);
  document.removeEventListener('keydown', onSuccessfulAdWindowEscKeydown);
}

const onErrorAdWindowClick = () => {
  closeErrorAdWindow();
}

const onErrorAdWindowEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorAdWindow();
  }
}

const showAdErrorWindow = () => {
  main.insertBefore(errorAdWindow, main.childNodes[0]);
  mapCanvas.style.zIndex = '-1';

  document.addEventListener('click', onErrorAdWindowClick);
  document.addEventListener('keydown', onErrorAdWindowEscKeydown);
}

const closeErrorAdWindow = () => {
  main.removeChild(errorAdWindow);
  mapCanvas.style.zIndex = '10';

  document.removeEventListener('click', onErrorAdWindowClick);
  document.removeEventListener('keydown', onErrorAdWindowEscKeydown);
}

export {showSuccessWindow, showAdErrorWindow};
