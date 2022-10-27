/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let P = 0,
    G = 0,
    M = 0;
  let Pt = 0,
    Gt = 0,
    Mt = 0;
  for (let i = 0; i < garbage.length; i++) {
    (Gt = 0), (Pt = 0), (Mt = 0);
    for (let k = 0; k < garbage[i].length; k++) {
      if (garbage[i][k] === "G") {
        G++;
        if (i !== 0 && Gt === 0) {
          G += travel[i - 1];
          Gt = 1;
        }
      }
      if (garbage[i][k] === "P") {
        P++;
        if (i !== 0 && Pt === 0) {
          P += travel[i - 1];
          Pt = 1;
        }
      }

      if (garbage[i][k] === "M") {
        M++;
        if (i !== 0 && Mt === 0) {
          M += travel[i - 1];
          Mt = 1;
        }
      }
    }
  }
  return P + G + M;
};

console.log(garbageCollection(["G", "P", "GP", "GG"], [2, 3, 4]));
