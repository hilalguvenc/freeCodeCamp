function sumPrimes(num) {
  var sumAll = 2;
  var x = 2;
  while (x <= num) {
    x++;
    for (var i = 2; i < x; i++) {
      if (x % i == 0) {
        break;
      }
    }
    return sumAll;
  }
}
sumPrimes(10);
