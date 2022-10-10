/**
 * @constructor
 */
var Queue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }
  var pop = this.stack2.pop();
  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }
  return pop;
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function () {
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }
  var pop = this.stack2.pop();
  this.stack2.push(pop);
  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }
  return pop;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function () {
  return this.stack1.length === 0 ? true : false;
};
