function myReplace(str, before, after) {
  var index = str.search(before);
  if (str[index] == str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  var res = str.replace(before, after);
  return res;
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
