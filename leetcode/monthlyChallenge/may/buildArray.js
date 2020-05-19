// Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.
// Build the target array using the following operations:
// Push: Read a new element from the beginning list, and push it in the array.
// Pop: delete the last element of the array.
// If the target array is already built, stop reading more elements.
// You are guaranteed that the target array is strictly increasing, only containing numbers between 1 to n inclusive.
// Return the operations to build the target array.
// You are guaranteed that the answer is unique.

// Pseudocode:
// declare a function called buildArray with a 2 parameters, target and n
// instantiate a variable called resultArr with an initial value of an empty arr;
// instantiate a variable called i with an initial value of 0;
// instantiate a variable called currentIndex with an initial value of 1;
// set a loop that iterates while target at i'th index is valid;
// within the loop, set a condition to check if currentIndex is equal to target at i'th index
// if true, push the value 'Push' to the result Array and increment the i;
// otherwise, push the value 'Push' and 'Pop'
// on each iteration of the loop, increment the value of currentIndex
// finally, return the resultArr;

var buildArray = function(target, n) {
    const resultArr = [];
    let i = 0;
    let currentIndex = 1;
    while(target[i]) {
        if(currentIndex == target[i]) {
            resultArr.push('Push');
            i++;
        } else {
            resultArr.push('Push');
            resultArr.push('Pop');
        }
        currentIndex++;
    }
    return resultArr;
};