var arr = [8, 6, 7, 5, 3, 0, 9];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
/*
 *  i     console
 *  -     -------
 *  0     8
 *  1     6
 *  2     7
 *  3     5
 *  4     3
 *  5     0
 *  6     9
 *
 */

var arr = [7, 3, 8, 4, 2, 0, 1];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  } else {
    console.log("That is odd!");
  }
}
/*
 *  i     arr[i]    console
 *  -     ------    -------
 *  0     7         That is odd!
 *  1     3         That is odd!
 *  2     8         8
 *  3     4         4
 *  4     2         2
 *  5     0         0
 *  6     1         That is odd!
 *
 */

var arr = [1, 3, 8, -5, 0, -2, 4, -1];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    newArr.push(arr[i]);
    arr[i] = arr[i] * -1;
  } else if (arr[i] == 0) {
    arr[i] = "Zero";
  } else {
    arr[i] = arr[i] * -1;
  }
}
console.log(arr);
console.log(newArr);
/*
 *  i     arr[i]      arr           newArr
 *  -     ------      ----          ------
 *  0     arr[0]=1    arr[0] = -1
 *  1     arr[1]=3    arr[1] = -3
 *  2     arr[2]=8    arr[2] = -8
 *  3     arr[3]=-5   arr[3] = 5    [-5]
 *  4     arr[4]=0    arr[4] = "Zero"
 *  5     arr[5]=-2   arr[5] = 2    [-5,-2]
 *  6     arr[6]=4    arr[6] = -4
 *  7     arr[7]=-1   arr[7] = 1    [-5,-2,-1]
 *
 * console.log(arr);
 * return [-1,-3,-8,5,"Zero",2,-4,1]
 *
 * console.log(newArr);
 * return [-5,-2,-1]
 *
 */
