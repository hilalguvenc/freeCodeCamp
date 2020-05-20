function translatePigLatin(str) {
  var regex = /[aeiou]/i;
  return str.charAt(0).match(regex)
    ? str + "way"
    : str.substring(str.search(regex)) +
        str.substring(0, str.search(regex)) +
        "ay";
}

translatePigLatin("consonant");
