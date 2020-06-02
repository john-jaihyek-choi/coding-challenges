// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Pseudocode:
// declare a function called maxDepth with a single parameter root
// instantitate a variable called deepestDepth with an initial value of 0;
// declare a function called checkDepth with 2 parameters root and depth
    // assign deepestDepth a returned value of calling max method of the Math object passing in depth and deepestDepth as an argument;
    // set a base case to check if root is NOT valid
        // if true, return out of the function
    // call maxDepth function passing in root.left and sum of depth plus 1 as an argument
    // call maxDepth function passing in root.right as sum of depth plus 1 an argument
// call the checkDepth function passing in root and 0 as an argument
// return the variable deepestDepth;

// first solution
var maxDepth = function(root) {
    let deepestDepth = 0;

    function checkDepth(root, depth) {
        deepestDepth = Math.max(depth, deepestDepth);
        if(!root) {
            return
        }
        checkDepth(root.left, depth + 1);
        checkDepth(root.right, depth + 1);
    }

    checkDepth(root, 0);
    return deepestDepth;
};