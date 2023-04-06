const o = [1, 2, 3, 4];

let [o1, o2, o3] = o;

console.log(o3, o1);

const Engineering = [
  ["html", "css", "js", "react"],
  ["Nodejs", "SQL", "MongoDB"],
  ["python", "csharp", "PHP"],
];

let [frontEnd, , backEnd] = Engineering;

console.log(frontEnd);
console.log(backEnd, Engineering[2]);

//
const test = [undefined, "Tobi", "Funmi"];

let [firstName = "portable", secondName, ThirdName, FourthName = "Tayo"] = test;

console.log(firstName, secondName, FourthName);

// iTb is also possible to assign variables to a very lenghy array

const nums7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [firstNum, secNum, ...remainingnumber] = nums7;

console.log(firstNum, secNum, remainingnumber);

const countries = [
  ["Finland", , "Helsinki"],
  ["Sweden", , "Stockholm"],
  ["Norway", , "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

const objecter = { Name1: "Ob1", Name2: "Ob2", Name3: "Ob3" };

let { Name1, Name2, Name3, Name4 } = objecter;

console.log(Name1, Name2, Name3, (Name4 = "maka"));

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//const citrus = fruits;
const fr = [fruits[1], fruits[2]];

console.log(fr);
