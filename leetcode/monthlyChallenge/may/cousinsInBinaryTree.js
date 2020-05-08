// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
//Return true if and only if the nodes corresponding to the values x and y are cousins.

// selfnote: 
// cousins are the nodes with same depth but with DIFFERENT parent
// the very first depth (k = 1) will share same parents, so they cannot be cousins
// but the pair of nodes depth greater than 1 will all be cousins of each other;
// pattern in this problem: value of the node / 2 and rounded down will always eqal to value of depth;

// Pseudocode:
// declare a function called isCousins with 3 parameters root, x, y
// instantiate a variable called xDepth and yDepth;
// for each of the above two variables, do the following mathematic expression: provided node's value's (x for x, y for y) index at root array plus 1 divded by 2 and of its returned value, floor the value;
// set the first condition checking if xDepth OR yDepth is equal to 1
// if so, return boolean value of false
// set the second condition checking if xDepth is strictly equal to yDepth
// if true, return boolean value of true
// otherwise, return boolean value of false

var isCousins = function(root, x, y) {
    // const xDepth = Math.floor((root.indexOf(x)+1)/2);
    // const yDepth = Math.floor((root.indexOf(y)+1)/2);

    // if(xDepth === 1 || yDepth === 1) return false;
    // if(xDepth === yDepth) return true;
    // return false
};