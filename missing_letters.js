function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var start = alphabet.indexOf(str[0]);
  for (var i = start; i < start + str.length; i++) {
    if (!str.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
  return undefined;
}
fearNotLetter("abce");
