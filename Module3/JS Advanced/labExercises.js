// 1. makeCounter
function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter(10, 2);
counter2(); // 12
counter2(); // 14

// 2. delayMsg function
function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

// Arrow function version
const delayMsgArrow = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

const timeoutId = setTimeout(delayMsgArrow, 10000, "#5: Delayed by 10000ms");
clearTimeout(timeoutId); // Prevents the fifth test from printing

// 3. Debounce function
function debounce(func, ms = 1000) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), ms);
  };
}

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("call 1"), 100);
setTimeout(() => printMe("call 2"), 200);
setTimeout(() => printMe("call 3"), 300);

// 4. Fibonacci sequence
function printFibonacci(limit) {
  let [a, b] = [0, 1];
  let count = 0;
  const intervalId = setInterval(() => {
    if (count >= limit) {
      clearInterval(intervalId);
      return;
    }
    console.log(b);
    [a, b] = [b, a + b];
    count++;
  }, 1000);
}

function printFibonacciTimeouts(limit) {
  let [a, b] = [0, 1];
  let count = 0;
  function nextFibonacci() {
    if (count >= limit) return;
    console.log(b);
    [a, b] = [b, a + b];
    count++;
    setTimeout(nextFibonacci, 1000);
  }
  nextFibonacci();
}

printFibonacci(10);
printFibonacciTimeouts(10);

// 5. car object with setTimeout
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

car.description(); // works

setTimeout(() => car.description(), 200); // fixed with wrapper function

// Clone the car object and change the year
let newCar = { ...car, year: 2021 };
setTimeout(() => newCar.description(), 200); // uses new values

// Use bind to fix the description method
let boundDescription = car.description.bind(car);
setTimeout(boundDescription, 200); // fixed with bind

// Change another property and test with bind
newCar = { ...car, make: "Ferrari" };
setTimeout(boundDescription, 200); // still uses bound values from original car

// 6. Function prototype delay
Function.prototype.delay = function (ms) {
  return (...args) => {
    setTimeout(() => this.apply(this, args), ms);
  };
};

function multiply(a, b) {
  console.log(a * b);
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// Improved delay function to support any number of parameters
Function.prototype.delay = function (ms) {
  return (...args) => {
    setTimeout(() => this.apply(this, args), ms);
  };
};

multiply.delay(500)(5, 5, 2, 1); // prints 50 after 500 milliseconds

// 7. Custom toString methods
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

Person.prototype.toString = function () {
  return `${this.name}, ${this.age} years old, ${this.gender}`;
};

const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); // James Brown, 73 years old, male

function Student(name, age, gender, cohort) {
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.toString = function () {
  return `${this.name}, ${this.age} years old, ${this.gender}, cohort: ${this.cohort}`;
};

const student1 = new Student("Anna Smith", 22, "female", "2024");
const student2 = new Student("Tom Hanks", 25, "male", "2023");
console.log("student1: " + student1); // Anna Smith, 22 years old, female, cohort: 2024
console.log("student2: " + student2); // Tom Hanks, 25 years old, male, cohort: 2023

// 8. DigitalClock class
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

const myClock = new DigitalClock("my clock:");
myClock.start();

// PrecisionClock class
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

// AlarmClock class
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

    if (`${hours}:${mins}` === this.wakeupTime) {
      console.log("Wake Up");
      this.stop();
    }
  }
}

const precisionClock = new PrecisionClock("precise clock:", 500);
precisionClock.start();

const alarmClock = new AlarmClock("alarm clock:", "07:00");
alarmClock.start();

// 9. Promise-based random delay
function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 20000) + 1000;
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

randomDelay()
  .then((delay) => console.log(`Resolved after ${delay}ms`))
  .catch((delay) => console.log(`Rejected after ${delay}ms`));

// 10. Fetch function with async/await
import fetch from "node-fetch";

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

async function fetchMultipleURLs(urls) {
  try {
    const fetchPromises = urls.map((url) => fetchURLData(url));
    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    throw error;
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

fetchMultipleURLs(urls)
  .then((results) => console.log(results))
  .catch((error) => console.error(error.message));
