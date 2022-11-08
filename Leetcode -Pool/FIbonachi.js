/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let f = new Array(n + 1);

  f[0] = 0;
  f[1] = 1;

  for (let i = 2; i < f.length; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }

  return f[n];
};
