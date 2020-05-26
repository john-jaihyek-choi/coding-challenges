// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// Selfnote:
// each time I traverse through the node, 
    // check if:
        // left of the left node is equal to right of the right node
        // right of the left node is equal to left of the right node 

// Pseudocode:
// declare a function called isSymmetric with a single parameter root
// instantiate a variable called checkStatus with an initial value of true;
    // set a guard to check if root is a falsy value
        // if true, return the variable checkStatus
    // declare a function called checkSymmetry with 2 parameters, left and right
        // within the function set a condition to check if either left or right is a falsy value
            // if true,
                // set a condition to check if left is equal to right
                    //if true, return out of the function
                    // otherwise, set checkStatus value to false and return out of the function
        // set another condition to check if val of left and val of right is not equal to each other
            // if true, set checkStatus equal to false and return out of the function
        // call checkSymmetry function passing left.left and right.right as an argument
        // call checkSymmetry function passing left.right and right.left as an argument
    // call checkSymmetry function passing in root.left and root.right
    // return checkStatus;


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