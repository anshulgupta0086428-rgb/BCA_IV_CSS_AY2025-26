
//Aggregate data using reduce()

const numbers = [53, 72, 43, 94, 85];
const mixed = [ 4, "sushant", 5.6, "prakash",2,9]
// Sum
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum: " + sum);

// Product
const product = numbers.reduce((acc, n) => acc * n, 1);
console.log("Product: " + product);

// // Concatenate with commas
// const concat = numbers.reduce((acc, n) => acc + ", " + n);
// console.log("Concatenated: " + concat);

// Find maximum
const max = numbers.reduce((acc, n) => n > acc ? n : acc);
console.log("Maximum: " + max);

// Find minimum
const min = numbers.reduce((acc, n) => n < acc ? n : acc);
console.log("Minimum: " + min);

const concat = mixed.reduce((acc, m) => acc + "=/ " + m);
console.log("Concatenated: " + concat);