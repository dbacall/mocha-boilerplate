let chai = require('chai');
let should = chai.should();
const { expect } = require('chai');
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

    it('should work when the argument is negative', () => {
      let res = calc.celsiusToFahrenheit(-10);
      res.should.be.equal(14);
    });

    it('should throw an error if the argument is not a number', () => {
      expect(function () {
        calc.celsiusToFahrenheit('fasa');
      }).to.throw(TypeError, 'Argument must be a number!');
    });

    it('should throw an error if the argument is nothing', () => {
      expect(function () {
        calc.celsiusToFahrenheit();
      }).to.throw(Error, 'You must enter a number!');
    });
  });
});
