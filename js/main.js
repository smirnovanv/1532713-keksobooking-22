import './generate-offers-markup.js';
import './map.js';
import './form.js';
import './server.js';
import './modal-windows.js';
import {closeSuccessWindow, closeErrorWindow, closeEscSuccessWindow, closeEscErrorWindow} from './modal-windows.js';
import './filter.js';
import {getData} from './server.js';
import {renderSimilarList} from './similar-list.js';
import {selectHousingType} from './filter.js';
import {removeMarkers} from './map.js';

getData((offers) => {
  renderSimilarList(offers);
  selectHousingType(() => {
    removeMarkers();
    renderSimilarList(offers)});
});

closeSuccessWindow();
closeErrorWindow();
closeEscSuccessWindow();
closeEscErrorWindow();






