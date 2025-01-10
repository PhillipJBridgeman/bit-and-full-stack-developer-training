alert("Hello World"); // This will display an alert box with the message "Hello World"
console.log(1); // This will display 1 in the console
console.log(2); // This will display 2 in the console

// console.log will print things to the console in developer tools.

// Variables
let age = 25; // A variable called age saves the value 25 to memory, but using let means it can be changed later.

let year = 2019; // A variable called year saves the value 2019 to memory.

console.log(age, year); // This will display 25 2019 in the console.

const points = 100; // A constant called points saves the value 100 to memory, but using const means it can't be changed later.
// points = 50; This will throw an error because you can't change a constant.
console.log(points); // This will display 100 in the console.

// var is the old way of declaring variables, and is not recommended.
var score = 75; // A variable called score saves the value 75 to memory, but using var means it can be changed later.
console.log(score); // This will display 75 in the console.

// In JavaScript, using camelCase is the standard way of naming variables.
// Variables can't start with a number, and can't contain spaces or special characters except for _ and $.
// JavaScript has reserved words that can't be used as variable names, such as let, const, var, function, etc.
// Older browsers may not support let and const, so var is still used in some cases.
// Link to https://www.w3schools.com/js/js_reserved.asp

// Data Types
// Strings: Text like "Hello World", "Name", "mario@thenetninja.co.uk"
// Numbers: Numbers like 1, 2, 3, 100, 1000, 10.1134, 1543.0001
// Boolean: True or False
// Null: Sets the value to null or nothing
// Undefined: No value has been assigned
// Object: Complex data structures - Arrays, Dates, Literals, key-value pairs, etc...
// Symbol: Unique identifiers

// Strings
console.log("Hello, World!"); // This will display Hello, World! in the console.
let email = "mario@thenetninja.co.uk"; // A variable called email saves the value
console.log(email); // This will display

// String concatenation
let firstName = "Brandon";
let lastName = "Sanderson";

let fullName = firstName + " " + lastName; // This will concatenate the two strings together with a space in between.
console.log(fullName); // This will display Brandon Sanderson in the console.

// Getting characters
console.log(fullName[0]); // This will display B in the console.

// String length
console.log(fullName.length); // This will display 15 in the console.

// String methods
console.log(fullName.toUpperCase()); // This will display BRANDON SANDERSON in the console.
let result = fullName.toLowerCase(); // This will save brandon sanderson to the result variable.
console.log(result); // This will display brandon sanderson in the console.


let index = email.indexOf("@"); // This will save the index of the @ symbol in the email variable to the index variable.
console.log(index); // This will display 5 in the console.

// Common string methods
result = email.lastIndexOf("n"); // This will save the index of the last n in the email variable to the result variable.
console.log(result); // This will display 14 in the console.

result = email.slice(0, 5); // This will save the first 5 characters of the email variable to the result variable.
console.log(result); // This will display mario in the console.

result = email.substr(6, 10); // This will save 10 characters starting from the 6th character of the email variable to the result variable.
console.log(result); // This will display @thenetnin in the console.

result = email.replace("m", "w"); // This will replace the first m in the email variable with a w and save it to the result variable.
console.log(result); // This will display

// Numbers
let radius = 10; // A variable called radius saves the value 10 to memory.
const pi = 3.14; // A constant called pi saves the value 3.14 to memory.

// Math operators +, -, *, /, **, %
console.log(10 / 2); // This will display 5 in the console.
result = radius % 3; // This will save the remainder of dividing radius by 3 to the result variable.
console.log(result); // This will display 1 in the console.

let likes = 10; // A variable called likes saves the value 10 to memory.
likes++; // This will increment the likes variable by 1.
console.log(likes); // This will display 11 in the console.
likes--; // This will decrement the likes variable by 1.
console.log(likes); // This will display 10 in the console.
likes += 10; // This will increment the likes variable by 10.
console.log(likes); // This will display 20 in the console.
likes -= 5; // This will decrement the likes variable by 5.
console.log(likes); // This will display 15 in the console.
likes *= 2; // This will multiply the likes variable by 2.
console.log(likes); // This will display 30 in the console.
likes /= 3; // This will divide the likes variable by 3.
console.log(likes); // This will display 10 in the console.

result = 'the blog has ' + likes + ' likes'; // This will concatenate the string with the likes variable.
console.log(result); // This will display the blog has 10 likes in the console.

// Template strings
const title = "Best reads of 2019";
const author = "Mario";
const likesBlog = 30;
console.log("The blog called " + title + " by " + author + " has " + likesBlog + " likes."); // This will display The blog called Best reads of 2019 by Mario has 30 likes. in the console.

result = `The blog called ${title} by ${author} has ${likesBlog} likes.`; // This will use template strings to display the same message.
console.log(result); // This will display The blog called Best reads of 2019 by Mario has 30 likes. in the console.

// Creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likesBlog} likes.</span>
`;

console.log(html); // This will display the html template in the console.

// Arrays
let ninjas = ["shaun", "ryu", "chun-li"]; // An array called ninjas saves the values shaun, ryu, chun-li to memory.
console.log(ninjas); // This will display ["shaun", "ryu", "chun-li"] in the console.
console.log(ninjas[1]); // This will display ryu in the console.

ninjas[1] = "ken"; // This will change the value of the second element in the ninjas array to ken.
console.log(ninjas[1]); // This will display ken in the console.

let ages = [20, 25, 30, 35]; // An array called ages saves the values 20, 25, 30, 35 to memory.
console.log(ages); // This will display [20, 25, 30, 35] in the console.

let random = ["shaun", "crystal", 30, 20]; // An array called random saves the values shaun, crystal, 30, 20 to memory.
console.log(random); // This will display ["shaun", "crystal", 30, 20] in the console.

console.log(ninjas.length); // This will display 3 in the console.

// Array methods
result = ninjas.join(", "); // This will join the elements of the ninjas array with a comma and space in between.
console.log(result); // This will display shaun, ken, chun-li in the console.

result = ninjas.indexOf("chun-li"); // This will save the index of chun-li in the ninjas array to the result variable.
console.log(result); // This will display 2 in the console.

result = ninjas.concat(["ken", "crystal"]); // This will concatenate the ninjas array with the ken and crystal arrays and save it to the result variable.
console.log(result); // This will display ["shaun", "ken", "chun-li", "ken", "crystal"] in the console.

result = ninjas.push("ken"); // This will add ken to the end of the ninjas array and save the new length to the result variable.
console.log(result); // This will display 4 in the console.

result = ninjas.pop(); // This will remove the last element of the ninjas array and save it to the result variable.
console.log(result); // This will display ken in the console.

// Null and Undefinded
let ageNew; // A variable called ageNew saves the value undefined to memory.
console.log(ageNew, ageNew + 3, `the age is ${ageNew}`); // This will display undefined NaN the age is undefined in the console.

let ageNull = null; // A variable called ageNull saves the value null to memory.
console.log(ageNull, ageNull + 3, `the age is ${ageNull}`); // This will display null 3 the age is null in the console.

// Booleans and comparisons
console.log(true, false, "true", "false"); // This will display true false true false in the console.

// Methods can return booleans
email = "mario@thenetninja.co.uk";
result = email.includes("@"); // This will save true to the result variable.
console.log(result); // This will display true in the console.

let names = ["mario", "luigi", "toad"];
result = names.includes("luigi"); // This will save true to the result variable.
console.log(result); // This will display true in the console.

// Comparison operators
let ageComparison = 25;
console.log(ageComparison == 25); // This will display true in the console.
console.log(ageComparison == 30); // This will display false in the console.
console.log(ageComparison != 30); // This will display true in the console.
console.log(ageComparison != 25); // This will display false in the console.
console.log(ageComparison > 20); // This will display true in the console.
console.log(ageComparison < 20); // This will display false in the console.
console.log(ageComparison <= 25); // This will display true in the console.
console.log(ageComparison >= 25); // This will display true in the console.

let nameComparison = "shaun";
console.log(nameComparison == "shaun"); // This will display true in the console.
console.log(nameComparison == "Shaun"); // This will display false in the console.
console.log(nameComparison > "crystal"); // This will display true in the console.
console.log(nameComparison > "Shaun"); // This will display true in the console.
console.log(nameComparison > "Crystal"); // This will display false in the console.

// Loose comparison (different types can still be equal)
console.log(ageComparison == 25); // This will display true in the console.
console.log(ageComparison == "25"); // This will display true in the console.

// Strict comparison (different types can't be equal)
console.log(ageComparison === 25); // This will display true in the console.
console.log(ageComparison === "25"); // This will display false in the console.

// Type conversion
let scoreConversion = "100";
console.log(scoreConversion + 1); // This will display 1001 in the console.
scoreConversion = Number(scoreConversion); // This will convert the scoreConversion variable to a number.
console.log(scoreConversion + 1); // This will display 101 in the console.

let resultConversion = Number("hello"); // This will save NaN to the resultConversion variable.
console.log(resultConversion); // This will display NaN in the console.

resultConversion = String(50); // This will save 50 to the resultConversion variable.
console.log(resultConversion, typeof resultConversion); // This will display 50 string in the console.

resultConversion = Boolean(100); // This will save true to the resultConversion variable.
console.log(resultConversion, typeof resultConversion); // This will display true boolean in the console.

resultConversion = Boolean(0); // This will save false to the resultConversion variable.
console.log(resultConversion, typeof resultConversion); // This will display false boolean in the console.

resultConversion = Boolean("0"); // This will save true to the resultConversion variable.
console.log(resultConversion, typeof resultConversion); // This will display true boolean in the console.

resultConversion = Boolean(""); // This will save false to the resultConversion variable.
console.log(resultConversion, typeof resultConversion); // This will display false boolean in the console.

