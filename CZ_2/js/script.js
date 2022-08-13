// Zadanie1

const name = 'Szymon';
let age;
age = 23;
let dish = 'pizza'

console.log(`Name: ${name}, Age: ${age}, Fav Dish: ${dish}`)

// Zadanie2

let score = 15 % 2 === 1;
console.log(score);

let num1 = 8;
num1 += 2;
console.log(num1)

let X = 5;
let Y = 10;

console.log(X * Y);
console.log(X / Y);

//Zadanie 3

let tabOfNumbers = [1, 2, 3, 4, 5, 6];

for (let i = 0 ; i < tabOfNumbers.length ; i++) {
    console.log(tabOfNumbers[i]);
}

function foo (x, y, z) {
    console.log(x + y * z);
}

foo(1,2,3);

if (tabOfNumbers.length > 5) {
    console.log("TRUE");
} else {
    console.log("FALSE")
}