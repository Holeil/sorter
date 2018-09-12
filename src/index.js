class Sorter {
  constructor() {
    this.array = new Array();
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
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
    indices.sort(compareNumeric);
    for(var x=0; x < indices.length; x++) {
      for(var y=x+1; y < indices.length; y++) {
        if(this.array[indices[x]] > this.array[indices[y]]) {
          let a = this.array[indices[y]];
          this.array[indices[y]] = this.array[indices[x]];
          this.array[indices[x]] = a;
        }
      }
    }
  }

  setComparator(compareFunction) {

  }
}
module.exports = Sorter;
