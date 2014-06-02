/*global describe, it*/

'use strict';

var expect = require('chai').expect;
var traceur = require('traceur');
var Calculator = traceur.require(__dirname + '/../../app/models/calculator.js');

describe('Calculator', function(){

  describe('.add', function(){
    it('should add two numbers', function(){
      var sum = Calculator.add(2,3);
      expect(sum).to.equal(5);
    });
  });

  describe('.subtract', function(){
    it('should find the difference of two numbers', function(){
      var diff1 = Calculator.subtract(3,2);
      expect(diff1).to.equal(1);

      var diff2 = Calculator.subtract(-4,-2);
      expect(diff2).to.equal(-2);
    });
  });

  describe('.power', function(){
    it('should take x to the power of y', function(){
        var pow = Calculator.power(2,3);
        expect(pow).to.equal(8);

        var pow2 = Calculator.power(-2, 5);
        expect(pow2).to.equal(-32);

        var pow3 = Calculator.power(5,-2);
        expect(pow3).to.equal(0.04);
    });
  });

  describe('.sum', function(){
    it('should add up a list of numbers', function(){
      var sum = Calculator.sum([3,4,5]);
      expect(sum).to.equal(12);
    });
  });

  describe('.addFractions', function(){
    it('should add a list of fractions', function(){
      var sum = Calculator.addFractions([[1,2],[1,4]]);
      expect(sum).to.equal('6/8');

      var sum2 = Calculator.addFractions([[5,10],[19,23], [2,4]]);
      expect(sum2).to.equal('1680/920');

    });
  });



});
