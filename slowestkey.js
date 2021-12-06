function slowestKey(keyTimes) {
  let long = keyTimes[0][1];
  let char = keyTimes[0][0];
  for (let i = 1; i < keyTimes.length; i++) {
    if (i == 0) {
      char = keyTimes[i][0];
    } else if (keyTimes[i][1] - keyTimes[i - 1][1] > long) {
      long = keyTimes[i][1] - keyTimes[i - 1][1];
      char = keyTimes[i][0];
    }
  }
  return String.fromCharCode(char + 97);
}

let x = slowestKey([
  [0, 2],
  [1, 5],
  [0, 9],
  [2, 15],
]);

console.log(x);
