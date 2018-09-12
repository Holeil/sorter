class Sorter {
  constructor() {
    this.array = new Array();
    this.compareFunction = function(a, b) {return a - b};

  }
  
  add(element) {
    this.array.push(element);

  }

  at(index) {
    return this.array[index];

  }

  get length() {
    return this.array.length;

  }

  toArray() {
    return this.array;

  }

  sort(indices) {
    indices.sort((a, b) => a - b);
    var newArr = [];
    indices.forEach(item => {
      newArr.push(this.array[item]);
    });
    newArr.sort(this.compareFunction);
    indices.forEach((item, index) => {
      this.array[item] = newArr[index]
    });
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}
module.exports = Sorter;