// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

// Pseudocode:
// declare a function called greaterThanOne with a single parameter, string
// instantiate a variable called fraction;
// use the Number method passing in string as an argument and assign the returned value to a variable named fraction;
// set a condition checking if fraction is greater than 1;
// if true, return true;
// otherwise, return false;

function greaterThanOne (string) {
    const fraction = Number(string);
    if(fraction > 1) return true;
    return false;
}