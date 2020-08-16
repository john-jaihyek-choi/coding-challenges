// Write a function that takes in a string and returns the index of the first vowel in the string. Y is not considered a vowel, the string should always contain a vowel, and the string must be only one word.

// Pseudocode:
// declare a function called findFirstVowel with a single parameter, word
    // set a loop that iterates length of the word object many times
        // set a condition to check if the returned value of calling match method of the word at i'th index is true
            // if true, return i

function findFirstVowel(word) {
    for(let i = 0; i < word.length; i++) {
        if(word[i].match(/[aeiouAEIOU]/)) return i;
    }
}

console.log(findFirstVowel('word'))