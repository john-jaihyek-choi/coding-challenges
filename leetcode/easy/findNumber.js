// Given an array nums of integers, return how many of them contain an even number of digits.

// Pseudocode:
// declare a function called findNumber with a single parameter, nums
// instantiate a variable called counter with an initial value of 0
// set a loop that iterates length of nums parameter many times;
// instantiate a variable called temp with an initial value of 0;
// within each iteration, increment the temp value
// out of the inner loop, set a condition to check if temp is even
// if even, increment the counter by 1
// otherwise, do nothing
// return the counter

var findNumbers = function(nums) {
    let counter = 0;
    for(let j = 0; j < nums.length; j++) {
        let temp = 0;
        for(let i = 0; i < String(nums[j]).length; i++) {
            temp++
        }
        if(temp % 2 == 0) counter++;
    };
    return counter;
};