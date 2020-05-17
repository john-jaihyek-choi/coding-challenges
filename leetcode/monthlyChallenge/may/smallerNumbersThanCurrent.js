// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Pseudocode:
// declare a function called smallerNumberThanCurrent with a single parameter, nums;
// instantiate a variable called resultArr with an initial value of empty array;
// within the function, set a loop that iterates length of nums parameter many times (with i);
// instantiate a variable called counter with an initial value of 0
// set another loop that iterates length of nums parameter many times (with j);
// within the loop, set a condition to check if i'th index of nums array is smaller than j'th index of nums array;
// if true, increment the counter variable;
// then once the iteration for j is over, push the counter value to the resultArr;
// return the resultArr;

var smallerNumbersThanCurrent = function(nums) {
    const resultArr = [];
    for(let i = 0; i < nums.length; i++) {
        let counter = 0;
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] > nums[j]) {
                counter++;
            }
        }
        resultArr.push(counter);
    }
    return resultArr;
};