// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

// Selfnote:
// Naive guess:
    // set a loop that iterates first set of tree
        // in each iteration, check if set 2 of the tree has a null value
        // as long as it is not null, I will add value and traverse to left and right
            // in the process, I will probably need recursion function that stretches left and right
// some of conditions to keep in mind:
    // tree 1 is null and tree 2 is not: Set tree1 to tree2 val
    // tree 2 is null and tree 1 is not: Keep the tree1 val
    // tree 1 is null and tree 2 is null: exit out of function


// Pseudocode:
// declare a function called mergeTrees with 2 set of parameters, t1 and t2
    // instantiate a variable called t1Head with an initial value of t1
    // instantiate a variable called t2Head with an initial value of t2
    // set a loop that iterates while t1Head is valid;
        // set a condition to check if t2Head is valid
        // if true, set t1Head to sum of t1Head and t2Head;
        // otherwise, 

var mergeTrees = function(t1, t2) {
    if(!t1) return t2;
    if(!t2) return t1;

    t1.val = t1.val + t2.val;
    mergeTrees(t1.left, t2.left)
    mergeTrees(t1.right, t2.right);

    return t1;
};
