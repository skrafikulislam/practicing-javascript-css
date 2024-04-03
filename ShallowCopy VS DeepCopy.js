const person = {
  name: "babu",
  age: 22,
  add: {
    city: "kolkata",
    country: "india",
  },
};
// ! Shallow Copy Using Object Assign Method
const shallowCopy = Object.assign({}, person);
const shallowCopy2 = { ...person };

shallowCopy.add.city = "mumbai";
console.log(person.add.city);
console.log(shallowCopy.add.city);

// ! Deep Copy Using Json.parse() and Json.stringify() Method

const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.add.city = "mumbai";
console.log(person.add.city);
console.log(deepCopy.add.city);
console.log(deepCopy);
