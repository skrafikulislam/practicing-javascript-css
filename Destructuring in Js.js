// ! Swap Elements USing Destrucring in js

// // ! Example 2
// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// // ! Example 2
// const colors = ["red", "yellow", "black", "white"];
// [colors[0], colors[3]] = [colors[3], colors[0]];

// console.log(colors);
// // ! Example 3
// const colors2 = ["red", "yellow", "black", "white"];

// const [firstname, ...others] = colors2;
// console.log(...others)

// ! Using Objects :
const person1 = {
  name: "babu",
  age: 22,
  job: "developer",
};

const { name, ...others } = person1;
console.log({ ...others });
