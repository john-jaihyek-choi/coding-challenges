// Given a linked list, determine if it has a cycle in it.
// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// SelfNote:
// Assuming that each value in the list is unique,
// we will need to check on each iteration of the array index, I need to check if the value is previously existing value;
// my naive first solution would be (does not work because there are repeating numbers in the array and each value is not unique):
    // push each value to a new empty array on each iteration
    // check to see if current value on current iteration is existing in the new array we've been collecting datas in
    // if it exists, I will return true because it will be a circular reference;
    // lastly set a condition to check if head.next is null
        // if true, return false as there will not be any loops

// proper solution using slow and fast:
    // intuition: 
        // slow will move one space from the prev point
        // fast will move two spaces from the prev point
        // if the slow and the fast meets, it means there is a loop
        // if fast does not exist, it means that the has null value which means the end of the array which means their is no loop


// Pseudocode:
// first solution try (does not work)
// declare a function called hasCycle with a single parameter head;
    // instantiate a variable called prevVals and assign it an initial value of empty array;
    // declare a recrusive function called check with a single parameter, head;
        // set a guard to check if head is a falsy value (null in specific)
            // if true, return false as it means that head does not have a next value which means it does not loop
        // set a base condition to check if head.val exists in the prevVals array;
            // if true, we will return true;

// proper solution 
// declare a function called hasCycle with a single parameter head;
    // instantiate a variable called slow and fast, both with initial value assigned as head
    // set a loop that iterates while fast has a valid value;
        // set slow to next property of the slow object (this means slow will move one spaces on each iteration)
        // set a condition to check if the next property of the fast object is valid
            // if true, set fast to next property of the next property of the fast object;
            // otherwise, return false;
        // set a condition to check if slow is equal to fast (*** Important: here, reason why I check slow to fast rather than slow.val to fast.val is because I need to know if they are memory allocated in the same point not comparing the value of the node)
            // if true, return true;
    // if nothing returns in the loop above, return false to indicate that the listNode provided is not a linked list;

// first solution
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast) {
        slow = slow.next;
        if(fast.next) {
            fast = fast.next.next;
        } else {
            return false;
        }
        if(fast == slow) {
                return true
        }
    }
    return false;
};

// second solution
var hasCycle = function(head) {
    if(!head) return false;
    let slow = head;
    let fast = head.next;

    while(fast !== slow) {
        if(!fast || !fast.next) return false;

        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};