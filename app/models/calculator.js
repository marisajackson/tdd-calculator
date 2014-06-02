/*jshint unused:false*/
'use strict';

class Calculator {
  static add(x, y){
    return x + y;
  }
  static subtract(x,y){
    return x - y;
  }

  static power(x,y){
    return Math.pow(x,y);
  }
  static sum(array){
    var total = array.reduce(function(prev,curr){
      return prev + curr;
    },0);

    return total;
  }

  static addFractions(array){
    var denominator = 1;
    array.forEach(x=>{
      denominator *= x[1];
    });

    var newArray = array.map(x=>{
      return (x[0]/x[1]);
    });

    var total = newArray.reduce(function(prev,curr){
      return prev + curr;
    },0);

    var numerator = total * denominator;

    return `${numerator}/${denominator}`;
  }
}

module.exports = Calculator;

//Im doing it!
