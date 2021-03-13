const offerTemplate = document.querySelector('#card').content;
const offerCard = offerTemplate.querySelector('.popup');

const generateOffersMarkup = (currentOffer) => {
  const newOffer = offerCard.cloneNode(true);
  const currentOfferKeys = Object.keys(currentOffer.offer);
  const currentAuthorKeys = Object.keys(currentOffer.author);
  const featuresList = newOffer.querySelector('.popup__features');
  const imagesList = newOffer.querySelector('.popup__photos');
  const imagePattern = newOffer.querySelector('.popup__photo');
  const popupTitle = newOffer.querySelector('.popup__title');
  const popupAddress = newOffer.querySelector('.popup__text--address');
  const popupPrice = newOffer.querySelector('.popup__text--price');
  const popupType = newOffer.querySelector('.popup__type');
  const popupCapacity = newOffer.querySelector('.popup__text--capacity');
  const popupTime = newOffer.querySelector('.popup__text--time');
  const popupDescription = newOffer.querySelector('.popup__description');
  const popupAvatar = newOffer.querySelector('.popup__avatar');

  const showApartmentType = (currentApartment) => {
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

  const createFeaturesList = (apartmentOffer) => {
    let currentFeaturesList = document.createDocumentFragment();

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
      currentFeaturesList.appendChild(newFeature);
    }
    return currentFeaturesList;
  }

  const createImages = (apartment) => {
    let currentImagesList = document.createDocumentFragment();

    for (let i = 0; i < apartment.offer.photos.length; i++) {
      let newImage = imagePattern.cloneNode(true);
      newImage.src = apartment.offer.photos[i];
      currentImagesList.appendChild(newImage);
    }
    return currentImagesList;
  }

  const hideMarkupUnit = (unit) => {unit.classList.add('visually-hidden')}
  const isOfferKey = (key) => {return currentOfferKeys.includes(key)}

  let newFeaturesList = featuresList.cloneNode(false);
  if (!isOfferKey('features') || currentOffer.offer.features.length === 0) {
    hideMarkupUnit(newFeaturesList)
  } else {
    newFeaturesList.appendChild(createFeaturesList(currentOffer))
  }
  newOffer.replaceChild(newFeaturesList, featuresList);

  let newImagesList = imagesList.cloneNode(false);
  if (!isOfferKey('photos') || currentOffer.offer.photos.length === 0) {
    hideMarkupUnit(newImagesList)
  } else {newImagesList.appendChild(createImages(currentOffer))}
  newOffer.replaceChild(newImagesList, imagesList);

  if (!isOfferKey('title') || currentOffer.offer.title === '') {hideMarkupUnit(popupTitle)
  } else {popupTitle.textContent = currentOffer.offer.title}

  if (!isOfferKey('address') || currentOffer.offer.address === '') {
    hideMarkupUnit(popupAddress)
  } else {popupAddress.textContent = currentOffer.offer.address}

  if (!isOfferKey('price') || currentOffer.offer.price === '') {
    hideMarkupUnit(popupPrice)
  } else {popupPrice.textContent = `${currentOffer.offer.price} ₽/ночь`}

  if (!isOfferKey('type') || currentOffer.offer.type === '') {
    hideMarkupUnit(popupType)
  } else {popupType.textContent = showApartmentType(currentOffer)}

  if (!isOfferKey('rooms') || currentOffer.offer.rooms === '') {
    hideMarkupUnit(popupCapacity)
  } else {popupCapacity.textContent = `${currentOffer.offer.rooms} комнаты для ${currentOffer.offer.guests} гостей`}

  if (!isOfferKey('checkin') || !currentOfferKeys.includes('checkout') || currentOffer.offer.checkin === '' || currentOffer.offer.checkout === '') {
    hideMarkupUnit(popupTime)
  } else {popupTime.textContent = `Заезд после ${currentOffer.offer.checkin}, выезд до ${currentOffer.offer.checkout}`}

  if (!isOfferKey('description') || currentOffer.offer.description === '') {
    hideMarkupUnit(popupDescription)
  } else {popupDescription.textContent = currentOffer.offer.description}

  if (!currentAuthorKeys.includes('avatar') || currentOffer.author.avatar === '') {
    hideMarkupUnit(popupAvatar)
  } else {popupAvatar.src = currentOffer.author.avatar}

  return newOffer;
}

export {generateOffersMarkup};
