// 1
function countTo255() {
  let ourArr = [];
  for (var i = 1; i <= 255; i++) {
    ourArr.push(i);
  }
  return ourArr;
}
countTo255();

// 2
function sumEvens() {
  let sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}
sumEvens();

// 3
function sumOdds() {
  let sum = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
sumOdds();

// 4
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
sumArray([-5, 2, 5, 12]);

// 5
function findArrMax(arr) {
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
findArrMax([-3, 3, 5, 7]);
/*
 *  arr.length = 4
 *
 *  i     arr[i]    max
 *  -     ------    ---
 *  0     -3        -3
 *  1     3         3
 *  2     5         5
 *  3     7         7
 *
 */

// 6
function findArrAverage(arr) {
  let average = 0;
  for (var i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  average /= arr.length;
  return average;
}
findArrAverage([1, 3, 5, 7, 20]);

// 7
function arrayOdd() {
  let arr = [];
  for (var i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}
arrayOdd();

// 8
function greaterThanY(arr, y) {
  let greaterThanY = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      greaterThanY++;
    }
  }
  return greaterThanY;
}
greaterThanY([1, 3, 5, 7], 3);

// 9
function squares(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}
squares([1, 5, 10, -2]);

// 10
function negatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}
negatives([1, 5, 10, -2]);

// 11
function maxMinAvg(arr) {
  let newArr = [];
  let max = arr[0];
  let min = arr[0];
  let avg = 0;
  let arrLength = arr.length;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    avg += arr[i];
  }
  console.log(`Sum of all numbers: ${avg}`);
  console.log(`Array length: ${arrLength}`);
  avg = avg / arrLength;
  newArr.push(max);
  newArr.push(min);
  newArr.push(avg);
  return newArr;
}
maxMinAvg([1, 5, 10, -2]);

// 12
function swapValues(arr) {
  const firstValue = arr[0];
  const lastValue = arr[arr.length - 1];
  arr[0] = lastValue;
  arr[arr.length - 1] = firstValue;
  return arr;
}
swapValues([1, 5, 10, -2]);

// 13
function numberToString(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}
numberToString([-1, -3, 2]);
