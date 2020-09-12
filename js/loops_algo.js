//print out all odd numbers from 1 to 20
for (var i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//sum numbers from 1 to 5
//print out the current number and sum so far at each step
var sum = 0;
for (var i = 1; i <= 5; i++) {
  sum += i;
  console.log(`Num: ${i}, Sum: ${sum}`);
}
