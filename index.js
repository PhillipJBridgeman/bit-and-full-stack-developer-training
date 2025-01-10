alert("Hellow World"); // This will print a alert to the page and need to press 'OK' to close it.

console.log(1); // This will print 1 to the console in the browser.
console.log(2); // This will print 2 to the console in the browser.

// Variables
let age = 25; // This is a variable with a value of 25
let year  = 2019; // This is a variable with a value of 2019

console.log(age, year); // This will print 25 2019 to the console in the browser.

age = 30; // This will change the value of age to 30

console.log(age); // This will print 30 to the console in the browser.

const points = 100; // This is a constant variable with a value of 100 and can't be changed.

console.log(points); // This will print 100 to the console in the browser.

// points = 200; // This will throw an error because points is a constant variable and can't be changed.

// console.log(points); // This will not run because of the error above.

var a = 1;
var b = 2;
console.log(a + b); // This will print 3 to the console in the browser.

// camal case name convention
let numberOne = 3;

// Bad name convention
let numberone = 4;

// strings
console.log("Hello, World"); // This will print Hello, World to the console in the browser.

let email = 'mario@thenetninja.co.uk'; // This is a string variable with a value of

// Make names of variables descriptive and meaningful
// Comments are important to explain what the code does and document the code.
/*
Multi-line somments
*/

// JavaScript Data Types:
// Number 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// String "Hello, World"
// Boolean true / false
// Null // Empty value
// Undefined // Variable has been declared but not assigned a value
// Object // Complex data structures - Arrays, Dates, Literals
// Symbol // Used with objects

// JavaScript has dynamic typing meaning you don't have to define the data type of the variable.

// Strings
// String concatenation
let firstName = "Brandon";
let lastName = "Sanderson";

console.log(firstName + " " + lastName); // This will print John Doe to the console in the browser.

console.log(firstName[0]); // This will print B to the console in the browser.
console.log(firstName[2]); // This will print a to the console in the browser.

console.log(firstName.length); // This will print 7 to the console in the browser.

console.log(firstName.toUpperCase()); // This will print BRANDON to the console in the browser.

let result = lastName.toLowerCase(); // This will change the value of result to brandon

console.log(result); // This will print brandon to the console in the browser.

let index = email.indexOf('@'); // This will find the index of the @ symbol in the email variable.
console.log(index); // This will print 5 to the console in the browser.

// Common string methods
let email2 = email.lastIndexOf('n'); // This will find the last index of the letter n in the email variable.
console.log(email2); // This will print 17 to the console in the browser.
email2 = email.slice(0, 5); // This will get the first 5 characters of the email variable.
console.log(email2); // This will print mario to the console in the browser.
let substringResult = email.substring(0, 5); // This will get the first 5 characters of the email variable.
console.log(substringResult); // This will print mario to the console in the browser.

let replaceResult = email.replace('m', 'w'); // This will replace the first m with a w in the email variable.
console.log(replaceResult); // This will print wario@thenetninja.co.ul to the console in the browser.

// Numbers
let radius = 10; // This is a number variable with a value of 10
const pi = 3.14; // This is a constant number variable with a value of 3.14

console.log(radius, pi); // This will print 10 3.14 to the console in the browser.

// Math operators +, -, *, /, ** (power of), % (modulus), ++(increment), -- (decrament)

let num1 = 5;
let num2 = --num1; // This will decrement num1 by 1 and assign it to num2 and assign 4 to num1.
console.log(num1, num2); // This will print 4 4 to the console in the browser.

// Modulus operator
let remainder = 5 % 3;
console.log(remainder); // This will print 2 to the console in the browser.

// NaN - Not a Number
console.log(5 / 'hello'); // This will print NaN to the console in the browser.

// Concatenate numbers
let result2 = radius + pi;
console.log(result2); // This will print 13.14 to the console in the browser.

// Concatenate numbers with strings
let result3 = radius + ' ' + pi;
console.log(result3); // This will print 10 3.14 to the console in the browser.

let likes = 10;
console.log("The blog has " + likes + " likes"); // This will print The blog has 10 likes to the console in the browser.

// Template strings
const title = "Best reads of 2019";
const author = "Mario";
const likes2 = 30;

let concatenation = "The blog called " + title + " by " + author + " has " + likes2 + " likes"; // Use of concatenation
let templateString = `The blog called ${title} by ${author} has ${likes2} likes`; // Use of template strings

console.log(concatenation); // This will print The blog called Best reads of 2019 by Mario has 30 likes to the console in the browser.
console.log(templateString); // This will print The blog called Best reads of 2019 by Mario has 30 likes to the console in the browser.

// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes2} likes</span>
`;

console.log(html); // This will print the html to the console in the browser.

// Arrays
let ninjas = ['shaun', 'ryu', 'chun-li']; // This is an array variable with 3 values.   
console.log(ninjas); // This will print the array to the console in the browser.
console.log(ninjas[1]); // This will print ryu to the console in the browser.

ninjas[1] = 'ken'; // This will change the value of the second element in the array to ken.
console.log(ninjas[1]); // This will print ken to the console in the browser.

let ages = [20, 25, 30, 35]; // This is an array variable with 4 values.
console.log(ages); // This will print the array to the console in the browser.
console.log(ages[2]); // This will print 30 to the console in the browser.

let random = ['shaun', 'crystal', 30, 20]; // This is an array variable with 4 values.
console.log(random); // This will print the array to the console in the browser.
console.log(ninjas.length); // This will print 3 to the console in the browser.

// Array methods
let result4 = ninjas.join(', '); // This will join the array with a comma and a space.
console.log(result4); // This will print shaun, ryu, chun-li to the console in the browser.

let result5 = ninjas.indexOf('chun-li'); // This will find the index of chun-li in the array.
console.log(result5); // This will print 2 to the console in the browser.

let result6 = ninjas.concat(['ken', 'crystal']); // This will add ken and crystal to the array.
console.log(result6); // This will print shaun, ryu, chun-li, ken, crystal to the console in the browser.

let result7 = ninjas.push('ken'); // This will add ken to the end of the array.
console.log(result7); // This will print 4 to the console in the browser.

let result8 = ninjas.pop(); // This will remove the last element from the array.
console.log(result8); // This will print ken to the console in the browser.

// Null and undefined
let age2; // This is a variable that is undefined.
console.log(age2, age2 + 3, `The age is ${age2}`); // This will print undefined NaN The age is undefined to the console in the browser.

let age3 = null; // This is a variable that is null.
console.log(age3, age3 + 3, `The age is ${age3}`); // This will print null 3 The age is null to the console in the browser.

// Booleans and comparisons
console.log(true, false, "true", "false"); // This will print true false true false to the console in the browser.
let booleanNum1 = 5;
let booleanNum2 = 6;
console.log("Is 5 greater than 6: ", booleanNum1 > booleanNum2); // This will print false to the console in the browser.

// Boolean Methods
let email3 = 'luigi@thenetninja.co.uk';
let result9 = email3.includes('@'); // This will check if the email variable includes the @ symbol.
console.log(result9); // This will print true to the console in the browser.

let names = ['mario', 'luigi', 'toad'];
let result10 = names.includes('luigi'); // This will check if the names array includes luigi.
console.log(result10); // This will print true to the console in the browser.

// Comparison operators
let age4 = 25;
console.log(age4 == 25); // This will print true to the console in the browser.
console.log(age4 == 30); // This will print false to the console in the browser.
console.log(age4 != 30); // This will print true to the console in the browser.
console.log(age4 != 25); // This will print false to the console in the browser.
console.log(age4 > 20); // This will print true to the console in the browser.
console.log(age4 < 20); // This will print false to the console in the browser.
console.log(age4 <= 25); // This will print true to the console in the browser.
console.log(age4 >= 25); // This will print true to the console in the browser.

let name = 'shaun';
console.log(name == 'shaun'); // This will print true to the console in the browser.
console.log(name == 'Shaun'); // This will print false to the console in the browser.
console.log(name > 'Crystal'); // This will print true to the console in the browser.
console.log(name > 'Shaun'); // This will print true to the console in the browser.

// Loose comparison (different types can still be equal)

console.log(age4 == 25); // This will print true to the console in the browser.
console.log(age4 == '25'); // This will print true to the console in the browser.
console.log(age4 != '25'); // This will print false to the console in the browser.

// Strict comparison (different types cannot be equal)
console.log(age4 === '25'); // This will print false to the console in the browser.
console.log(age4 === 25); // This will print true to the console in the browser.
console.log(age4 !== '25'); // This will print true to the console in the browser.
console.log(age4 !== 25); // This will print false to the console in the browser.

// Type conversion
let score = '100';
console.log(score + 1); // This will print 1001 to the console in the browser.

// Convert the score variable to a number
score = Number(score); // Explicit conversion
console.log(score + 1); // This will print 101 to the console in the browser.

// Implicit conversion
let result11 = Number('hello'); // This will print NaN to the console in the browser.
console.log(result11); // This will print NaN to the console in the browser. 

let result12 = String(50); // This will convert the number 50 to a string.
console.log(result12, typeof result12); // This will print 50 string to the console in the browser.

let result13 = Boolean(100); // This will convert the number 100 to a boolean.
console.log(result13, typeof result13); // This will print true boolean to the console in the browser.

let result14 = Boolean(0); // This will convert the number 0 to a boolean.
console.log(result14, typeof result14); // This will print false boolean to the console in the browser.

// The reason why 0 is false is because 0 is a falsy value and 1 is a truthy value.
// Falsy values: 0, '', null, undefined, NaN
// Truthy values: Everything else

// Control flow
// Loops in JavaScript are a way to repeat code until a certain condition is met usually a boolean value or condition.
// If statements are used to make decisions in code based on a condition.

// For loops
// for(initial value; condition; increment)
for (let i = 0; i <= 5; i++) { //  { is the start of the code block and } is the end of the code block.
    console.log('in for loop:', i);
}
console.log('loop finished');

// While loops
// While loops are used to repeat code while a certain condition is true.
// Sometimes the condition is true and the loop runs forever. Infinite Loop
// while(condition) syntax.

// Loops are used to iterate over arrays and objects, and/or data structures.
// Loops are critical part of the control flow in JavaScript.

const names2 = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names2.length; i++) {
    let html = `<div>${names2[i]}</div>`;
    console.log(html);
}

let i = 0;
while(i < names2.length) {
    let html = `<div>${names2[i]}</div>`;
    console.log(html);
    i++;
} // Value of i is 3, so need to reset value of i to 0.

i = 0; // Reset the value of i to 0
do{
    console.log('val of i is: ', i);
    i++;
}while(i < 5);

// If statements
// If statements are used to make decisions in code based on a condition.
const age5 = 26;
if (age5 > 20) {
    console.log('You are over 20 years old');
}

const ninjas2 = ['shaun', 'ryu', 'chun-li', 'ken'];
if (ninjas2.length > 3) {
    console.log("That's a lot of ninjas");
}

const password = 'password123'
if (password.length >= 12) {
    console.log('That password is mighty strong');
} else if (password.length >= 8) {
    console.log('That password is long enough');
} else {
    console.log('Password is not long enough');
}

// Logical operators - OR || and AND &&
const password2 = 'p@ssword1234';
if (password2.length >= 12 && password2.includes('@')) {
    console.log('That password is mighty strong');
} else if (password2.length >= 8 || password2.includes('@') && password2.length >= 5) {
    console.log('That password is strong enough');
} else {
    console.log('Password is not strong enough');
}

// Logical NOT (!)
let user = false;
if (!user) {
    console.log('You must be logged in to continue');
}

// Break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }
    console.log('Your score: ', scores[i]);
    if (scores[i] === 100) {
        console.log('Congrats, you got the top score!');
        break;
    }
}

// Switch statements
const grade = 'D';
switch(grade) {
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('Not a valid grade');
}

// Global Scope
let age6 = 30;
if (true) {
    let age6 = 40;
    let name = 'shaun';
    console.log('Inside 1st code block: ', age6, name);

    if (true) {
        let age6 = 50;
        console.log('Inside 2nd code block: ', age6);
        var test = 'hello';
    }
}
console.log('Outside code block: ', age6, name);

// Functions
// Functions are reusable blocks of code that can be called to perform a task multiple times.
// Functions are defined using the function keyword followed by a name, parentheses, and curly braces.
// There are two types of functions: function declarations and function expressions.
// In ES6, arrow functions were introduced as a new way to write functions.
// Functions can take parameters which are values passed into the function.
// Functions can return a single, multipe, or object values.
// Functions can be invoked or called using parentheses.
// Functions can be stored in variables and passed around as arguments to other functions.
// Functions can be invoked immediately after they are defined.

// Function declaration
function greet() {
    console.log('Hello there');
}

// Calling the function
greet();

const speak = function() {
    console.log('Good day!');
}

speak();
speak();
speak();

// Hoisting funiction declarations
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope.

// Arguments and parameters
const speak2 = function(name = 'luigi', time = 'night') { // Setting default values for the parameters
    console.log(`Good ${time} ${name}`);
}

speak2();
speak2('mario', 'morning');

// Returning values
const calcArea = function(radius) {
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log('Area is: ', area);

// Arrow functions
const calcArea2 = radius => 3.14 * radius**2;

const area2 = calcArea2(5);
console.log('Area is: ', area2);

// Regular function
const greet2 = () => 'Hello, World';
console.log(greet2());

const bill = (product, tax) => {
    let total = 0;
    for (let i = 0; i < product.length; i++) {
        total += product[i] + product[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));

// Call Back Functions

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}

myFunc(value => {
    console.log(value);
});

// forEach method
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}
people.forEach(logPerson);

// Using functions with HTML and the DOM
const ul = document.querySelector('.people');

const people2 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach((person) => {
    ul.innerHTML += `<li style="color: purple">${person}</li>`
})
