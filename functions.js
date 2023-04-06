// function square() {
//   let num = 2;
//   let sq = num * num;
//   console.log(sq);
// }

// square();

// function myNames(nam) {
//   let nam = ["tope", "tobi", "tayo"];
//   let j = 2;
//   let s = 78;
//   let yourNum = console.log(j * s);
//   return yourNum;
// }

// myNames();

function circle(r) {
  let areac = Math.PI * r * r;
  return areac;
}

console.log(circle(3));

function identity(name, surname) {
  return `${name} ${surname}`;
}

console.log(identity("Tope", "Awogbemila"));

function namehjd() {
  console.log(arguments);
}

namehjd(1, 2, 3, 4);

function namel() {
  sum = 0;
  for (i = 0; i < arguments.length; i++) sum = sum + arguments[i];
  return sum;
}
console.log(namel(1, 2, 3));

//function expression is a type of anonymous function
const u = function () {
  let m = 4;
  let n = m * m;
  return console.log(n);
};

u();

// Arrow function

const arr = (klj) => {
  let yusbh = klj * klj;
  return console.log(yusbh);
};
arr(6);
