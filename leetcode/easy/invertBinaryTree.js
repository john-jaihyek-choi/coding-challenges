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

// Recap:
    // Some challenges I faced was that the only inner layer of the left and right were being inverted
        // results were:
            // left.left = left.right
            // left.right = left.left
            // right.right = right.left
            // right.left = right.right
    // However, I had to make sure that outer layer needed to be inverted as well
        // for example:
            // left.left = right.right
            // left.right = right.left
            // right.right = left.left
            // right.left = left.right
    // Main issue of the naive solution was that I was not passing left and right of the node recursively and separately
    // Because I set node.left = node.right and node.right to node.left
        // Now each of its object held:
            // node.left held children node of what was originally a node.right's 
            // node.right held children node of what was originally a node.left's
    // And by passing node.left and node.right as an arugument of invert function, it was recurvsively repeating the process and result to a proper answer.


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