var lemonadeChange = function (bills) {
  let change = [];
  for (let i = 0; i < bills.length; i++) {
    console.log(bills[i], "  CHANGE = ", change);
    if (bills[i] == 5) {
      change.push(bills[i]);
    } else if (
      bills[i] == 10 &&
      change.find(function (bill) {
        return bill === 5;
      }) == 5
    ) {
      change.push(10);
      change.splice(change.indexOf(5), 1);
    } else if (
      bills[i] == 20 &&
      change.find(function (bill) {
        return bill === 10;
      }) == 10 &&
      change.find(function (bill) {
        return bill == 5;
      }) == 5
    ) {
      change.push(20);
      change.splice(change.indexOf(10), 1);
      change.splice(change.indexOf(5), 1);
    } else {
      return false;
    }
  }
  return true;
};

// console.log(lemonadeChange([5, 5, 10, 10, 20]));
// console.log(lemonadeChange([5, 5, 10, 10]));
// console.log(lemonadeChange([5, 5, 10, 5, 10, 20]));
// console.log(
//   lemonadeChange([
//     5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5,
//   ])
// );

var lemonadeChange2 = function (bills) {
  let five = 0,
    ten = 0,
    twenty = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      five++;
    } else if (bills[i] == 10) {
      ten++;
      if (five > 0) {
        five--;
      } else {
        return false;
      }
    } else if (bills[i] == 20) {
      twenty++;
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five > 2) {
        five = five - 3;
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(
  lemonadeChange2([
    5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5,
  ])
);
