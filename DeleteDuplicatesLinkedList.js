var deleteDuplicates = function (head) {
  let h = head;

  while (h != null) {
    if (h.next == null) {
      break;
    }
    if (h.val == h.next.val) {
      h.next = h.next.next;
      continue;
    }
    h = h.next;
  }

  return head;
};
