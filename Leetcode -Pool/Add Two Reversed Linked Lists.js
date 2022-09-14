function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  //initialize carry to store carry value when sum is greater than 9
  let carry = 0;
  //initialize sum to store sum
  let sum = 0;
  //intialize addition node to store the answer of addition
  let addNode = new ListNode(0);
  //initialze the ansNode to process the addition
  let ansNode = addNode;

  //loop over l1 and l2
  while (l1 || l2 || carry) {
    //store the sum of node values of l1 and l2 and carry
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    //if sum is greater then or equal to 10 it store 10/10 = 1 as carry 20/10 = 2 as carry
    carry = Math.floor(sum / 10);

    //calculate and store sum/10 its remainder if sum is 17/10 = 7 orignal sum is retrieved
    sum %= 10;

    //add a next node to ansNode and give it a value of sum
    ansNode.next = new ListNode(sum);

    //if l1 or l2 is not null go to next node
    l1 = l1 ? l1.next : 0;
    l2 = l2 ? l2.next : 0;

    //go to next node of ansNode
    ansNode = ansNode.next;
  }

  //because we initialized addNode with first value as zero, then we have to return it from next value
  return addNode.next;
};
