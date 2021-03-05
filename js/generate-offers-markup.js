const offerTemplate = document.querySelector('#card').content;
const offerCard = offerTemplate.querySelector('.popup');


const generateOffersMarkup = function (currentOffer) {
  const newOffer = offerCard.cloneNode(true);

  const showApartmentType = function (currentApartment) {
    switch (currentApartment.offer.type) {
      case 'flat':
        return 'Квартира';
      case 'bungalow':
        return 'Бунгало';
      case 'house':
        return 'Дом';
      case 'palace':
        return 'Дворец';
    }
  };

  const createFeaturesList = function (apartmentOffer) {
    let currentfeaturesList = document.createDocumentFragment();

    for (let i = 0; i < apartmentOffer.offer.features.length; i++) {
      let newFeature = document.createElement('li');
      newFeature.classList.add('popup__feature');
      if (apartmentOffer.offer.features[i].includes('wifi')) {
        newFeature.classList.add('popup__feature--wifi');
      }
      if (apartmentOffer.offer.features[i].includes('dishwasher')) {
        newFeature.classList.add('popup__feature--dishwasher');
      }
      else if (apartmentOffer.offer.features[i].includes('washer')) {
        newFeature.classList.add('popup__feature--washer');
      }
      if (apartmentOffer.offer.features[i].includes('elevator')) {
        newFeature.classList.add('popup__feature--elevator');
      }
      if (apartmentOffer.offer.features[i].includes('parking')) {
        newFeature.classList.add('popup__feature--parking');
      }
      if (apartmentOffer.offer.features[i].includes('conditioner')) {
        newFeature.classList.add('popup__feature--conditioner');
      }
      currentfeaturesList.appendChild(newFeature);
    }
    return currentfeaturesList;
  }
  const featuresList = newOffer.querySelector('.popup__features');
  let newFeaturesList = featuresList.cloneNode(false);
  newFeaturesList.appendChild(createFeaturesList(currentOffer));

  const imagesList = newOffer.querySelector('.popup__photos');
  const imagePattern = newOffer.querySelector('.popup__photo');
  let newImagesList = imagesList.cloneNode(false);

  const createImages = function (apartment) {
    let currentImagesList = document.createDocumentFragment();

    for (let i = 0; i < apartment.offer.photos.length; i++) {
      let newImage = imagePattern.cloneNode(true);
      newImage.src = apartment.offer.photos[i];
      currentImagesList.appendChild(newImage);
    }
    return currentImagesList;
  }
  newImagesList.appendChild(createImages(currentOffer));

  newOffer.querySelector('.popup__title').textContent = currentOffer.offer.title;
  newOffer.querySelector('.popup__text--address').textContent = currentOffer.offer.address;
  newOffer.querySelector('.popup__text--price').textContent = `${currentOffer.offer.price} ₽/ночь`;
  newOffer.querySelector('.popup__type').textContent = showApartmentType(currentOffer);
  newOffer.querySelector('.popup__text--capacity').textContent = `${currentOffer.offer.rooms} комнаты для ${currentOffer.offer.guests} гостей`;
  newOffer.querySelector('.popup__text--time').textContent = `Заезд после ${currentOffer.offer.checkin}, выезд до ${currentOffer.offer.checkout}`;
  newOffer.replaceChild(newFeaturesList, featuresList);
  newOffer.querySelector('.popup__description').textContent = currentOffer.offer.description;
  newOffer.replaceChild(newImagesList, imagesList);
  newOffer.querySelector('.popup__avatar').src = currentOffer.author.avatar;

  return newOffer;
}

export {generateOffersMarkup};
