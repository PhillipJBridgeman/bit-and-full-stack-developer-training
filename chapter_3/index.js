// Control flow
// For loops
for (let i = 0; i < 5; i++) {
    console.log("in loop:", i);
}
console.log("loop finished");

// While loops
let i = 0; 
while (i < 5) {
    console.log("in loop:", i);
    i++;
}
console.log("loop finished");

// Do while loops
let j = 5;
do {
    console.log("in loop:", j);
    j++;
} while (j < 5);

// If statements
const ageIf = 25;
if (ageIf > 20) {
    console.log("You are over 20 years old.");
}

const ninjasIf = ["shaun", "ryu", "chun-li", "ken"];
if (ninjasIf.length > 3) {
    console.log("That's a lot of ninjas.");
}

const password = "p@ssword";
if (password.length >= 8) {
    console.log("That password is long enough.");
}

// Else if statements
const passwordElse = "p@ss";
if (passwordElse.length >= 12) {
    console.log("That password is mighty strong.");
}
else if (passwordElse.length >= 8) {
    console.log("That password is long enough.");
}
else {
    console.log("That password is not long enough.");
}

// Logical operators - OR || and AND &&
const passwordLogical = "p@ss";
if (passwordLogical.length >= 12 && passwordLogical.includes("@")) {
    console.log("That password is mighty strong.");
}
else if (passwordLogical.length >= 8 || passwordLogical.includes("@") && passwordLogical.length >= 5) {
    console.log("That password is strong enough.");
}
else {
    console.log("That password is not strong enough.");
}

// Logical NOT (!)
let user = false;
if (!user) {
    console.log("You must be logged in to continue.");
}

// Break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }

    console.log("Your score:", scores[i]);

    if (scores[i] === 100) {
        console.log("Congratulations, you got the top score!");
        break;
    }
}

// Switch statements
const grade = "D";
switch (grade) {
    case "A":
        console.log("You got an A!");
        break;
    case "B":
        console.log("You got a B!");
        break;
    case "C":
        console.log("You got a C!");
        break;
    case "D":
        console.log("You got a D!");
        break;
    case "E":
        console.log("You got an E!");
        break;
    default:
        console.log("Not a valid grade.");
}

// Variables and block scope
let ageScope = 30; // This is a global variable.
if (true) {
    let ageScope = 40; // This is a local variable.
    let nameScope = "shaun"; // This is a local variable.
    console.log("inside 1st code block:", ageScope, nameScope);
    if (true) {
        let ageScope = 50; // This is a local variable.
        console.log("inside 2nd code block:", ageScope);
        var test = "hello"; // This is a global variable.
    }
}