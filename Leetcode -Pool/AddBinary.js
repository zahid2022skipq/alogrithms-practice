var addBinary = function (a, b) {
  const num = (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
  return num;
};

console.log(addBinary("1011", "111"));
