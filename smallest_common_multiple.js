function smallestCommons(arr) {
  var newArr = [arr[0]];
  var total = 1;
  for (i = 1; i <= arr[1] - arr[0]; i++) {
    newArr.push(arr[0] + i);
  }
  for (j = 0; j < newArr.length; j++) {
    if (newArr[j] / (j + 1) == 1) {
      total *= newArr[j];
    }
  }
  return total;
}

smallestCommons([1, 5]);
