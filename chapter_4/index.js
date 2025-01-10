// Chapter 4: Functions

// Functions are the building blocks of JavaScript. They are used to encapsulate a block of code that can be executed whenever needed. Functions can take in parameters and return values. They can also be assigned to variables, passed as arguments to other functions, and returned from other functions.

// Function Declaration
function greet() {
  console.log('Hello, World!');
}

greet(); // Hello, World!

// Function Expression
const greetExp = function() {
  console.log('Hello, World!');
};

greetExp(); // Hello, World!

// Arrow Function
const greetArrow = () => {
  console.log('Hello, World!');
};

greetArrow(); // Hello, World!

// Function Parameters
function greetName(name) {
  console.log(`Hello, ${name}!`);
}

greetName('Alice'); // Hello, Alice!

// Default Parameters
const greetDefault = (name = 'luigi', time = 'morning') => {
  console.log(`Good ${time}, ${name}!`);
}

greetDefault(); // Good morning, luigi!
greetDefault('Mario', 'afternoon'); // Good afternoon, Mario!

// Return Values
const add = (a, b) => {
  return a + b;
}

const sum = add(3, 5);

console.log(sum); // 8

const calcArea = (radius) => {
  return Math.PI * radius**2;
}

const area = calcArea(5);
console.log(area); // 78.53981633974483

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i <products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2)); // 66

// Function Methods
const name = 'Mario';
//  const greetName = name.toUpperCase();
console.log(greetName); // MARIO

// Callback Functions
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
};

myFunc(value => {
  console.log(value);
}); // 50

// forEach Method
let people = ['Mario', 'Luigi', 'Yoshi', 'Peach'];

people.forEach((person, index) => {
    console.log(index, person);
});

// Map Method
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => price / 2);

console.log(salePrices); // [10, 5, 15, 12.5, 7.5, 20, 40, 2.5]

const ul = document.querySelector('.people');

const peopleList = ['Mario', 'Luigi', 'Yoshi', 'Peach'];

let html = ``;

peopleList.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
})

ul.innerHTML = html;

console.log(html); // <li style="color: purple">Mario</li><li style="color: purple">Luigi</li><li style="color: purple">Yoshi</li><li style="color: purple">Peach</li>
