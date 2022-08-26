var getRow = function (rowIndex) {
  var pascalTraingle = [];
  for (var i = 0; i <= rowIndex; i++) {
    pascalTraingle.push(fact(rowIndex) / (fact(rowIndex - i) * fact(i)));
  }

  return pascalTraingle;
};

var fact = function (line) {
  if (line < 1) return 1;
  return line * fact(line - 1);
};

console.log(getRow(3));
