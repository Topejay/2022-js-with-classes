// // a class is more like a blueprint or template for objects v
// //OOP

// // lets startr bty creating a aconstrusctor function

// // const Constructor1 = function (namey, password) {
// //   this.namey = namey;
// //   this.password = password;

// //   // we can add a method here however it will need to be executed each time we need an instance of this constructor function which is not efficient codding. THAT IS excatly why we need prototypes
// // };

// // const obj1 = new Constructor1("Tman", 1245);

// // const obj2 = new Constructor1("Tobi", 1290);

// // console.table(obj1);
// // console.table(obj2);

// // Here is why we need prototypes

// const Constructor1 = function (namey, YearOfBirth) {
//   this.namey = namey;
//   this.YearOfBirth = YearOfBfirth;
// };

// const obj1 = new Constructor1("Tman", 1914);

// const obj2 = new Constructor1("Tobi", 1914);

// console.table(obj1);
// console.table(obj2);

// //Prototypes

// //Every function in JS has a property called prototype. This applies to constructor functions as well

// Constructor1.prototype.ageCalculator = function () {
//   const currentAge = 2023 - this.YearOfBirth;
//   return console.log(currentAge);
// };

// console.log(Constructor1.prototype);

// obj1.ageCalculator();

// obj2.ageCalculator();

// console.log(obj1.__proto__);

// // note this - the prototype of objects created from a constructor function is nameOfTheConstrctorFunction.prototype. note that nameOfTheConstrctorFunction.prototype is not the prototype of the on the constructor function itself but the prototype of every new object created by the constructor function

// // every object created with a constructor function has a special property __Proto__

// //For example, let us use the Object created from the cunstructor function. The object is Obj1

// console.log(obj1.__proto__);

// console.log(obj1.__proto__ === Constructor1.prototype);

// console.log(obj2.__proto__ === Constructor1.prototype);

// console.log(Constructor1.prototype.isPrototypeOf(obj1));

// console.log(Constructor1.prototype.isPrototypeOf(obj2));

// console.log(Constructor1.prototype.isPrototypeOf(Constructor1));

// // The basic fact from all these is that constructor1.prototype is not the prototype of Constructor1. Rather, it is the prototype of every object created from the Constructor function - constructor1

// //Where does the __Proto__ actually come from

// // note the following points with respect to constructor functions and prototypes

// // 1) New {} is created
// // 2) function is called, this = {}. i.e this is the name of the object
// // 3) {} is lincked to the prototype property created for theconstructor function
// // 4) The constructor function, when called authomatically returns an object

// // note that the prototype of every object created by constructor function is equal tonthe prototype property of the constructor function (in this case the prototype property is constructor1.prototype ). However, the prototype of the constructor function is not equal to the prototype property attached  to it.

// // we can also set properties on the Cfuction prototype property (constructor1.prototype).

// Constructor1.prototype.religion = "Jehovah Witness";

// console.log(obj1, obj2);

// // Note that the property attached to the prototype like religion is not a property of the object created from the constructor function

// console.log(obj1.hasOwnProperty("YearOfBirth")); // True

// // console.log(obj1.hasOwnProperty("religion")); // False

// const car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// car.prototype.accelerate = function () {
//   return console.log((this.speed += 10));
// };

// car.prototype.brake = function () {
//   return console.log((this.speed -= 5));
// };

// const cary = new car("Benz", 24);

// const carobj = new car("limo", 20);

// cary.accelerate();
// cary.accelerate();
// cary.brake();
// cary.brake();

// cary.brake();

// cary.brake();

// console.log(cary, carobj);

// class PersonC {
//   constructor(firstName, dateOfBirth) {
//     this.firstName = firstName;
//     this.dateOfBirth = dateOfBirth;
//   }
// }

class exampler {
  constructor(firstNamer, dateOfBirth2) {
    this.firstNamer = firstNamer;
    this.dateOfBirth2 = dateOfBirth2;
  }

  get agecalk2() {
    return console.log(2023 - this.dateOfBirth2);
  }
}

exampler.prototype.newMethodAge = function () {
  console.log(2023 - this.dateOfBirth2);
};
const claus = new exampler("temiTope", 1993);

const Clousy = new exampler("temiTope", 1993);

console.log(claus);
console.log(claus.agecalk2);
Clousy.newMethodAge();

console.log(claus.firstNamer);

// console.log(claus, Clousy);

// important points about classes
//Classes are not hoisted
// classes are fisrst class citizens
//classes are excecutedin strict mode
