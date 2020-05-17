// We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Pseudocode:
// Declare a function called decompressRLElist with a single parameter nums;
// instantiate a variable called result Arr with an empty string as an initial value;
// within the function, set a loop that iterates length of the num object many times;
// set the incrementor to increment by 2 on each iteration
// within the loop set variable called freq with inital value of nums at i'th index
// set another variable called value with initial value of nums at i + 1'th index
// set a loop that iterates freq many times, and within the loop, push variable value to the resultArr;
// finally, return the resultArr;

var decompressRLElist = function(nums) {
    const resultArr = [];
    for(let i = 0; i < nums.length; i += 2) {
        let freq = nums[i]
        let value = nums[i+1]
        for(let j = 0; j < freq; j++) {
            resultArr.push(value);
        }
    }
    return resultArr;
};