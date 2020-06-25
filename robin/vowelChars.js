// Supercalifragilisticexpialidocious - now you can say it backwards which is Dociousaliexpisticfragicalirupus! But that's going a bit too far, don't you think? This is not a string reversal challenge - did you think it was? Instead, can you write a function that returns the number of vowels in a string? In particular, the team at Robin REALLY wants to know how many vowels are in "supercalifragilisticexpialidocious"!

// Brainstorm:
// using regex for concise code
    // /[aeiouAEIOU]/g
// given a string, check whether the string contains vowels and store the matches in array;
// return the length of the return array;

// Pseudocode:
// declare a function called countVowel with a single parameter string;
// set a condition to check if a string parameter is a falsy value;
    // if true, return 0;
// call a match method of the string object passing regex checking for lower and uppercase vowels
    // of its returned value, get the length property and return the value;

function countVowel(string) {
    if(!string) return 0;
    return string.match(/[aeiouAEIOU]/g).length;
}

console.log(countVowel('Supercalifragilisticexpialidocious'));