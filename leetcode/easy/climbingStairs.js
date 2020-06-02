// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// selfnote:
// two different approaches:
    // bottom-up
        // bottom up starts from the bottom (0) and keeping track of its two previous values
    // top-bottom
        // top-bottom starts from the number n and goes down until 0 is made

// Pseudocode:
// declare a function called climbStairs with a single parameter n
// instantiate a variable called resultArr with an initial value of an array with value 1 as the 0th index and 1 as second index
// set a loop that iterates n many times
    // on each iteration, find the mathematic expression of sum of resultArr at i minus 1 index and resultArr at i minus 2 index
    // and push the returned value to the resultArr
// return the last index of the resultArr as an answer

// Top-down approach:
var climbStairs = function(n) {
    const resultArr = [ 1, 1 ];
    for(let i = 2; i <= n; i++) {
        resultArr.push( resultArr[i - 1] + resultArr[i - 2]);
    }
    return resultArr[resultArr.length - 1];
};
