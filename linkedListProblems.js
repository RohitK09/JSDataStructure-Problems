function addLinkList(l1, l2) {
  var l3 = new ListNode(-1);
  var l3head = l3;
  let carry = 0;
  while (l1 != null || l2 != null) {
    let sum = carry;
    if (l1 !== null) {

      sum = +l1.val;
      l1 = l1.next;
    }
    if (l2 != null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    var node = null;
    if (sum - 10 >= 0) {
      carry = 1;
      sum = sum - 10;
      node =  new ListNode(sum);
    }
    else {
      carry = 0;
        node =  new ListNode(sum);
    }
    l3.next = node;
    l3 = l3.next;
  }
  if (carry === 1) {
    l3.next = new ListNode(1);
    }
  return l3head.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let a = new ListNode(9);
a.next = new ListNode(9);
let b = new ListNode(1);
let c = addLinkList(a, b);
while (c !== null) {
  console.log(c.val);
  c = c.next;
}
