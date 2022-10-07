/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  //create an array to store interpreted string characters
  let arr = [];
  //split command string to array
  command = command.split("");
  //loop over all the characters of command
  for (let i = 0; i < command.length; i++) {
    //check if current character is "("and next character is ')' then push "o" in arr
    if (command[i] === "(" && command[i + 1] === ")") {
      arr.push("o");
    }

    //check if current character is "G" then push G in arr
    if (command[i] === "G") {
      arr.push(command[i]);
    }
    //check if current character is "(" and next character is 'a' then push "al" in arr and add 3 in i
    if (command[i] === "(" && command[i + 1] === "a") {
      arr.push("al");
      i += 3;
    }
  }

  //finally join arr to convert it to string and return it
  return arr.join("");
};
