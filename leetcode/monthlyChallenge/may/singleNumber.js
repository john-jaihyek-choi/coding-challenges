// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Pseudocode:
// declare a function called singleNumber with a single parameter nums
// set a loop that iterates length of nums many times
    // on each iteration set a condition to check if value of nums at currentIndex doest NOT exists in the substring of nums between current index + 1 and length of nums - 1
        // if true, 

// first solution
var singleNumber = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(!(nums.slice(i + 1, nums.length).includes(nums[i]) || nums.slice(0, i).includes(nums[i]))){
            return nums[i]
        }
    }
};

// second solution
var singleNumber = function(nums) {
    return nums.reduce( (prev, cur) => {
        return prev ^ cur
    }, 0)
};

// third solution
var singleNumber = function(nums) {
    
};