// 1 + 1 + 1 + 1;
// 2 + 2;
// 1 + 1 + 2;
// 1 + 2 + 1;
// 2 + 1 + 1;

// 5;

// 1 * 5;
// 1 + 1 + 1 + 2;
// 1 + 1 + 2 + 1;
// 1 + 2 + 1 + 1;
// 2 + 1 + 1 + 1;
// 1 + 2 + 2
// 2 + 1 + 2
// 2 + 2 + 1
const stairCase = (n) => {
  let cur = 1;
  let next = 2;

  if (n == 1) return 1;

  for (let i = 3; i <= n; i++) {
    let temp = cur + next;
    cur = next;
    next = temp;
  }

  return next;
};
let n = 4;
console.log(stairCase(n));

console.log(n + n + 1);
