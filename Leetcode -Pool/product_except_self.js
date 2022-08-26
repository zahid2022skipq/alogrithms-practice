let count = 0;

var productExceptSelf = function (nums) {
  let answer = [];
  let p = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      count++;
      if (i != j) {
        p = p * nums[j];
      }
    }
    answer[i] = p;
    p = 1;
  }

  return answer;
};

let count2 = 0;
var productExceptSelf2 = function (nums) {
  let prefix = new Array(nums.length);
  let postfix = new Array(nums.length);
  let output = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      prefix[i] = nums[i] * 1;
    } else if (i == nums.length - 1) {
      prefix[nums.length - 1] = nums[i] * 1;
    } else {
      prefix[i] = nums[i] * prefix[i - 1];
    }
    console.log("PREFIX at", i, " : ", prefix);
  }
  // console.log(prefix);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      postfix[nums.length - 1] = nums[i] * 1;
    } else if (i == 0) {
    } else {
      postfix[i] = nums[i] * postfix[i + 1];
    }
    console.log("POSTFIX at", i, " : ", postfix);

    count2++;
  }
  // console.log(postfix);
  for (let i = 0; i < nums.length; i++) {
    let prefixValue = prefix[i - 1] ?? 1;
    let postfixValue = postfix[i + 1] ?? 1;
    console.log(`PREFIX vALUE: ${prefixValue}\nPOSTFIX VALUE: ${postfixValue}`);
    output[i] = prefixValue * postfixValue;
    count2++;
  }

  return output;
};

// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// console.log(productExceptSelf([1, 2, 3, 4, 2, 5, 6, 3, 2, 12, 33, 78]));
console.log(productExceptSelf2([1, 2, 3, 4]));
// console.log(productExceptSelf2([1, 2, 3, 4, 2, 5, 6, 3, 2, 12, 33, 78]));

console.log("\n\n\n COUNT 1: ", count, "  COUNT 2: ", count2);
