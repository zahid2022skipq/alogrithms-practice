var floodFill = function (image, sr, sc, color) {
  return fillColor(image, sr, sc, color, image[sr][sc]);
};

function fillColor(image, sr, sc, color, pixelColor) {
  if (
    sr >= 0 &&
    sc >= 0 &&
    sr < image.length &&
    sc < image[0].length &&
    image[sr][sc] !== color
  ) {
    image[sr][sc] = color;
    if (sr - 1 >= 0 && image[sr - 1][sc] == pixelColor) {
      image = fillColor(image, sr - 1, sc, color, pixelColor);
    }
    if (sr + 1 < image.length && image[sr + 1][sc] == pixelColor) {
      image = fillColor(image, sr + 1, sc, color, pixelColor);
    }
    if (sc - 1 >= 0 && image[sr][sc - 1] == pixelColor) {
      image = fillColor(image, sr, sc - 1, color, pixelColor);
    }
    if (sc + 1 < image[0].length && image[sr][sc + 1] == pixelColor) {
      image = fillColor(image, sr, sc + 1, color, pixelColor);
    }
  }
  return image;
}
/**
 *
 *
 *
 *
 *
 *
 *
 * @param {*} image
 * @param {*} sr
 * @param {*} sc
 * @param {*} color
 * @returns
 *
 *
 *
 *
 *
 */
let count = 0;
var floodFill2 = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;
  if (image.length === 0) return image;
  const row = image.length - 1;
  const col = image[0].length - 1;
  const startVal = image[sr][sc];
  if (sr > row || sc > col) return image;

  function changeImage(sr, sc) {
    count++;
    console.log(count);
    if (image[sr][sc] === startVal) image[sr][sc] = color;
    else return;

    if (sr > 0) changeImage(sr - 1, sc);
    if (sr < row) changeImage(sr + 1, sc);
    if (sc > 0) changeImage(sr, sc - 1);
    if (sc < col) changeImage(sr, sc + 1);
  }

  changeImage(sr, sc);
  return image;
};

var floodFill = function (image, sr, sc, color) {
  let q = [[sc, sr]],
    visited = new Set(),
    current = image[sr][sc];
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (q.length) {
    let [x, y] = q.shift();
    image[y][x] = color;
    visited.add(`${x}:${y}`);
    for (const [dirx, diry] of dirs) {
      let nextx = dirx + x,
        nexty = diry + y;
      if (nextx < 0 || nexty < 0) continue;
      if (nextx > image[0].length - 1 || nexty > image.length - 1) continue;
      if (image[nexty][nextx] != current) continue;
      if (!visited.has(`${nextx}:${nexty}`)) {
        q.push([nextx, nexty]);
      }
    }
  }
  return image;
};

// console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );
// console.log(
//   floodFill2(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// );
console.log(
  floodFill3(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
