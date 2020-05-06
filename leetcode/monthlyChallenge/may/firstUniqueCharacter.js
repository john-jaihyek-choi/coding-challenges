// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Pseudocode:
// declare a function called firstUniqueCharacter with a single parameter, string;
// iterate the process as many as string's length many times,
// within the iteration, check if the character at current iteration index is NOT included in the string parameter AFTER the strings of the current index (if on index 3, then 0-3 wont count)
// if true, return the current index i of the iteration
// if false, return -1;

var firstUniqChar = function(string) {
    let result = -1;
    for(let i = 0; i < string.length; i++) {
        if(string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
           result = string.indexOf(string[i]);
           return result; 
        }
    }
    return result;
};

