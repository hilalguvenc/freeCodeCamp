function uniteUnique(...arr) {
  var newArr = [];
  for (var x = 0; x < arr.length; x++) {
    for (var y = 0; y < arr[x].length; y++) {
      if (!newArr.includes(arr[x][y])) {
        newArr.push(arr[x][y]);
      }
    }
  }
  return newArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
