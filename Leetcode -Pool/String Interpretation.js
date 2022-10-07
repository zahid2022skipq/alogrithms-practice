/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let arr = [];
  command = command.split("");

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "(" && command[i + 1] === ")") {
      arr.push("o");
    }

    if (command[i] === "G") {
      arr.push(command[i]);
    }

    if (command[i] === "(" && command[i + 1] === "a") {
      arr.push("al");
      i += 3;
    }
  }
  return arr.join("");
};
