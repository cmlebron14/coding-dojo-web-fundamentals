var testArray = [6, 3, 5, 1, 2, 4];

//print each array value and the sum so far
var sum = 0;
for (var i = 0; i < testArray.length; i++) {
  sum += testArray[i];
  console.log(`Num ${testArray[i]}, Sum ${sum}`);
}

//multiply each value in the array by its array position
for (var i = 0; i < testArray.length; i++) {
  testArray[i] = testArray[i] * i;
}
console.log(testArray);
