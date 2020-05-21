// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Pseudocode:
// declare a function called mergeTwoLists with 2 parameters l1 and l2;
// instantiate a variable called resultArr with an initial value of an empty string;
// instantiate a variable called newL1 and assign it a returned value of next property of l1
// instantiate a variable called newL1 and assign it a returned value of next property of l2
// set a loop that iterates while 

var mergeTwoLists = function(l1, l2) {
    const resultNode = new ListNode();
    let currentNode = resultNode;

    while(l1 && l2) {
        if(l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next;
        } else{
            currentNode.next = l2;
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }
    while(l1 || l2) {
        if(l1) {
            currentNode.next = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }
    return resultNode
};