// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// Selfnote:
// each time I traverse through the node, 
    // check if:
        // left of the left node is equal to right of the right node
        // right of the left node is equal to left of the right node
// for the above to be possible, I need to keep track of the following:
    // currentNode or depth of the tree that I am currently on
    // 

// Pseudocode:
// declare a function called isSymmetric with a single parameter root
// instantiate a variable called left with an initial value of root.left
// instantiate a variable called right with an initial value of root.right

// first solution:
var isSymmetric = function(root) {
    let checkStatus = true;
    if(!root) return checkStatus;

    function checkSymmetry(left, right) {
        if(!left || !right) {
            if(left == right) return;
            return checkStatus = false;
        }
        if(left.val !== right.val) return checkStatus = false;
        checkSymmetry(left.left, right.right);
        checkSymmetry(left.right, right.left);
    }

    checkSymmetry(root.left, root.right);
    return checkStatus;
};