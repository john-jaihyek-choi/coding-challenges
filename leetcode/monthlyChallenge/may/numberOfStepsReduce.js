// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Pseudocode:
// declare a function called numberOfSteps with a single parameter num
// within a function, 
// instantiate a variable called counter and give it an initial value of 0;
// instantiate a variable called newNum with initial value of 0
// create a loop that iterates while num divided by 2 is greater than 0;
// within the iteration, 
// set newNum to num / 2;
// set a condition to check if num divided by 2 is odd
// if odd, set newNum and subtract 1

var numberOfSteps  = function(num) {
    let counter = 0;
    let newNum = num;

    while(num) {
        if((newNum/2) % 2 == 0) newNum = newNum / 2;
        if((newNum/2) % 2 == 1) newNum = newNum - 1;
        if(newNum == 0) return counter;
        counter++
    }
};
