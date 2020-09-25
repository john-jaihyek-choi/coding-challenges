// #268
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

var missingNumber = function(nums) {
    const sortedNum = nums.sort((a, b) => a - b)
    
    for(let i = 0; i <= sortedNum.length; i++) {
        if(i != sortedNum[i]) return i;
    }
    
    return false;
};