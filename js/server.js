import {addPin} from './map.js';

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => {if (response.ok) {
    response.json().then((offers) => {
      offers.forEach(function (offer) {
        addPin(offer);})
    })}
  else {
    alert('Ошибка! Похожие объявления не были загружены.')
  }
  })
  .catch(() => alert('ошибка'));
