/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  //Sort the salary array
  salary.sort((a, b) => a - b);
  //Initialize the sal variable to calculate total salary
  let sal = 0;
  //Min and Max will be two salaries so minus 2 from total salary array
  let counter = salary.length - 2;

  //loop from 1 to length of salary array -1, because 1st item will be MIN and last will be MAX
  for (let i = 1; i < salary.length - 1; i++) {
    //increment sal with each salary item
    sal += salary[i];
  }

  //return average
  return sal / counter;
};
