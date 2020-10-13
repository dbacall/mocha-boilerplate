let chai = require('chai');
let should = chai.should();
let calc = require('../calculator');

describe('Calculator Functions', () => {
  describe('sum()', () => {
    it('should return the sum of two numbers', () => {
      let res = calc.sum(5, 3);
      res.should.be.equal(8);
    });
  });

  describe('celsiusToFahrenheit()', () => {
    it('should return the correct temperature in fahrenheit', () => {
      let res = calc.celsiusToFahrenheit(20);
      res.should.be.equal(68);
    });

    it('should work when the returned value is a decimal', () => {
      let res = calc.celsiusToFahrenheit(1);
      res.should.be.equal(33.8);
    });

    it('should work when the argument is a decimal', () => {
      let res = calc.celsiusToFahrenheit(1.5);
      res.should.be.equal(34.7);
    });
  });
});
