function bubbleSort(Array) {
  let len = Array.length;
  for (let i = 0; i < len; i++) {
    //you can also use "for in", so you don't need the variable "len"
    for (let j = 0; j < len; j++) {
      if (Array[j] > Array[j + 1]) {
        let tmp = Array[j];
        Array[j] = Array[j + 1];
        Array[j + 1] = tmp;
      }
    }
  }
  return Array;
}

let sorted = bubbleSort([7, 99, 1, 88, 34, 2, 90, 7]);
console.log(sorted[sorted.length - 3]);

function short(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (currentItem > nextItem) {
        let tmp = currentItem;
        customItem = nextItem;
        nextItem = tmp;
      }
    }
  }

  return arr;
}
