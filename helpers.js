const cutEveryThirdLetterFromString = (string) => {
  // Removing spaces to only cut letters
  string = string.replace(/\s+/g, "");
  let stringPosition = -1;
  let newString = "";
  const loopAmount = Math.floor(string.length / 3);

  for (let i = 0; i < loopAmount; i++) {
    newString += string.slice(stringPosition + 3, stringPosition + 4);
    stringPosition += 3;
  }

  return newString;
}

module.exports = { cutEveryThirdLetterFromString }
