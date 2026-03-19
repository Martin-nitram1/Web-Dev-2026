let sentence = "JavaScript is awesome!";
console.log(sentence.toUpperCase());

let words = sentence.split(" ");
console.log(words);

let newSentence = sentence.replace("awesome", "powerful");
console.log(newSentence);

console.log(sentence.includes("JavaScript"));

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log("Number:", num);
});