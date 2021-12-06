function maxRepetedNumber(arr = []) {
  let count = 0;
  let finalCount = 0;
  let index = 0;
  let finalIndex = 0;

  arr.forEach((num, ind) => {
    if (num) {
      index = !count ? ind : index;
      count++;
      if (count > finalCount) {
        finalCount = count;
        finalIndex = index;
      }
    } else {
      count = 0;
      index = 0;
    }
  });

  console.log(finalCount, finalIndex);
}

let arr = [1, 0, 1, 0, 1, 1, 0, 1];

maxRepetedNumber(arr);
