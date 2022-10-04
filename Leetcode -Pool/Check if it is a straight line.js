var checkStraightLine = function (coordinates) {
  var x1 = coordinates[0][0];
  var y1 = coordinates[0][1];
  var x2 = coordinates[1][0];
  var y2 = coordinates[1][1];
  if (x1 == x2 && x1 == 0) {
    //Slope of X axis is infinite
    for (var i = 2; i < coordinates.length; i++) {
      if (coordinates[i][0] != 0) return false;
    }
    return true;
  }

  var slope = (y2 - y1) / (x2 - x1);
  for (var i = 2; i < coordinates.length; i++) {
    var xk = coordinates[i][0];
    var yk = coordinates[i][1];
    var newSlope = (yk - y1) / (xk - x1);
    if (newSlope != slope) return false;
  }
  return true;
};
