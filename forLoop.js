// for loop is used for itteration
// for (startingPoint/initialization, condition/EndingPoint, increament/decreament) {
//code or statement }

// for (i = 0; i < 11; i++) {
//   console.log(i);
// }
// for (i = 5; i >= 0; i--) {
//   console.log(i);
// }

// for (i = 0; i <= 5; i++) {
//   const f = [1, 2, 3, 4, 5];
//   console.log(`${f[i]} * ${f[i]} = ${f[i] * f[i]} `);
// }

// for (i = 1; i <= 100000; i++) {
//   console.log(`${[i]} * ${[i]} = ${[i] * [i]} `);
// }

// const numbers = [1, 2, 3, 4, 5];
// const newArr = [];
// sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   newArr.push(numbers[i] ** 2);
//   sum = sum + 1;
// }
// console.log(newArr);
// console.log(sum);
// // console.log(newArr); // [1, 4, 9, 16, 25]

// const num = [1, 2, 3, 4, 5];
// const newy = [];

// for (i = 0; i < num.length; i++) {
//   newy.push(num[i] ** 2);
// }
// console.log(newy);

let tobi = ["origbo", "burewa", "orify", "agbalowomwri", "obolagidho"];

cont = [];

for (i = 0; i < tobi.length; i++) {
  cont.push(tobi[i].toUpperCase());
}

console.log(cont);
