// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Pseudocode:
// declare a function called maxSubArray with a single parameter nums
// instantiate a variable called highestSum with an initial value of 0
// instantitae a variable called resultArr with an empty array;
// set a loop that iterates nums' length many times
    // set another loop that iterates nums' length many times starting at i plus 1 index;
        // set a condition to check if nums at i'th index plus 


var maxSubArray = function(nums) {
    let highestSum = 0;
    let temp = 0;
    if(nums.length < 2) return nums[0];
    for(let i = 0; i < nums.length; i++) {
        temp = nums[i];
        console.log("outer:", temp)
        for(let j = i + 1; j <= nums.length; j++) {
            temp = temp + nums[j];
            if(temp > highestSum) {
                highestSum = temp;
            }
        }
    }
    return highestSum;
};