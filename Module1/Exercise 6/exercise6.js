// Step 1: Create a JSON object variable for a book
let book = {
  title: "JavaScript Basics",
  description: "A comprehensive guide to JavaScript.",
  author: "John Doe",
  pages: 250,
};

// Step 2: Print these object property values in your console individually and via the whole book object
console.log("Title:", book.title); // Output: JavaScript Basics
console.log("Description:", book.description); // Output: A comprehensive guide to JavaScript.
console.log("Author:", book.author); // Output: John Doe
console.log("Pages:", book.pages); // Output: 250
console.log("Book object:", book); // Output: { title: "JavaScript Basics", description: "A comprehensive guide to JavaScript.", author: "John Doe", pages: 250 }

// Step 3: Update the description of the book
book.description = "An in-depth look at JavaScript programming.";
console.log("Updated Description:", book.description); // Output: An in-depth look at JavaScript programming.
