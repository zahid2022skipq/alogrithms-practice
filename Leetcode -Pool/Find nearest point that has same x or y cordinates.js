/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  //initialize dist variable to -1 for calculating distance
  let dist = -1;
  //initialize minDist for calculating minimum distance
  let minDist = Infinity;
  //initialize index for keeping track of index
  let index = -1;
  //loop over all the points
  for (let i = 0; i < points.length; i++) {
    //check if any cordinates manhattan distance is equal to 0 according to formula
    if (x - points[i][0] === 0 || y - points[i][1] === 0) {
      //make dist equal to manhatan distance calculated
      dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
    }

    //check if dist is less then minDist and it's greated then -1
    //because dist is only greater then -1 when any of the cordinate is same to x or y
    if (dist < minDist && dist > -1) {
      //make mindist equal to dist
      minDist = dist;
      //make index equal to i
      index = i;
    }
  }
  //return index if there will not be any coordinates equal to x or y then our index will be -1
  return index;
};
