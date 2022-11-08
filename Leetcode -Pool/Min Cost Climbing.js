/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let currCost = 0;
  let alter = 0;

  currCost = cost[0];
  for (let i = 0; i < cost.length; i++) {
    let flag = cost[i + 1] !== undefined || cost[i + 2] !== undefined;
    if (cost[i + 1] < cost[i + 2] && flag) {
      currCost += cost[i + 1];
      continue;
    } else if (cost[i + 1] === cost[i + 2] && flag) {
      currCost += cost[i + 2];
      i++;
      continue;
    } else {
      if (!flag) break;
      currCost += cost[i + 2];
      i++;
      continue;
    }
  }
  alter = cost[1];
  for (let i = 1; i < cost.length; i++) {
    let flag = cost[i + 1] !== undefined || cost[i + 2] !== undefined;
    if (cost[i + 1] < cost[i + 2] && flag) {
      alter += cost[i + 1];
      continue;
    } else if (cost[i + 1] === cost[i + 2] && flag) {
      alter += cost[i + 2];
      i++;
      continue;
    } else {
      if (!flag) break;
      alter += cost[i + 2];
      i++;
      continue;
    }
  }
  return Math.min(alter, currCost);
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
