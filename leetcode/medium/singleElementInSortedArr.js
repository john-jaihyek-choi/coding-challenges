// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Pseudocode: 
// declare a function called singleNonDuplicate with a single parameter, nums
// create a loop that iterates length of the nums parameter many times
// set a condition to check if value at num on current iteration is not equal to previous index or next index
// if true, return nums at current index

var singleNonDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i+=2) {
        if(nums[i] != nums[i-1] && nums[i] != nums[i+1]) return nums[i];
    }
}
