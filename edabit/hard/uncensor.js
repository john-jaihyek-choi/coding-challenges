// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.
// Given a censored string and a string of the censored vowels, return the original uncensored string.

// Pseudocode
// declare a function called uncensor with two parameters, censoredStrings and vowels
// instantiate a variable named uncensored with an inital value of empty string;
// instantiate a variable named vowelString
// call the split method of the vowels object passing in empty string as an argument and assign the returned value to the vowelString variable;
// create a loop that iterates as much as the value of length property of the censoredStrings many times;
// on each iteration, check if the current iteration's letter value is strictly equal to '*';
// if yes, concatenate the shifted value of vowel to the variable uncensored
// otherwise, concatenate the censoredStrings at i'th index; 
// then return the result variable

function uncensor (censoredStrings, vowels) {
    let uncensored = "";
    let vowelString = vowels.split('');

    for (let i = 0; i < censoredStrings.length; i++) {
        if(censoredStrings[i] === "*") {
            uncensored += vowelString.shift();
        } else {
            uncensored += censoredStrings[i];
        }
    }
    return uncensored;
}