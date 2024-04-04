const radius = [3, 1, 2, 4];

const area = (radius) => {
  return Math.PI * radius * radius;
};

// const circumference = (radius) => {
//   return 2 * Math.PI * radius * radius;
// };

// const diameter = (radius) => {
//   return 2 * radius;
// };

// const calculate = (radius, logic) => {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

Array.prototype.calculate2 = (logic) => {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate2(area));
console.log(radius.map(area));

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
