class ListNode {
  constructor(val=null) {
    this.val = val;
    this.next = null;
  }

  addNext(nextNode) {
    this.next = nextNode;
  }
};

export { ListNode };
