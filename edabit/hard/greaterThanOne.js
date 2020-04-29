// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

// Pseudocode:
// declare a function called greaterThanOne with a single parameter, string
// instantiate a variable called numerator and demoninator;
// assign the value of 0th index of the returned value of the split method of the string passing in value '/' as an argument to the numerator
// assign the value of 1st index of the returned value of the split method of the string passing in value '/' as an argument to the denominator
// set a condition checking if numerator divided by denominator is strictly greater than 1;
// if true, return true;
// otherwise, return false;

function greaterThanOne (string) {
    const numerator = string.split('/')[0]
    const denominator = string.split('/')[1]
    if(numerator/denominator > 1) return true;
    return false;
}