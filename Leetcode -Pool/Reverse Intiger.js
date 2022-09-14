var reverse = function (x) {
  if (x < 0) {
    x = Math.abs(x);
    x = x.toString().split("").reverse().join("");
    x = "-" + x;
    x = parseInt(x);
    if (x < -2147483648 || x > 2147483647) {
      return 0;
    }
    return x;
  }

  x = x.toString().split("").reverse().join("");
  x = parseInt(x);
  if (x < -2147483648 || x > 2147483647) {
    return 0;
  }
  return x;
};
