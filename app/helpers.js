const cutEveryThirdLetterFromString = (string) => {
  return string
    .replace(/\s+/g, '') //Removing whitespace
    .split('')
    .filter((_c, i) => (i + 1) % 3 === 0)
    .join('');
}

module.exports = { cutEveryThirdLetterFromString };
