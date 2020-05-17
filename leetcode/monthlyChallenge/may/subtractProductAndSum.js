// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Pseudocode:
// declare a function called subtractProductAndSum with a single parameter n
// set a variable called newNum and assign parameter n and convert the number to string;
// instantiate a variable named product and assign it an initial value of 1
// instantiate a variable named sum and assign it an initial value of 0
// set a loop that iterates length of newNum many times
// within the loop, 
// set product equal to product multiplied by newNum at i'th index
// set a sum equal to sum of sum and newNum
// return product minus newNum

var subtractProductAndSum = function(n) {
    const newNum = String(n);
    let product = 1;
    let sum = 0;
    for(let i = 0; i < newNum.length; i++) {
        product *= Number(newNum[i]);
        sum += Number(newNum[i]);
    }
    return product - sum;
};