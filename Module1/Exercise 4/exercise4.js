/*
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/*
 * Subtracts the second number from the first number.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of a - b.
 */
function subtract(a, b) {
  return a - b;
}

/*
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/*
 * Divides the first number by the second number.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of a / b.
 * @throws Will throw an error if the second number is zero.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

/*
 * Greets a person by name.
 * @param {string} name - The name of the person.
 * @returns {string} The greeting message.
 */
function greet(name) {
  return "Hello " + name;
}
