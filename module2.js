// Module Two

// The second module should accept a number and convert it to a USD value.
var moduleTwo = function (number) {
  return number.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

module.exports = moduleTwo;
