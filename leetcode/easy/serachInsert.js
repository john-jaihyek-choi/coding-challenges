// Leetcode #35
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

const searchInsert = function(nums, target) {
    let i = 0;
    
    while(nums[i] < target) i++;
    
    return i;
};