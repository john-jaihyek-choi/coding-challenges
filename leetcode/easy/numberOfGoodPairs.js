// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

var numIdenticalPairs = function(nums) {
    const diff = {};
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                count++;
            }
        }
    }
    
    return count
};

var numIdenticalPairs = function(nums) {
    const items = {};
    let count = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(items[nums[i]] === undefined) {
            items[nums[i]] = 1;
        } else {
            count += items[nums[i]];
            items[nums[i]]++;
        }
    }
    
    return count
};