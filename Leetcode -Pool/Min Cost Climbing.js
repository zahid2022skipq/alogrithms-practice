var minCostClimbingStairs = function (cost) {
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return cost[0] < cost[1] ? cost[0] : cost[1];

  let minCost = cost[0];
  let alter = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const currMinCost = cost[i] + Math.min(minCost, alter);

    minCost = alter;
    alter = currMinCost;
  }

  return minCost <= alter ? minCost : alter;
};
