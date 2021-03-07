import {startFilter} from './filter.js';

const getData = function (onSuccess) {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {if (response.ok) {
      startFilter();
      response.json().then((offers) => {
        onSuccess(offers);
      })
    }
    else {
      alert('Ошибка! Похожие объявления не были загружены.')
    }
    })
    .catch(() => alert('Ошибка! Похожие объявления не были загружены.'));
}

export {getData};
