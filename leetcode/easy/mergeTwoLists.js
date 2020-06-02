// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Pseudocode:
// declare a function called mergeTwoLists with 2 parameters l1 and l2;
// instantiate a variable called resultNode and assign it a new Class of ListNode
// instantiate a variable called currentNode and give it an iniitial value of resultNode;
// set a loop that iterates while l1 and l2 is valid
    // set a condition to check if val property at l1 is less than val property at l2
        // if true, assign currentNode.next a value of l1
        // assign l1 a next property of itself (this is to move to the next list)
        // otherwise, assign currentNode.next a value of l2
        // assign l2 a next property of itself (this is to move to the next list)
    // set currentNode to returned value of next property of the currentNode object (this is to move to the next like of the list)

// set a loop that iterates while l1 OR l2 is valid (this is to take care of the remaining items on either l1 or l2)
    // set a condition to check if l1 is valid
        // if true, assign currentNode.next a value of l1
        // assign l1 a next property of itself (this is to move to the next list)
        // otherwise, assign currentNode.next a value of l2
        // assign l2 a next property of itself (this is to move to the next list)
    // set currentNode to returned value of next property of the currentNode object (this is to move to the next like of the list)

// Finally, return the next property of resultNode object (reason for next to is to remove the unwanted 0, as the list starts with the val 0);

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
    return resultNode.next
};