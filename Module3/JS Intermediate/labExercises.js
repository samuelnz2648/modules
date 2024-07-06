// 1. Function to capitalize first letters of each word
function ucFirstLetters(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles")); // Los Angeles

// 2. Truncate function
function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

console.log(truncate("This text will be truncated if it is too long", 25)); // This text will be truncat...

// 3. Array manipulations
const animals = ["Tiger", "Giraffe"];
animals.push("Elephant", "Lion");
animals.unshift("Zebra", "Monkey");
animals.sort();

function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}

function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
}

replaceMiddleAnimal("Panther");
console.log(findMatchingAnimals("t")); // [ 'Tiger' ]

// 4. CamelCase function
function camelCase(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelCase("margin-left")); // marginLeft

// 5. Decimal operations
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`); // 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); // 0.200.10

function currencyAddition(float1, float2) {
  return parseFloat((float1 + float2).toFixed(2));
}

function currencyOperation(float1, float2, operation) {
  let result;
  switch (operation) {
    case "+":
      result = float1 + float2;
      break;
    case "-":
      result = float1 - float2;
      break;
    case "*":
      result = float1 * float2;
      break;
    case "/":
      result = float1 / float2;
      break;
    default:
      return null;
  }
  return parseFloat(result.toFixed(2));
}

console.log(currencyAddition(0.1, 0.2)); // 0.3
console.log(currencyOperation(0.1, 0.2, "+")); // 0.3

// 6. Unique function
function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

// 7. Book array functions
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book ? book.title : null;
}

function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}

function addGenre() {
  return books.map((book) => ({ ...book, genre: "classic" }));
}

function getTitles(authorInitial) {
  return books
    .filter((book) => book.author.startsWith(authorInitial))
    .map((book) => book.title);
}

function latestBook() {
  let latest = books[0];
  books.forEach((book) => {
    if (book.year > latest.year) {
      latest = book;
    }
  });
  return latest;
}

console.log(getBookTitle(1)); // The Great Gatsby
console.log(getOldBooks()); // Books before 1950
console.log(addGenre()); // All books with genre 'classic'
console.log(getTitles("G")); // ['1984']
console.log(latestBook()); // { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

// 8. PhoneBook Maps
const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map([
  ["David", "0412345678"],
  ["Edward", "0423456789"],
  ["Felicity", "0434567890"],
]);

phoneBookABC.set("Caroline", "0455221182");

function printPhoneBook(contacts) {
  contacts.forEach((value, key) => console.log(`${key}: ${value}`));
}

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

printPhoneBook(phoneBook);
console.log([...phoneBook.keys()]);

// 9. Salaries object operations
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

function topEarner(salaries) {
  let maxSalary = 0;
  let maxName = "";
  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}

console.log(sumSalaries(salaries)); // Total salaries
console.log(topEarner(salaries)); // Name of top earner

// 10. Date object operations
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

console.log(
  today.getHours() * 60 +
    today.getMinutes() +
    " minutes have passed so far today"
);
console.log(
  today.getHours() * 3600 +
    today.getMinutes() * 60 +
    today.getSeconds() +
    " seconds have passed so far today"
);

function getAge(birthDate) {
  const now = new Date();
  const diff = now - new Date(birthDate);
  const ageDate = new Date(diff);
  return `I am ${Math.abs(
    ageDate.getUTCFullYear() - 1970
  )} years, ${ageDate.getUTCMonth()} months and ${
    ageDate.getUTCDate() - 1
  } days old`;
}

console.log(getAge("2000-01-01"));

function daysInBetween(date1, date2) {
  const diff = Math.abs(new Date(date1) - new Date(date2));
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

console.log(daysInBetween("2024-01-01", "2024-12-31")); // Days between dates
