/* global L:readonly */
import {generateOffersMarkup} from './generate-offers-markup.js';

const DEFAULT_LAT = 35.6895;
const DEFAULT_LNG = 139.69171;

let loadStatus = false;

const map = L.map('map-canvas')
  .on('load', () => {
    loadStatus = true;
  })
  .setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const getMapLoadStatus = () => {
  return loadStatus;
}

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const resetMainMarker = () => {
  mainPinMarker.setLatLng([DEFAULT_LAT, DEFAULT_LNG]);
}

let markers = L.layerGroup([]);

const removeMarkers = () => {
  markers.clearLayers();
}

const addPin = (apartmentOffer) => {
  const lat = apartmentOffer.location.lat;
  const lng = apartmentOffer.location.lng;
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
    .bindPopup(
      generateOffersMarkup(apartmentOffer),
    );

  markers.addLayer(marker).addTo(map);
}

export {map, addPin, getMapLoadStatus, mainPinMarker, DEFAULT_LAT, DEFAULT_LNG, resetMainMarker, removeMarkers};
