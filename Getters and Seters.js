// //Getters and Setters are functions that get and set a value

// // const bank = {
// //   owner: "jonas",
// //   movement: [100, 200, 300],
// // };

// const account = {
//   owner: "Tope",
//   Movements: [200, 300, 170, 180],

//   get latest() {
//     return this.Movements.slice(-1).pop();
//   },

//   set addingAdigit(mov) {
//     return this.Movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.addingAdigit = 78000000;
// console.log(account.Movements);

// const tope = {
//   love: "Shully",
//   Attitude: "Godly",
//   religion: "Jehovah Witness",
//   integer: [45, 12, 13, 15],
//   Radious: 7,
//   get Area() {
//     return this.Radious * this.Radious;
//   },

//   set Multiplierr(Fig) {
//     return this.integer.push(Fig);
//   },
// };

// tope.Multiplierr = 2.333333333333;

// console.log(tope.integer);

// //note that while calling a getter you will call it like an ordinary property and not like like you are calling a method

// // getter
// // The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example bellow

// // class tribeAndNumbers {
// //   constructor(Nigeria, SouthAfrica, Uganda) {
// //     this.Nigeria = Nigeria;
// //     this.SouthAfrica = SouthAfrica;
// //     this.Uganda = [1, 2, 3];
// //   }

// //   get africaString() {
// //     return `here are the two most powerfull countries on africa ${this.Nigeria} and ${this.SouthAfrica}`;
// //   }
// // }

// // const tribe1 = new tribeAndNumbers("niga", "SA", "uganda");

// // console.log(tribe1.africaString);

// class tribeAndNumbers {
//   constructor(Nigeria, SouthAfrica, Uganda) {
//     this.Nigeria = Nigeria;
//     this.SouthAfrica = SouthAfrica;
//     this.Uganda = [1, 2, 3];
//   }

//   africaString() {
//     return `here are the two most powerfull countries on africa ${this.Nigeria} and ${this.SouthAfrica}`;
//   }
// }

// const tribe1 = new tribeAndNumbers("niga", "SA", "uganda");

// console.log(tribe1.africaString());

// // get – a function without arguments, that works when a property is read,
// // set – a function with one argument, that is called when the property is set

// //Object.create is uses to create an objects prototype
// const newObj = {
//   greet() {
//     console.log("Good morning");
//   },
// };

// const newprotoChain = new Object(newObj);

// console.log(newprotoChain);

// const newPPron = Object.create(newObj);
// console.log(newPPron);

// console.log(newObj__proto__ === newObj);

const cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

cars.prototype.accelerate = function () {
  const mm = (this.speed += 10);
  return `${this.make} is running at arecors speed of ${mm}km/hour`;
};

cars.prototype.brake = function () {
  const mm2 = (this.speed -= 5);
  return `${this.make} is running at arecors speed of ${mm2}km/hour`;
};

const child = function (make, speed, change) {
  cars.call(this, make, speed);
  this.change = change;
};
