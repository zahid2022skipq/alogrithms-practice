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
let n = 10;
let cur = 1;
let next = 2;

if (n == 1) return 1;

for (let i = 3; i <= n; i++) {
  let temp = cur + next;
  cur = next;
  next = temp;
}
console.log(next);
