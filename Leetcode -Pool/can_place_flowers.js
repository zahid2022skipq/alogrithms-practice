//605

var canPlaceFlowers = function (flowerbed, n) {
  let em = 0;
  let emL = false;
  let emR = false;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] == 0) {
      emL = i == 0 || flowerbed[i - 1] == 0;
      emR = i == flowerbed.length - 1 || flowerbed[i + 1] == 0;
    }

    if (emL && emR) {
      flowerbed[i] = 1;
      em++;
    }
  }

  return em >= n;
};
