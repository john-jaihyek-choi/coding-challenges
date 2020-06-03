// Leetcode 437
// You are given a binary tree in which each node contains an integer value.
// Find the number of paths that sum to a given value.
// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

// Brainstorm:
// Things to take in to consideration:
    // 1. path must go downwards 
    // 2. can nodes at multi depth
// Initial guess:
    // Keep track of the root I am starting from until I reach the very bottom of the tree
        // Starting from the root, add values to the left and right bottom nodes
            // if added value is equal to the sum, then return increment the counter that keeps track of number of possible solution
            // if added value is greater than the sum, return out of the recursive call (this shouldnt be checked as the following values may consist negative values)
    // Required arguments to be passed in to recursive function:
        // current root
        // start root
        // path (added values from start to current node)

// Better Guess:
// Requires 2 recursive functions (1 recursive function that call another recursive function)
    // Reason for this is because I need to traverse through the tree starting from the very top of the root to the very bottom
        // in the process, if sum value is found, increment the counter value
        // if reached bottom then return out of the recusive call
    // In order to make this possible, 
        // I will need to make first dfs (depth first search) function that recurses from the starting tree to the bottom
        // And make a second dfs function that calls the above recursive call with different starting root

// Pseudocode:
// declare a function called pathSum with 2 parameters, root and sum
    // instantiate a variable called counter with an initial value of 0;
    // declare a function called traverse_dfs with 2 parameters, node and curVal
        // set a base condition for this recursive function to check if node is a falsy value;
            // if true, return out of this function
        // set a condition to check if sum of curVal and val property of the node object is equal to sum parameter value;
            // if true, increment the counter by 1;
        // call the traverse_dfs function with 2 arguments that traverse left
            // left property of the node object (this will traverse left)
            // value of the sum of curVal and val of the node object;
        // call the traverse_dfs function with 2 arguemnts that traverses right
            // right property of the node object (this will traverse right)
            // value of the sum of curVal and val of the node object;
    // declare a function called start_dfs with single parameter, node
        // set a base condition for this recursive function to check if node is a falsy value;
            // if true, return out of this recursive call;
        // otherwise,
            // call the traverse_dfs function passing in 2 arguments:
                // node
                // value 0 (to start from the value 0)
            // call the start_dfs function passing in left property of the node object
            // call the start_dfs function passing in right property of the node object

// Recap:
    // In order to traverse from the very top to bottom and check for every possible combination of sums down the path I had to consider the following:
        // make sure that I traverse left and right to the bottom of the tree
        // once the above process of traversing from the very top to the bottom,
            // then start from the second to the very top to start with different root
                // eg. if tree goes [10, 5, -3, 3, 2, null, 11]
                    // I need to traverse first (assuming I am traversing left):
                        // 10 -> 5 -> 3 -> ...
                    // once I reach the end, I then need to traverse from second from the very top
                        // 5 -> 3 -> 3 -> ...
    // repeating the above process will eventually go through every possible combination path and return the correct number of counts;


var pathSum = function(root, sum) {
    let counter = 0;

    function traverse_dfs(node, curVal) {
        if(!node) return;

        if(curVal + node.val == sum) counter++;

        traverse_dfs(node.left, curVal + node.val);
        traverse_dfs(node.right, curVal + node.val);
    }

    function start_dfs(node) {
        if(!node) return;

        traverse_dfs(node, 0);
        start_dfs(node.left);
        start_dfs(node.right);
    }

    start_dfs(root);
    return counter;
};