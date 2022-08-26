const Heap = require("./node_modules/collections/");
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const merge_lists = function (lists) {
  // Use min heap to keep track of the smallest node in constant time.
  // Enqueue and dequeue will be log(k) where k is the # of lists
  // b/c we only need to keep track of the next node for each list
  // at any given time.
  const minHeap = new MinPriorityQueue({ priority: (item) => item.val });

  for (let head of lists) {
    if (head) minHeap.enqueue(head);
  }

  // Create tempHead that we initiate the new list with
  // Final list will start at tempHead.next
  const tempHead = new ListNode();
  let curr = tempHead;

  while (!minHeap.isEmpty()) {
    const { val, next } = minHeap.dequeue().element;
    curr.next = new ListNode(val);
    curr = curr.next;

    if (next) minHeap.enqueue(next);
  }

  return tempHead.next;
};

l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

//console.log(l1, l2, l3);

let result = merge_lists([l1, l2, l3]);

console.log(result);

// while (result.next != null) {
//   console.log(`${result.value}`);
//   result = result.next;
// }
