// libraries/calculator.js

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Division by zero is not allowed");
    }
  }
}

module.exports = Calculator;
