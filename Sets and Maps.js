// const drogba = new Set("tayo");
// console.log(drogba);

// console.log(drogba);

// const array1 = [1, 2, 3, 4, 5, 6];

// const set1 = new Set(array1);

// console.log(set1.size);

// const set2 = new Set("topejadfgh7kl");

// console.log(set2.size);

// //uase the .add syntax to add elements to a set
// set2.add("gaf", "odododo");
// set2.add("tola");
// set2.add("lolade");

// console.log(set2.size);

// const array01 = ["Tope", "Tobi", "Tayo", "Tolu"];

// const set01 = new Set(array01);

// set02 = new Set();

// for (const set03 of array01) {
//   console.log(set02.add(set03));
// }

// const you1 = ["Tinu", "Tayoh", "tola"];

// // const you2 = new Set();

// // const you3 = you2.add(you1);

// // console.log(you3);

// console.log(you1.delete("Tinu"));

// // console.log(you4);

// const

const array12 = ["eng", "french", "Yoruba"];

const set1 = new Set();

for (const set3 of array12) {
  set1.add(set3);
  set1.delete("eng");
  //   set1.delete("Yoruba");
  //   set1.delete("eng");
  //   set1.delete("french");

  console.log(set1);
}

console.log(set1.has("french"));
console.log(set1);

set1.clear(); // removes evbery element in an array

console.log(set1);

// note that set does not repeat items , it count items once

// Creating a map

// ar7 = [
//   ["one", "two", "three"],
//   ["lion", "COW"],
// ];
// const mapoh = new Map(ar7);
// console.log(mapoh.size);

//the set command is used to add values to a map

const emptyset = new Set();

const onetoten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const loper in onetoten) {
  emptyset.add(loper);
  emptyset.delete(10);
  emptyset.clear();
  console.log(emptyset);
}

const tman = ["ziko", "Zino", "zilo", "zipo", "zigo"];

const sty = new Set(tman);

console.log(sty);

const a = [1, 2, 3];
const b = [2, 3, 4];
const c = [...a, ...b];

const A = new Set(a);
const B = new Set(b);
const C = new Set(c);

console.log(C);
