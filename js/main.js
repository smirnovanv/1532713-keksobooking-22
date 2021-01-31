const getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInRange(0, 100);

//Источник кода: https://myrusakov.ru/js-random-numbers.html

const getRandomWithComa = function (minNumber, maxNumber, numbersAfterComa) {
  return ((Math.random() * (maxNumber - minNumber)) + minNumber).toFixed(numbersAfterComa);
}

getRandomWithComa(5, 6, 3);

//Источник кода: мой код
