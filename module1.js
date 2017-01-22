// Module One
//
// The first module will export a function that returns a random number after taking in a min and max value as arguments. When you call this module, use 100 as your min, and 1000000 as your max.

var moduleOne = {
  randomNumber: function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
};


module.exports = moduleOne;
