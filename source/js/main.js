/* global _:readonly */

import './generate-offers-markup.js';
import './map.js';
import './form.js';
import './server.js';
import './modal-windows.js';
import './filter.js';
import './photo.js';
import {getData} from './server.js';
import {renderSimilarList} from './similar-list.js';
import {onHousingTypeFieldChange, onRoomsNumberFieldChange, onGuestsNumberFieldChange, onPriceRangeFieldChange, onFeaturesFieldChange, mapFiltersForm} from './filter.js';
import {onResetButtonClick, formReset, onOfferFormSubmit} from './form.js';

const RERENDER_DELAY = 500;

getData((offers) => {
  renderSimilarList(offers);

  onHousingTypeFieldChange(_.debounce(() => {
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onRoomsNumberFieldChange(_.debounce(() => {
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onGuestsNumberFieldChange(_.debounce(() => {
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onPriceRangeFieldChange(_.debounce(() => {
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onFeaturesFieldChange(_.debounce(() => {
    renderSimilarList(offers)
  }, RERENDER_DELAY,
  ));

  onResetButtonClick(() => {
    formReset();
    mapFiltersForm.reset();
    renderSimilarList(offers);
  });

  onOfferFormSubmit(() => {
    mapFiltersForm.reset();
    renderSimilarList(offers);
  });
});
