// Module Three
//
// The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:
//
// The first function export should return the result of the first module being passed into the second module.
// The second function export should return the text “Account balance: \n”.


var moduleOne = require('./module1');
var moduleTwo = require('./module2');

exports.moduleOne = function (){
  //return result of the first module being passed into the second module.
  return moduleTwo(moduleOne.randomNumber(100, 1000000));
};


exports.moduleTwo = function(){
  return "Account balance: \n";
};
