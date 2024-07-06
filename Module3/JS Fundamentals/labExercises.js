// Lab 1: JavaScript Expressions
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(!true); // false
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // "  -9  5"
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(" \t \n" - 2); // -2

// Lab 2: Fixing Incorrect Expressions
let three = "3";
let four = "4";
let thirty = "30";

let addition = three + four; // "34"
let multiplication = three * four; // 12
let division = three / four; // 0.75
let subtraction = three - four; // -1

let lessThan1 = three < four; // true
let lessThan2 = thirty < four; // false

// Fix addition by converting strings to numbers
let fixedAddition = Number(three) + Number(four); // 7
console.log(fixedAddition); // 7

// Lab 3: Conditional Statements
if (0) console.log("#1 zero is true"); // Won't print
if ("0") console.log("#2 zero is true"); // Will print
if (null) console.log("null is true"); // Won't print
if (-1) console.log("negative is true"); // Will print
if (1) console.log("positive is true"); // Will print

// Lab 4: Ternary Operator
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
result += a + b < 10 ? "less than 10" : "greater than 10";
console.log(result); // "2 + 3 is less than 10"

// Lab 5: Function Syntax
// Original function
function getGreeting(name) {
  return "Hello " + name + "!";
}

// a) Function expression syntax
const getGreetingExpression = function (name) {
  return "Hello " + name + "!";
};

// b) Arrow function syntax
const getGreetingArrow = (name) => "Hello " + name + "!";

// Testing
console.log(getGreeting("John")); // Hello John!
console.log(getGreetingExpression("John")); // Hello John!
console.log(getGreetingArrow("John")); // Hello John!

// Lab 6: Object Methods and Arrow Functions
const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya", // Added lastName
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father, prepare to die."
      : "Nice to meet you.",
};

inigo.greeting(westley); // Hello Westley, my name is Inigo Montoya. Nice to meet you.
inigo.greeting(rugen); // Hello Count Rugen, my name is Inigo Montoya. You killed my father, prepare to die.

// Lab 7: Method Chaining and Object Properties
const basketballGame = {
  score: 0,
  fouls: 0, // New property to track fouls
  freeThrow() {
    this.score++;
    return this; // Enable chaining
  },
  basket() {
    this.score += 2;
    return this; // Enable chaining
  },
  threePointer() {
    this.score += 3;
    return this; // Enable chaining
  },
  foul() {
    this.fouls++;
    return this; // Enable chaining
  },
  halfTime() {
    console.log(`Halftime score is ${this.score}. Fouls: ${this.fouls}`);
    return this; // Enable chaining
  },
  fullTime() {
    console.log(`Full-time score is ${this.score}. Fouls: ${this.fouls}`);
    return this; // Enable chaining
  },
};

// Testing chaining
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime()
  .foul()
  .foul()
  .fullTime();
// Halftime score is 9. Fouls: 0
// Full-time score is 9. Fouls: 2

// Lab 8: Looping Through Object Properties
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

function printCityInfo(city) {
  for (let key in city) {
    console.log(`${key}: ${city[key]}`);
  }
}

printCityInfo(sydney);

const melbourne = {
  name: "Melbourne",
  population: 4_936_000,
  state: "VIC",
  founded: "30 August 1835",
  timezone: "Australia/Melbourne",
};

printCityInfo(melbourne);

// Lab 9: Understanding References
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

// a) Create new variables and modify them
let moreSports = teamSports;
moreSports.push("Basketball");
moreSports.unshift("Football");

let dog2 = dog1;
dog2 = "Rex";

let cat2 = cat1;
cat2.name = "Snowball";

console.log(teamSports); // ['Football', 'Hockey', 'Cricket', 'Volleyball', 'Basketball']
console.log(dog1); // 'Bingo'
console.log(cat1); // { name: 'Snowball', breed: 'Siberian' }

// e) Ensure originals remain independent
moreSports = [...teamSports];
moreSports.push("Tennis");

cat2 = { ...cat1 };
cat2.name = "Mittens";

console.log(teamSports); // ['Football', 'Hockey', 'Cricket', 'Volleyball', 'Basketball']
console.log(cat1); // { name: 'Snowball', breed: 'Siberian' }
console.log(moreSports); // ['Football', 'Hockey', 'Cricket', 'Volleyball', 'Basketball', 'Tennis']
console.log(cat2); // { name: 'Mittens', breed: 'Siberian' }

// Lab 10: Constructor Function and Class
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = function () {
    return this.age >= 16;
  };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 14);
console.log(person1); // { name: 'Alice', age: 25, human: true, canDrive: [Function] }
console.log(person2); // { name: 'Bob', age: 14, human: true, canDrive: [Function] }
console.log(person1.canDrive()); // true
console.log(person2.canDrive()); // false

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 16;
  }
}

const person3 = new PersonClass("Charlie", 18);
console.log(person3); // { name: 'Charlie', age: 18, human: true }
console.log(person3.canDrive()); // true
