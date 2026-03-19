let tasks = ["Do laundry", "Study JavaScript"];
console.log(tasks);  // Output: ["Do laundry", "Study JavaScript"]

tasks.push("Walk the dog");
console.log(tasks);  // Output: ["Do laundry", "Study JavaScript", "Walk the dog"]

tasks[1] = "Master Javascript";
console.log(tasks);  // Output: ["Do laundry", "Master Javascript", "Walk the dog"]

tasks.splice(0, 1);
console.log(tasks);  // Output: ["Master Javascript", "Walk the dog"]   

