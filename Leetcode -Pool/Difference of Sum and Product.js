/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function (n) {
  //convert n to string
  n = n.toString();
  //initialize sum and product
  let sum = 0;
  let product = 1;
  //loop over each characters
  for (let i = 0; i < n.length; i++) {
    //add to sum by converting it to int
    sum += parseInt(n[i]);
    //multiply to product by converting it to int
    product *= parseInt(n[i]);
  }

  //return the difference
  return product - sum;
};
