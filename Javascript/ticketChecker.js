let userAge = 20;

if (userAge < 5) {
    console.log("Free Entry!");
} else if (userAge >= 5 && userAge <= 12) {
    console.log("Child ticket: $10");
} else if (userAge >= 13 && userAge <= 64) {
    console.log("Adult ticket: $20");
} else {
    console.log("Senior ticket: $15");
}

let vipAccess = true;

let vipMessage = vipAccess ? "VIP access granted!" : "You do not have VIP access.";
console.log(vipMessage);