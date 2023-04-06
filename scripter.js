let tope = 26;
let tayo = 27;
let namey = "tope1";
let surnamejh = "Awogbemila";

console.log(tope, tayo, namey, surnamejh);

let gg = true;
console.log(typeof gg, gg, typeof tope, typeof namey);

let fula;
console.log(fula);

let n = tope + tayo;
console.log(n);

let myname = "Ayo";
let surname = "awogbemils";
let yearbirth = 1993;
let thisyerere = 2023;

console.log("My name is Ayo, i am 29 years old");

console.log(
  "my" +
    " " +
    "name" +
    " " +
    "is" +
    " " +
    "Ayo," +
    " " +
    "I" +
    " " +
    "am" +
    " " +
    (thisyerere - yearbirth) +
    " " +
    "years" +
    " " +
    "old"
);

let mily = `My name is ${myname} i am ${thisyerere - yearbirth + 2} years old`;

console.log(mily);

let age = 40;

if (age >= 18) {
  console.log("he can drive");
} else {
  console.log("he cant drive");
}

let act = "";

if ((act = "eat")) {
  console.log("tope is eating");
} else if ((act = "sleep")) {
  console.log("tope is sleeping");
} else {
  console.log("tope is doing nothing");
}
