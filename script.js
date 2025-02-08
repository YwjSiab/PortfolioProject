const userName = "John Doe"; // String
let userAge = 25; // Number
const isStudent = true; // Boolean

console.log(typeof userName); // Expected output: string
console.log(typeof userAge); // Expected output: number
console.log(typeof isStudent); // Expected output: boolean

const num1 = 10;
const num2 = 5;

// Arithmetic Operations
const sum = num1 + num2;
const product = num1 * num2;

// Logical Operation
const isAdult = userAge > 18 && isStudent === false;

// Conditional (ternary) operator
const category = userAge > 18 ? "Adult" : "Minor";

console.log("Sum:", sum);
console.log("Product:", product);
console.log("Is adult:", isAdult);
console.log("Category:", category);

const implicitConversion = "5" + 3; // JavaScript converts 3 to string: "53"
console.log("Implicit conversion:", implicitConversion);

const explicitNumber = Number("42"); // Converts string "42" to number
const explicitString = String(100); // Converts number 100 to string
const explicitBoolean = Boolean(1); // Converts 1 to true

console.log("Explicit Number:", explicitNumber);
console.log("Explicit String:", explicitString);
console.log("Explicit Boolean:", explicitBoolean);