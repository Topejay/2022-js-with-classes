// // Console Object Methods
// // console.log()
// // console.warn()
// // console.error()
// // console.table()
// // console.time()
// // console.info()
// // console.assert()
// // console.group()
// // console.count()
// // console.clear()

// console.log("30 Days of JavaScript");

// console.log("%d %s %f %o of JavaScript", 30, "ojo", 23.736, { num: 7 });

// const name87 = "tope";

// console.log("My name is %s, i am %i years old", name87, 29);

// //note the following symbols

// //%s for a String

// // %d or %i for Number

// // %f for Floating points

// // %o for an Object

// // %j for an JSON

// console.log(
//   "%c30 %cDays %cOf %cJavaScript",
//   "color:green",
//   "color:yellow",
//   "color:blue",
//   "color:red"
// ); // log output is green
// console.log(
//   "30%c Days%c Of%c %c JavaScript",
//   "color:green",
//   "color:blue",
//   "",
//   "color:red",
//   "",
//   "color:yellow"
// ); // log output green red and yellow text

// const style =
//   "background-color: green; color: white; font-style: italic; border: 5px solid hotpink; font-size: 3em;";
// console.log("%cHooray", style);

// // %c is used to add color to a string

// // control warn is meant
// console.warn("warning stop");

// // control warn is meant to warn users
// console.error("warning stop");

// console.table() is meant to create a table

const obj = { name: "Tope", Email: "awogbemilat@gmail.com", Age: 29 };

console.table(obj);

const obj1 = ["name: Tope", "Email: awogbemilat@gmail.com", "Age: 29"];

console.table(obj1);

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

console.assert("tope");

console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");
