let a = 0;
let b = 440;

function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};
function multiply(a, b) {
    return a * b;
};
function divide(a, b) {
    if (b === 0 || a === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
};

console.log("Addition:", add(a, b)); // Output: 8
console.log("Subtraction:", subtract(a, b)); // Output: -2
console.log("Multiplication:", multiply(a, b)); // Output: 15
console.log("Division:", divide(a, b)); // Output: 0.6