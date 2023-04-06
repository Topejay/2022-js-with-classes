// const names = [
//   "tayo",
//   "tola",
//   { country: ["nigeria", "igbo", "hausa"] },

//   { animal: "dog" },
// ];

// console.log(names);

// //the split syntax is used to change a b
// // let f = "Nebuchadnezer";
// // const k = f.split("");

// // console.log(k);

// const k = "Nebuchadnezer".split("");
// console.log(k);

// let g = "tope, tobi, ayo";

// const p = g.split(",");
// console.log(p);

// //use comma in the quote inside the split -- split(",") if you want to split words like in variable g.

// // do not us ecomma if you want to split letters, like in variable f

// //Accessing array items using index

// const fruits = ["orange", "banana", "carrot", "mango"];

// // note that orange is item 0, while mango is item 4

// let m = fruits[0];
// console.log(m);
// console.log(fruits.length - 1);

// // the following codes will help modify the contents of an array element

// fruits[0] = "lime";

// fruits[fruits.length - 1] = "Gauva";

// console.log(fruits);

// // Array:To create an empty array.

// const Toluj = Array();

// // or

// const yuy = [];

// const tluAdejare = [1, 2, 3];
// const tolip = Array(5);

// console.log(tluAdejare, tolip, Toluj);

// tluAdejare.push(3444, 88);
// tluAdejare.unshift(8976);

// // tluAdejare.pop();
// // tluAdejare.shift();

// console.log(tluAdejare);

// // fill all the element in an empty array with a static value

// const emptyy = Array(5).fill("x");

// console.log(emptyy);

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];

const thirdList = firstList.concat(secondList);
console.log(firstList);
console.log(thirdList);
const thirdList2 = [1, 2, 3, ...secondList];
console.log(thirdList2);

// const fruits = ["banana", "orange", "mango", "lemon"];... // array of fruits
// const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables);

// To check if an item exist in an array. If it exists it returns the index else it returns -1. the index of an array element is its position it starts from zero

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(1));

const fruits = ["banana", "orange", "mango", "lemon"];

console.log(fruits.indexOf("banana"));

console.log(fruits.indexOf("lime"));

// if there is repetition of an element in an array. lastIndexOf is used the index of the last time a number appear

const numbersj = [1, 2, 1, 7, 3, 4, 5, 8];

console.log(numbersj.lastIndexOf(7));

// Reversing array order
// reverse: reverse the order of an array.

const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
