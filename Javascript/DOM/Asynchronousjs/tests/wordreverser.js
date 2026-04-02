function reverseString(str) {

    let reversed = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        
        reversed += str[i]; // Append each character followed by a newline
    }
    return reversed;
}

console.log(reverseString("Martin")); // Example usage: reverses the string "Martin" and prints each character on a new line

console.log(reverseString("I will be the best at all i do, as God is my Helper and withness!"));