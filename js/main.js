const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange(0, 100);

//Источник кода: https://myrusakov.ru/js-random-numbers.html

const getRandomWithComma = function (minNumber, maxNumber, numbersAfterComma) {
  return Number(((Math.random() * (maxNumber - minNumber)) + minNumber).toFixed(numbersAfterComma));
}

getRandomWithComma(5, 5.005, 3);

//Источник кода: мой код
