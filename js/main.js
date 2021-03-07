/* global _:readonly */

import './generate-offers-markup.js';
import './map.js';
import './form.js';
import './server.js';
import './modal-windows.js';
import {closeSuccessWindow, closeErrorWindow, closeEscSuccessWindow, closeEscErrorWindow} from './modal-windows.js';
import './filter.js';
import {getData} from './server.js';
import {renderSimilarList} from './similar-list.js';
import {selectHousingType, selectRoomsNumber, selectGuestsNumber, selectPriceRange, selectFeatures, mapFiltersForm} from './filter.js';
import {removeMarkers} from './map.js';
import {clickResetButton, formReset, sendOffer} from './form.js';

const RERENDER_DELAY = 500;

getData((offers) => {
  renderSimilarList(offers);

  selectHousingType(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  selectRoomsNumber(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  selectGuestsNumber(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  selectPriceRange(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  selectFeatures(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  clickResetButton(() => {
    formReset();
    mapFiltersForm.reset();
    removeMarkers();
    renderSimilarList(offers);
  });

  sendOffer(() => {
    mapFiltersForm.reset();
    removeMarkers();
    renderSimilarList(offers);
  });
});

closeSuccessWindow();
closeErrorWindow();
closeEscSuccessWindow();
closeEscErrorWindow();
