// Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.

// Pseudocode
// declare a function combinations with unknown number of parameters
// instantiate a variable parameter and assign it a value of length property of the arguments object;
// instantiate a variable result and assign it an initial value of 0th index of arguments object;
// iterate through as much as the value of parameters starting from 1
// set a condition within the loop checking if i'th index of arugments object is NOT equal to 0;
// if true, do the following arithmatic:
    // result = result * i'th index of the arguments object;
// return the result variable;

function combinations () {
    const parameters = arguments.length;
    let result = arguments[0];
    for (let i = 1; i < parameters; i++) {
        if(arguments[i] !== 0) result = result * arguments[i];
    }
    return result;
}