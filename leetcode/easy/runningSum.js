// #1480
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

var runningSum = function(nums) {
    const result = [];
    let runningSum = nums[0];
    
    for(let i = 0; i < nums.length; i++) {
        if(i == 0) result.push(runningSum);
        else {
            runningSum += nums[i];
            result.push(runningSum);
        }
    }
    
    return result;
};

var runningSum = function(nums) {
    let sum = 0;
    
    return nums.map( x => sum += x );
};
