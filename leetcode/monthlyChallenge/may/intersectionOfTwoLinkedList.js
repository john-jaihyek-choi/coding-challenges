// Write a program to find the node at which the intersection of two singly linked lists begins.

// Selfnote:
// initial guess (looping through simultaneously):
// two heads have different length
    // this means few things
        // list will never be able to match unless both head parameters' length matches
            // Because of this, I will need to make sure both moves at different speed
                // but how?
                    // initial guess: move one spaces for one head and 2 spaces for the 2nd head;
                        // this leads to one issue: when the list reaches the end, because there are no cycles, list will be over;
                            // need to find a way to repeat the process until the matching node is found
                                // this leads to on other issue: When there is no matching node, the process will loop infinitely
                                    // How can I make sure that this process repeats with no inifitie loop?
                                        // naive guess: only iterate the process while the head moving 1 spaces at a time is not null;
                                            // this can potentially solve the problem of infitie loop
                                            // if this works, it is safe to say that if there are no matches found until the first head moving 1 spaces at a time get null, it means there are no intersections
// second guess (storing reference of each node for one of the list to an object and revisit during looping the second list):
    //  This can solve the issue of infite loop or chance of missing a match during the iteration;
    // by storing each node of either one of the heads provided as parameter, I can loop through the second head and check if each point matches the reference

// Pseudocode:
    // declare a function called getintersectionNode with 2 parameters headA and headB
        // instantiate a variable called headAList with an initial value of headA
        // instantiate a variable called headBList with an initial value of headB
        // instantiate a variable called checkListArr with an initial value of an empty array;
        // set a loop that iterates while headAList is valid
            // within each iteration, call a push method of the checkListArr object passing in headAList as an argument;
            // after, set headAList equal to next property of the headAList;
        // set another loop that iterates while headBList is valid
            // set a condition to check if head at current iteration of headB exists/included in checkListArr;
                // if true, return its references' val property;
            // and on every iteration, set headBList equal to next property of the headBList object in order for us to traverse through the list;
    // return null if nothing is returned during the iteration above;
    

// first solution (works, but inefficient):
var getIntersectionNode = function(headA, headB) {
    let headAList = headA;
    let headBList = headB;
    let checkListArr = [];
    while(headAList) {
        checkListArr.push(headAList);
        headAList = headAList.next;
    }
    while(headBList) {
        if(checkListArr.includes(headBList)) {
            return headBList.val;
        }
        headBList = headBList.next;
    }
    return null;
};
