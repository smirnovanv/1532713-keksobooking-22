/* global L:readonly */
import {similarOffers, generateOffersMarkup} from './generate-offers-markup.js';

let loadStatus = false;
const map = L.map('map-canvas')
  .on('load', function () {
    loadStatus = true;
  })
  .setView({
    lat: 35.6895,
    lng: 139.69171,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68221,
    lng: 139.73595,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

similarOffers.forEach(function (similarOffer) {

  const lat = similarOffer.location.x;
  const lng = similarOffer.location.y;
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat,
    lng,
  },
  {
    icon,
  },
  );

  marker
    .addTo(map)
    .bindPopup(
      generateOffersMarkup(similarOffer),
    );
})

export {loadStatus, mainPinMarker};
