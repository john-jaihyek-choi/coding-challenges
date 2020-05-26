// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Pseudocode:
// declare a function called maxDepth with a single parameter root
// set a base case to check if root.val is NOT valid
    // if true, return out of the function
// call maxDepth function passing in root.left as an argument
// call maxDepth function passing in root.right as an argument

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