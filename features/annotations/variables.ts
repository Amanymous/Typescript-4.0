let apples = 5;
let speed = 'fast';
let hasName = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// this is called annotations before declaring a variable we have to set its type
// for example number,string and boolean

// object literals annotations
// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {}
let car: Car = new Car();

// object literal

let point: { x: string; y: number } = {
  x: 'ndjwefg',
  y: 20,
};

// function

const loNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
// type annotions ma ap type bataty ho
// type inference ma typescript guess the type

// when to use annotations
// 1)function that returns the 'any' type

const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// fixing any type

// jahan intilaztion or decleration ho ausko type inference kehty hain
// example: const color = 'red';

// Delayed initilization
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

console.log(foundWord);

// when inference doesnot work

// 3)variable whose type cannot be inferred correctly

let numbers = [-10, -1, 2];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

console.log(`numbers:${numbers},
numberAboveZero:${numberAboveZero}`);
