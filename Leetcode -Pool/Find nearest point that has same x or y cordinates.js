/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let dist = -1;
  let minDist = Infinity;
  let index = -1;
  for (let i = 0; i < points.length; i++) {
    if (x - points[i][0] === 0 || y - points[i][1] === 0) {
      dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
    }

    if (dist < minDist && dist > -1) {
      minDist = dist;
      index = i;
    }
  }
  return index;
};
