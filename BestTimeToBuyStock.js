var maxProfit = function (prices) {
  var profit = 0;
  for (var i = 0; i < prices.length; i++) {
    for (var j = i; j < prices.length; j++) {
      if (profit < prices[j] - prices[i]) {
        profit = prices[j] - prices[i];
        //console.log(" = ", prices[j], " - ", prices[i] , " = ", profit)
      }
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

var maxProfitOpt = function (prices) {
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }

    if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }
  return profit;
};
