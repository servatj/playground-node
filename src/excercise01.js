module.exports = {
  reverseNumber: (number) => {
    console.log(number);
    return number
      .toString()
      .split('')
      .reverse()
      .join('');
  }
}
