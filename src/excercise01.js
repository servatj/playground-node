module.exports = {
  reverseNumber: (number) => {
    return number
      .toString()
      .split('')
      .reverse()
      .join('');
  }
}
