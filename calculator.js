function sum(a, b) {
  return a + b;
}

function celsiusToFahrenheit(temp) {
  if (!temp) {
    throw new Error('You must enter a number!');
  }
  if (isNaN(temp)) {
    throw new TypeError('Argument must be a number!');
  }
  if (temp < -273.15) {
    throw new Error(
      'Absolute zero is 273.15 Celsius, input something the same or higher.'
    );
  }
  return (temp / 5) * 9 + 32;
}

module.exports = {
  sum: sum,
  celsiusToFahrenheit: celsiusToFahrenheit,
};
