// Pick 6 of the following array methods and
// implement your own version of them:
// reduce, filter, find, concat, push, pop,
// slice, splice, some, every, reverse.

//1.reduce
Array.prototype.myReduce = function (callback, initialValue) {
  let total = initialValue;
  for (let i = 0; i < this.length; i++) {
    total = callback(total, this[i], i, this);
  }
  return total;
};

const arr = [1, 2, 3];

let total = arr.myReduce((a, b) => {
  return a + b;
}, 0);

console.log(total);

//2.filter
Array.prototype.myFilter = function (callback) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};
let filtered = arr.myFilter((x) => x > 1);
console.log(filtered);

//3. find
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

let found = arr.myFind((x) => x > 1);
console.log(found);

//4. concat
Array.prototype.myConcat = function (arr) {
  let newArray = [...this];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  return newArray;
};

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = array1.myConcat(array2);
console.log(newArray);

//5. push
Array.prototype.myPush = function (...items) {
  const length = this.length;

  for (let i = 0; i < items.length; i++) {
    this[length + i] = items[i];
  }

  return this.length;
};

let array3 = [1, 2, 3];
console.log(array3.myPush(4, 5));
console.log(array3);

//6. pop
Array.prototype.myPop = function () {
  if (this.length === 0) {
    return undefined;
  }

  const lastElement = this[this.length - 1];

  delete this[this.length - 1];
  this.length = this.length - 1;

  return lastElement;
};

let array4 = [1, 2, 3];
console.log(array4.myPop());
console.log(array4);
