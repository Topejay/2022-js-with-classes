// Higher order function is a function that takes in another function as a parameter or return a function as a value

// const arrrow = (hof) => {
//   const k = hof ** 2;
//   return k;
// };

// const hofy = function (arrow, hof) {
//   return arrow(hof) * hof;
// };

// const li = hofy(arrrow, 3);
// console.log(li);

const fun1 = (n) => {
  const fun2 = (m) => {
    const fun3 = (o) => {
      return n * m * o;
    };
    return fun3;
  };
  return fun2;
};

const higherord = fun1(2)(3)(5);
console.log(higherord);

const toplk = function () {
  console.log("I print every 1000 ms ");
};

setInterval(toplk, 10000);

const toplk1 = function () {
  console.log("I print every 1000 ms ");
};

setTimeout(toplk1, 10000);
