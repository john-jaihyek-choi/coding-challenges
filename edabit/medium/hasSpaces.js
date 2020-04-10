// Create a function that returns true if a string contains any spaces.

//pseudocode 
// declare a function hasSpaces with single parameter string
// loop through the string parameter
// set a conditional statement checking if the iteration of the string is equal to ' ' (epty string);
// if true, return true
// otherwise, return false

function hasSpaces (string) {
    for (let i = 0; i < string.length; i++) {
        if(string[i] === ' ') {
            return true
        }
    }
    return false;
}