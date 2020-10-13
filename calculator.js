function sum(a, b) {
  return a + b;
}

function celsiusToFahrenheit(temp) {
  return (temp / 5) * 9 + 32;
}

module.exports = {
  sum: sum,
  celsiusToFahrenheit: celsiusToFahrenheit,
};
