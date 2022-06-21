class SortedList {
  constructor() {

this.items =[]
this.length = this.items.length;


  }
  add(item) {
this.items.push(item);
this.length++;
this.items.sort(function(a, b){ return a - b});


  }

  get(pos) {
if (pos > this.length){
  throw new Error('OutOfBounds');
}
else {
  return this.items[pos];
}
  }

  max() {

    if(this.items == 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
if (this.items == 0) {
  throw new Error("EmptySortedList");
}
return Math.min(...this.items);


  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i];
      }

return sum;

  }
  avg() {
let sum = 0;
for (let i = 0; i < this.items.length; i++) {
  sum += this.items[i];
}

let ave = sum/this.length;
 return ave;


 
  }

module.exports = SortedList;


