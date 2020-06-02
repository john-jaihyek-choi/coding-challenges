// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

// Pseudocode:
// declare a function called majorityElement with a single parameter, nums
// instantiate a variable sortedArr and assign it a value returned from calling sort method of the nums object;
// instantiate a variable counter and highFreq with a value of 0;
// instantiate a variable highNum with an initial value of 0th index of the nums object
// create a loop that iterates sortedArray's length many times;
// within the iteration, set a condition to check if sorted array at current index is equal to previous index OR current index is 0;
// if true, increment counter;
// if not, assign a counter a value of 1;
// add additional condition to check if counter is greater than highFreq;
// if yes, set highFreq to counter;
// then set highNum to sortedArr at current iteration index;
// finally, return the highNum;

// first solution
var majorityElement = function(nums) {
    const sortedArr = nums.sort();
    let counter = 0;
    let highFreq = 0;
    let highNum = nums[0];

    for(let i = 0; i < sortedArr.length; i++) {
        if(i == 0 || (sortedArr[i] == sortedArr[i-1])) {
            counter++;
        } else {
            counter = 1;
        }

        if(counter > highFreq) {
            highFreq = counter;
            highNum = sortedArr[i];
        }
    }
    return highNum;
};


// second and more efficient solution
var majorityElement = function(nums) {
    const frequencies = {};
    let highest = nums[0];
    for(let i = 0; i < nums.length; i++) {
        if(frequencies[nums[i]]) {
            frequencies[nums[i]]++;
        } else {
            frequencies[nums[i]] = 1;
        }

        if(frequencies[nums[i]] > frequencies[highest]) {
            highest = nums[i];
        }
    }
    return highest;
};
