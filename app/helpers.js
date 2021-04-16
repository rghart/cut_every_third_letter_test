const cutEveryThirdLetterFromString = (string) => {
  return string
    .replace(/[^a-zA-Z]+/gm, '')
    .split('')
    .filter((_c, i) => (i + 1) % 3 === 0)
    .join('');
}

export default { cutEveryThirdLetterFromString };
