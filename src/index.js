class Sorter {
  constructor() {
    this.array = [];
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
    var a;
    for(var x=0; x < indices.length; x++) {
      for(var y=x+1; y < indices.length; y++) {
        if(indices[x] > indices[y]) {
          a = indices[y];
          indices[y] = indices[x];
          indices[x] = a;
        }
      }
    }
    for(var x=0; x < indices.length; x++) {
      for(var y=x+1; y < indices.length; y++) {
        if(this.array[indices[x]] > this.array[indices[y]]) {
          a = this.array[indices[y]];
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
