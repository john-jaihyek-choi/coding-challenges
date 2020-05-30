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
    // otherwise, tree1 val is equal to sum of tree1 and tree2 val


// Pseudocode:
// declare a function called mergeTrees with 2 set of parameters, t1 and t2
    // set a conditon to check if t1 is invalid
        // if true, return t2
    // set a condition to check if t2 is invalid
        // if true, return t1
    // set t1.val equal to t1.val plus t2.val
    // set t1.left equal to calling recursive mergeTrees function passing t1.left and t2.left as an arguemnt
    // set t1.right equal to calling recursive mergeTrees function pssing t1.right and t2.right as an argument

    // return t1;

var mergeTrees = function(t1, t2) {
    if(!t1) return t2;
    if(!t2) return t1;

    t1.val = t1.val + t2.val;
    t1.left = mergeTrees(t1.left, t2.left)
    t1.right = mergeTrees(t1.right, t2.right);

    return t1;
};
