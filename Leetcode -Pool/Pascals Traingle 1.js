/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  //create an outer array which holds other arrays
  let outer = [];
  //create a lines array which will hold inner line elements ->Outer[->lines[],[],[]]
  let line = [1];
  //loop till numRows
  for (let i = 0; i < numRows; i++) {
    //create a next array; we will need line array for calculating next array
    let next = [];
    //push the line array in outer array
    outer.push(line);
    //loop till line array length
    for (let j = 0; j < line.length; j++) {
      //check if next element in line array exists?
      //for 1st iteration (when i = 0) line has 1 element and line[1] will be undefined and it will go to else;
      if (line[j + 1] !== undefined) {
        //for second iteration line will contain [1,1] and line[1] will be "1"
        //so we will push in next line[0] = 1, line[0+1] = 1, which will be 2

        next.push(line[j] + line[j + 1]);
        //after pushing next will contain [2]
      } else {
        //when we are on last element of line which will always be "1" and it's next will be undefined
        // then we will push in next [1+0]
        next.push(line[j] + 0);
      }
    }
    //when we exit form j loop we need to make some changes to line array
    // line array will be [1, 1] when i = 0
    // line array will be [1,2,1] when i = 1 and so on
    line = [1, ...next];
  }

  //finally we will return the outer array
  return outer;
};
