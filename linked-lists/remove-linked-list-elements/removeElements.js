const removeElements = function(head, val) {
  const dummy_head = new ListNode(null, head);
  let previous = dummy_head;
  let current = dummy_head.next;

  while (current) {
    current.val === val ? previous.next = current.next : previous = current;

    current = current.next;
  }

  return dummy_head.next;
};
