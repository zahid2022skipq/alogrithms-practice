/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let point1 = coordinates[0];
  let point2 = coordinates[1];
  let slope = Math.abs(
    Math.floor((point2[1] - point1[1]) / (point2[0] - point1[0]))
  );
  let slope1;
  for (let i = 0; i < coordinates.length - 1; i++) {
    point1 = coordinates[i];
    point2 = coordinates[i + 1];
    slope1 = Math.abs(
      Math.floor((point2[1] - point1[1]) / (point2[0] - point1[0]))
    );

    console.log(slope1, slope);
    if (slope !== slope1) return false;
  }

  return slope === slope1;
};

let coordinates = [
  [0, 1],
  [2, 4],
  [3, 3],
];
console.log(checkStraightLine(coordinates));
