// Leetcode 448

// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

var findDisappearedNumbers = function(nums) {
    const existingNum = {};
    const missingItems = [];
    
    for(let i = 0; i < nums.length; i++) {
        existingNum[i+1] = false;
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(!existingNum[nums[i]]) existingNum[nums[i]] = true;
    }
    
    for(num in existingNum) {
        if(!existingNum[num]) missingItems.push(num);
    }
    
    return missingItems;
};

