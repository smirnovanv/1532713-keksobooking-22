import {startFilter} from './filter.js';
import {showAlert} from './util.js';

const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {if (response.ok) {
      startFilter();
      response.json().then((offers) => {
        onSuccess(offers);
      })
    }
    else {
      showAlert('Ошибка! Похожие объявления не были загружены.');
    }
    })
    .catch(() => showAlert('Ошибка! Похожие объявления не были загружены.'));
}

export {getData};
