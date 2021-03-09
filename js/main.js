/* global _:readonly */

import './generate-offers-markup.js';
import './map.js';
import './form.js';
import './server.js';
import './modal-windows.js';
import {onMainClick, onMainEscKeydown} from './modal-windows.js';
import './filter.js';
import {getData} from './server.js';
import {renderSimilarList} from './similar-list.js';
import {onHousingTypeFieldChange, onRoomsNumberFieldChange, onGuestsNumberFieldChange, onPriceRangeFieldChange, onFeaturesFieldChange, mapFiltersForm} from './filter.js';
import {removeMarkers} from './map.js';
import {onResetButtonClick, formReset, onOfferFormSumbmit} from './form.js';

const RERENDER_DELAY = 500;

getData((offers) => {
  renderSimilarList(offers);

  onHousingTypeFieldChange(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onRoomsNumberFieldChange(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onGuestsNumberFieldChange(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onPriceRangeFieldChange(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onFeaturesFieldChange(_.debounce(() => {
    removeMarkers();
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onResetButtonClick(() => {
    formReset();
    mapFiltersForm.reset();
    removeMarkers();
    renderSimilarList(offers);
  });

  onOfferFormSumbmit(() => {
    mapFiltersForm.reset();
    removeMarkers();
    renderSimilarList(offers);
  });
});

onMainClick();
onMainEscKeydown();
