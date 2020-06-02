// valid anagram 242

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Pseudocode:
// naive solution:
// declare a function called isAnagram with two parameters, word1 and word2
    // set a guard to check if the length property of the word1 and length prop[erty of the word2 is NOT equal to each other
        // if true, return false
    // instantiate a variable called sortedWord1 and assign it a returned value of:
        // calling split method with empty string as an argument
        // of its returned value, calling the sort method with no arguments
        // and of its returned value, calling the join method with no arguments
    // set a loop that iterates word1's length many times
        // in each iteration, set a condition to check if sortedWord1 at i'th index is NOT equal to sortedWord2 at i'th index
            // if true, return false
    // otherwise, return true;

// first solution (average runtime of 104ms)
var isAnagram = function (word1, word2) {
    if(word1.length != word2.length) return false;
    
    const sortedWord1 = word1.split('').sort().join();
    const sortedWord2 = word2.split('').sort().join();
    
    if(sortedWord1 != sortedWord2) return false

    return true;
}

// slightly better solution (average runtime of 88ms)
var isAnagram = function (word1, word2) {
    if(word1.length != word2.length) return false;
    
    const charCount = {}

    for(let i = 0; i < word1.length; i++) {
        if(!charCount[word1[i]]) {
            charCount[word1[i]] = 1;
        } else {
            charCount[word1[i]] = charCount[word1[i]] + 1;
        }
    }

    for(let j = 0; j < word2.length; j++) {
        if(!charCount[word2[j]]) return false;
        charCount[word2[j]]--;
    }

    for(let k = 0; k < Object.keys(charCount).length; k++) {
        if(Object.values(charCount)[k] != 0) return false;
    }
    return true;
}