// Step 1: Create an array with 5 elements
let arr = [1, 2, 3, 4, 5];
console.log("Initial array:", arr);

// Step 2: Replace the value of the element at position 1 and 4
arr[1] = 20;
arr[4] = 50;
console.log("After replacing elements at positions 1 and 4:", arr);

// Step 3: Add a new element to the beginning of the array
arr.unshift(0);
console.log("After adding a new element to the beginning:", arr);

// Step 4: Remove the element at the end of the array
arr.pop();
console.log("After removing the element at the end:", arr);

// Step 5: Print the array to the console
console.log("Final array:", arr);
