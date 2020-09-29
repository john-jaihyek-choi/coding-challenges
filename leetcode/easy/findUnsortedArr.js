// #581
// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
// You need to find the shortest such subarray and output its length.

var findUnsortedSubarray = function(nums) {
    const sortedArr = nums.slice().sort( (a,b) => a - b);
    
    let start = nums.length - 1;
    let end = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != sortedArr[i]) {
            start = Math.min(start, i);
            end = Math.max(end, i);
        }
    }
    
    if(end <= start) return 0;
    return end - start + 1;
};