// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// pseudocode
// declare a function lessThanOrEqulToZero with a single parameter, number;
// set a condition to check if the value of number parameter is less than or equal to 0;
// if yes, return true
// otherwise, return false;

function lessThanOrEqaulToZero (number) {
    Number(number);
    if(typeof(number) !== 'number') return 'please input a number as an argument'
    if(number <= 0) return true;
    return false;
}