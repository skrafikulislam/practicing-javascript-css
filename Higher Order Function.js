const radius = [3, 1, 2, 4];

const calculateArea = (value) => {
  let output = [];
  for (let i = 0; i < value.length; i++) {
    output.push(Math.PI * value[i] * value[i]);
  }
  return output;
};

console.log(calculateArea(radius));

const calculateCircumference = (value) => {
  let output = [];
  for (let i = 0; i < value.length; i++) {
    output.push(2 * Math.PI * value[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

const calculateDiameter = (value) => {
  let output = [];
  for (let i = 0; i < value.length; i++) {
    output.push(2 * value[i]);
  }
  return output;
};

console.log(calculateDiameter(radius));
