var mySqrt = function (x) {
  const numx = x;
  let num = 0;

  while (num <= x) {
    const avg = Math.floor((num + x) / 2);
    if (avg * avg > numx) {
      x = avg - 1;
    } else {
      num = avg + 1;
    }
  }
  return x;
};

console.log(mySqrt(8));
console.log(mySqrt(16));
console.log(mySqrt(20));
