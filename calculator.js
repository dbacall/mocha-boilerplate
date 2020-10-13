function sum(a, b) {
  return a + b;
}

function celsiusToFahrenheit(temp) {
  if (isNaN(temp)) {
    throw new TypeError('Argument must be a number!');
  }
  return (temp / 5) * 9 + 32;
}

module.exports = {
  sum: sum,
  celsiusToFahrenheit: celsiusToFahrenheit,
};
