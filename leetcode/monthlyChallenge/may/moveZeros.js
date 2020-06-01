// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Selfnote:
// Initial guess (allocating new array) time = O(n) space = O(n):
// create a new set of array
// loop through the initial array and push the non zero elements to the new empty array;
// if element is 0 then increment the counter by 1
// set another loop that iterates while counter is greater than zero
// push all zeros to the array copy and return that array

// better solution guess:
// in order for me to swap 0 elements to the end of an array, we need 2 pointers
    // slow
        // slow will move when zero has been found and swapped with new non-zero element
    // fast
        // fast will move when slow pointer has non-zero element


// Pseudocode:
// declare a function called moveZeros with a single parameter nums;
    // instantiate a variable called slow with an initial value of 0
    // instantiate a variable called fast with an initial value of 1;
    // set a loop that iterates while fast is less than the length of nums parameter array
        // set a condition to check if nums at slow'th index and fast'th index is both equal to 0
            // if true, increment fast by 1
        // set a condition to check if nums at slow'th index is equal to 0
            // if true, set nums at fast'th index equal to nums at slow'th index and vice versa
                // then increment slow by 1 and increment fast by 1;


var moveZeroes = function(nums) {
    const newNums = [];
    let counter = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            newNums.push(nums[i]);
        } else{
            counter++;
        }
    }
    
    while(counter > 0) {
        newNums.push(0);
        counter--;
    }

    return newNums;
};

