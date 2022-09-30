var subtractProductAndSum = function (n) {
  n = n.toString();
  let sum = 0;
  let prod = 1;
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
    prod *= parseInt(n[i]);
  }

  return prod - sum;
};
