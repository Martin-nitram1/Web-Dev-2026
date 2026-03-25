function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(diceRoll()); // Example usage: rolls a six-sided die and prints the result

let date = new Date();
console.log(`Current date and time: ${date.toLocaleString()}`); // Prints the current date and time in a readable format