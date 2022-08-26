class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

const reverse_sub_list = function (head, p, q) {
  // TODO: Write your code here
  let current = head;
  let prev = null;
  let i = 0;
  while (current !== null && i < p - 1) {
    prev = current;
    current = current.next;
    i++;
  }

  const last_node_first_part = prev;
  const last_node_sublist = current;
  let nxt = null;
  i = 0;
  while (current !== null && i < q - p + 1) {
    nxt = current.next;
    current.next = prev;
    prev = current;
    current = nxt;
    i++;
  }

  if (last_node_first_part !== null) {
    last_node_first_part.next = prev;
  } else {
    head = prev;
  }

  last_node_sublist.next = current;
  return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_sub_list(head, 1, 7).get_list()}`
);
