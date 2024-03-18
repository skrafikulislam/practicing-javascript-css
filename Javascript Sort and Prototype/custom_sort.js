Array.prototype.sortingBabu = function () {
  let len = this.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (this[j] > this[j + 1]) {
        // Swap Places
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

const arr = [4, 6, 1, 2, 5];
console.log(arr.sortingBabu());
