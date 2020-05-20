// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// brainstorm:
// target = num[x] + num[y]
// same number on index cannot be used
// will need to keep track of current main
// possibly use two for loops and add jth value at every ith and return out if a number is equal to 9


// Pseudocode:
// declare a function called twoSum with 2 parameters nums and target
    // instantiate a variable called resultArr with an initial value of an empty string;
    //  set a loop that iterates nums' length many times
    // within each iteration, set another loop that iterates through nums array starting at i+1 value;
        // set a condition to check if value at nums at index i is equal to value at nums at index j;
        // if true, call the indexOf method on nums object at index of i and push the returned value to the resultArr
            // call the indexOf method on nums object at index of j and push the returned value to the resultArr;
            // lastly, call sort method of resultArr object then return the returned value;

var twoSum = function(nums, target) {
    const resultArr = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                resultArr.push(nums.indexOf(nums[i]));
                resultArr.push(nums.indexOf(nums[j]));
                return resultArr.sort();
            }
        }
    }
};