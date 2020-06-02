// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Pseudocode:
// declare a function called longestCommonPrefix with a single parameter strs
    //set a guard to check if the length property of the strs object is equal to 0
        // if true, return an empty string;
    // instantiate a variable called prevPrefix with an initial value of an empty string;
    // instantiate a variable called matchingPrefix with an initial value of an empty string;
    // instantiate a variable called strIndex with an initial value of 0

    // set a loop that iterates while strIndex is greater than length of 0th index at strs array
        // on each iteration set prevPrefix to a returned value of strIndex'th index at 0th index of strs array;
        // set a condition to check if prevPrefix is false
            // if true, return matchingPrefix
        // set a loop that iterates length of strs many times
            // on each iteration set a condition to check if strIndex'th index of i'th index of the strIndex is equal to prevPrefix
                // if true, set prevPrefix to strIndex'th index of i'th index of strs array
                // set another condition to check if i is equal to length of strs minus 1
                    // if true, increment strIndex
                        // concatenate prevPrefix to matchingPrefix
                // otherwise,
                    // return matching Prefix
    // return the variable matchingPrefix;



var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    let prevPrefix = ''
    let matchingPrefix = ''
    let strIndex = 0;

    while(strIndex < strs[0].length) {
        prevPrefix = strs[0][strIndex]
        if(!prevPrefix) return matchingPrefix
        for(let i = 0; i < strs.length; i++) {
            if(strs[i][strIndex] == prevPrefix) {
                prevPrefix = strs[i][strIndex]
                if(i == strs.length - 1) {
                    strIndex++;
                    matchingPrefix += prevPrefix;
                }
            } else {
                return matchingPrefix;
            }
        }
    }
    return matchingPrefix;
};