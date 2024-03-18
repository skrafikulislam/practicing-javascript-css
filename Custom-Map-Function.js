Array.prototype.baburMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Example usage:
const arr = ["babu", "salman", "netaji"];
const doubled = arr.baburMap((item, i, arr) => console.log(item, i, arr));
 