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

// Unit tests for add function
console.assert(add(2, 3) === 5, "Add Test 1 Failed");
console.assert(add(-2, 3) === 1, "Add Test 2 Failed");
console.assert(add(0, 0) === 0, "Add Test 3 Failed");
console.assert(add(-1, -1) === -2, "Add Test 4 Failed");
console.assert(add(2.5, 3.5) === 6, "Add Test 5 Failed");

// Unit tests for subtract function
console.assert(subtract(5, 3) === 2, "Subtract Test 1 Failed");
console.assert(subtract(3, 5) === -2, "Subtract Test 2 Failed");
console.assert(subtract(0, 0) === 0, "Subtract Test 3 Failed");
console.assert(subtract(-1, -1) === 0, "Subtract Test 4 Failed");
console.assert(subtract(2.5, 1.5) === 1, "Subtract Test 5 Failed");

// Unit tests for multiply function
console.assert(multiply(2, 3) === 6, "Multiply Test 1 Failed");
console.assert(multiply(-2, 3) === -6, "Multiply Test 2 Failed");
console.assert(multiply(0, 3) === 0, "Multiply Test 3 Failed");
console.assert(multiply(-2, -3) === 6, "Multiply Test 4 Failed");
console.assert(multiply(2.5, 2) === 5, "Multiply Test 5 Failed");

// Unit tests for divide function
console.assert(divide(6, 3) === 2, "Divide Test 1 Failed");
console.assert(divide(-6, 3) === -2, "Divide Test 2 Failed");
console.assert(divide(0, 3) === 0, "Divide Test 3 Failed");
console.assert(divide(-6, -3) === 2, "Divide Test 4 Failed");
console.assert(divide(7.5, 2.5) === 3, "Divide Test 5 Failed");
try {
  divide(6, 0);
} catch (e) {
  console.assert(e.message === "Division by zero", "Divide Test 6 Failed");
}

// Unit tests for greet function
console.assert(greet("Samuel") === "Hello Samuel", "Greet Test 1 Failed");
console.assert(greet("John") === "Hello John", "Greet Test 2 Failed");
console.assert(greet("") === "Hello ", "Greet Test 3 Failed");
console.assert(greet("123") === "Hello 123", "Greet Test 4 Failed");
console.assert(greet("!@#") === "Hello !@#", "Greet Test 5 Failed");

console.log("All tests passed.");
