const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const APARTMENT_PREVIEW_HEIGHT = '70';
const APARTMENT_PREVIEW_WIDTH = '70';

const loadAvatarField = document.querySelector('#avatar');
const avatarContainer = document.querySelector('.ad-form-header__preview');
const avatarPreview = avatarContainer.querySelector('img');
const loadImagesField = document.querySelector('#images');
const photosContainer = document.querySelector('.ad-form__photo');

loadAvatarField.addEventListener('change', () => {
  const file = loadAvatarField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

loadImagesField.addEventListener('change', () => {
  const file = loadImagesField.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    const apartmentImagePreview = document.createElement('img');
    apartmentImagePreview.setAttribute('width', APARTMENT_PREVIEW_HEIGHT);
    apartmentImagePreview.setAttribute('height', APARTMENT_PREVIEW_WIDTH);

    reader.addEventListener('load', () => {
      apartmentImagePreview.src = reader.result;
    });

    reader.readAsDataURL(file);
    photosContainer.appendChild(apartmentImagePreview);
  }
});

export {avatarPreview, photosContainer};
