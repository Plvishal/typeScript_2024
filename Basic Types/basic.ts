/*
1. Primitives: number,string, boolean, undefined , null
2. More Complex Type: array, objects, function type, parameter
*/

// Primitives
let age: number = 20;

let userName: string = 'Vishal Pal';

let isInstructor: boolean = true;

//  More Complex Type
let hobbies: string[]; // Array type
hobbies = ['sport', 'cooking'];

//object type
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Vishal Pal',
  age: 24,
};

let people: {
  name: string;
  age: number;
}[];
// Define Array of objects types
people = [
  { name: 'Raju', age: 25 },
  { name: 'Shyam', age: 23 },
];

// Type Inference
let course = 'React- Typecript';

// Union Types
let courses: string | number = 'React- TypeScript';
courses = 124;

// Type alliases

type Person = {
  name: string;
  age: number;
  isValid: boolean;
};

let person1: Person; // allias type
person1 = {
  name: 'Vishal',
  age: 24,
  isValid: true,
};

let peoples: Person[];
peoples = [
  { name: 'Raju', age: 25, isValid: false },
  { name: 'Pooja', age: 22, isValid: true },
];
