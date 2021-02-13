const getRandomInRange = function (min, max) {
  if (min >= 0 && max > 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    return null;
  }
}

//Источник кода: https://myrusakov.ru/js-random-numbers.html

const getRandomFloatNumber = function (minNumber, maxNumber, numbersAfterComma) {
  if (minNumber >= 0 && maxNumber > 0 && minNumber < maxNumber) {
    return Number(((Math.random() * (maxNumber - minNumber)) + minNumber).toFixed(numbersAfterComma));
  }
  else {
    return null;
  }
}

const createMocks = function (originalArray) {
  let elementsNumber = getRandomInRange(1, originalArray.length);
  let shuffledElements = originalArray.sort(() => Math.random() - 0.5);
  let newArray = [];
  for (let i = 0; i < elementsNumber; i++) {
    newArray.push(shuffledElements[i]);
  }
  return newArray;
}

export {getRandomInRange, getRandomFloatNumber, createMocks};
