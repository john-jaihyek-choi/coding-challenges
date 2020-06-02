// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
//Return true if and only if the nodes corresponding to the values x and y are cousins.

// selfnote: 
// cousins are the nodes with same depth but with DIFFERENT parent


// Pseudocode:
// declare a function called isCousins with 3 parameters root, x, y

// declare a function called findDepth with a parameter root, n, and depth with initial value of 0
// set a condition to check if val property of the root object is equal to value of n parameter
// if true, return the depth parameter
// otherwise, return left property of the root object and findDepth callback function passing in left property of root object, n, and depth plus 1 as an argument 
// OR right property of the root object and callback of findDepth passing in right property of the root object, n, and depth plus 1 as an arugment

// declare a function called findParent with 3 parameters, root, n, and parent
// set a condition to check if val property of the root object is equal to n
// if true, return the parent parameter
// otherwise, return left property of the root object and findParnet callback function passing in left property of root object, n, and value property of the root object as an argument 
// OR right property of the root object and callback of findParnet passing in right property of the root object, n, and value property of the root object as an arugment

// instantiate a variable called xDepth, yDepth, xParent, and yParent
// assign each variable with a callback functions accordingly (x for x y for y depth for findDepth parent for findParent)
// set a condition to check if xDpeth is equal to yDepth AND xParent is NOT equal to yParent
// if true, return true;
// if false, return false;


var isCousins = function(root, x, y) {
    let xDepth = findDepth(root, x, 0);
    let yDepth = findDepth(root, y, 0);
    let xParent = findParent(root, x, root.val);
    let yParent = findParent(root, y, root.val);

    if(xDepth == yDepth && xParent != yParent) {
        return true;
    } else {
        return false;
    }

    function findDepth(root, n, depth=0) {
        if(root.val == n) {
            return depth
        } else {
            return (root.left && findDepth(root.left,n,depth+1)) || (root.right && findDepth(root.right,n,depth+1))
        }
    } 
    function findParent(root, n, parent) {
        if(root.val == n) {
            return parent
        } else {
            return (root.left && (findParent(root.left,n,root.val)) || root.right && (findParent(root.right,n,root.val)))
        }
    }
};