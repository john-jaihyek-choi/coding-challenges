// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Brainstorm:
// given a list of number in an array, I need to find out the highest product combination and return its value using the following expression:
    // (nums[i]-1)*(nums[j]-1)
// for me to find the highest possible product at 2 indicies,
    // I need to loop through an array
        // and in each iteration, need to loop through another loop that starts index + 1 of the current index;
    // need to instantiate a variable too keep track of the highest value
    // if current product is greater than the highest value
    // assign highest value a value of the current product index;

// Pseudocode:
// declare a function called maxProduct with a single parameter, nums
    // intantiate a variable called highest and assign it an initial value of 0;
    // set a loop that iterates length of nums many times
        // within each iteration, set another loop that iterates length of the nums many times starting at index i + 1;
            // within the inner loop,
                // set a condition to check if the following expression is true:
                    // product of nums at i'th index minus 1 and nums at j'th index minus 1;
                // if true, assign the above expression's returned value as the highest;
    // return highest;


// Time Complexity: O(n^2);
// Space Complexity: O(n);

var maxProduct = function(nums) { // Time / Space Complexity
    let highest = 0; // O(1) / O(1)
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++) {
            if((nums[i]-1) * (nums[j]-1) > highest) { 
                highest = (nums[i]-1) * (nums[j]-1); // O(n) * O(n) / O(n);
            }
        }
    }
    return highest;
};

// shorter and improved readability
var maxProduct = function(nums) { // Time / Space Complexity
    const newArr = nums.sort( (a,b) => {
        return b-a
    });
    return (newArr[0]-1) * (newArr[1]-1)
};