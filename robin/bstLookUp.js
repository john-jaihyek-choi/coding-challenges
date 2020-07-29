// Let's refresh one of the most basic and famous algorithm topics - Binary Search. Here's a fundamental search challenge for you to tackle! Binary search algorithms are often efficient, and they work by repeatedly dividing the list in half and working with the portion that may contain the item being looked for until the possible location is narrowed down to just one element. Try giving it a shot!

// assume there is a 'node' consisted of tree

// Pseudocode:
// declare a function called lookUp with a single variable value;
    // instantiate a variable called currentNode with an initial value of value property of the node object;
    // set a condition to check if currentNode variable is falsy;
    // set a loop that iterates while currentNode is truthy;
        // set a condition to check if the value of the currentNode object is equal to the value
            // if true, return currentNode
        // set a condition to check if the value is less than the value property of the currentNode object
            // if true, set currentNode equal to left property of the currentNode
            // otherwise, set currentNode equal to right property of the currentNode;
    // return null;


function lookup(value){
    let currentNode = node.value;
    if(!currentNode) return null;
    while(currentNode) {
        if(currentNode.value === value) return currentNode;
        if(value < currentNode.value) {
        currentNode = currentNode.left;
        } else {
        currentNode = currentNode.right;
        }
    }
    return null;
}