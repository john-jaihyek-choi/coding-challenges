// Leetcode 226
// Invert a binary tree.

// Brainstorm:
// few things to consider:
    // very top root of the tree will not change value
    // all the rest will be inverted (assuming null/empty nodes will be inverted as well)
        // logic:
            // on each node...
                // right is set to left
                // left is set to right
// Because this is a binary tree, I will traverse using recursive function
    // recurse left
    // recurse right
// recursion conditions:
    // base condition: stop when the very bottom of the tree is reached
    // otherwise set right to left left to right

// Pseudocode:
// Naive guess:
// declare a function called invertTree with a single parameter root;
    // declare a function called traverseTree with single parameter, node
        // set a base condition to check if left property of the node object AND right property of the node object is falsy
            // if true, return out of the recursive call;
        // instantiate a variable called temp and assign it a value of left property of the node object
        // set left property of the node object equal to the right property of the node object
        // set right property of the node object equal to the temp variable value;
    // call the traverseTree function and pass root as an arugment;
// ** above code will invert the trees, however, wont invert properly.

// Correct solution:
// declare a function called invertTree with a single parameter root;
    // declare a recursive function called invert with a single parameter node
        // set a base condition to check if node is a falsy value
            // if true, exit out of the function
            // otherwise,
                // instantiate a variable called temp and assign it a value of left property of the node object
                // set left property of the node object equal to the right property of the node object
                // set right property of the node object equal to the left property of the node object
                // call a invert function passing left property of the node object as an argument
                // call a invert function passing right property of the node object as an arugmen
    // call invert function passing root as an argument;
    // return root;

var invertTree = function(root) {

    function invert(node) {
        if(!node) return
        let temp = node.left
        node.left = node.right;
        node.right = temp;
        invert(node.left)
        invert(node.right)
    }
    
    invert(root);
    return root;
};