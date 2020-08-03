// Reverse a singly linked list.

// Pseudocode:
// declare a function called reverseList with a single parameter, head;
    // instantiate a variable called prev with an initial value of null;
    // set a loop that iterates while head is truthy;
        // instantiate a variable called next and assign it a value of next property of the head object;
        // set next property of the head object equal to prev;
        // set prev equal to head
        // set head equal to next;
    // return prev;

var reverseList = function(head) {
    let prev = null;
    
    while(head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    
    return prev
};