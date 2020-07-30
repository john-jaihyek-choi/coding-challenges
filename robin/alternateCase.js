// Write a function that accepts a string and returns the string with alternating case. For example, "Hi there" would turn into "hI tHeRe". Make sure to ignore spaces!

// Pseudocode:
// declare a function called alternateCase with a single parameter, string
    // instantiate a variable called newString with an initial value of empty string;
    // instantiate a variable called upperCase with and assign it a ternary condition checking for following:
        // if the returned value of calling toUpperCase method of the string at 0th index'th object is equal to string array at 0th index
            // if true, return true;
            // otherwise, return false;
    // set a loop that iterates the length property of the string many times
        // set a condition to check if the returned value of calling match method of the i'th index of the string object, passing in regex checking for non alphabetical characters, is true
            // if true, concatenate string at i'th index on newString;
                // and set upperCase equal to the opposite of itself;
            // otherwise,
                // set a condition to check if upperCase is truthy
                    // if true, concatenate the returned value of calling toLowerCase method of the i'th index of the string object to the newString object;
                    // otherwise, concatenate the returned value of calling toUpperCase method of the i'th index of the string object to the newString object;
        // at the end of each iteration, set upperCase equal to the opposite of itself;
    // return newString;

function alternateCase(string) {
    let newString = '';
    let upperCase = string[0].toUpperCase() === string[0] ? true : false;
    
    for(let i = 0; i < string.length; i++) {
        if(string[i].match(/[^A-Za-z]/)) { // if space;
            newString += string[i];
            upperCase = !upperCase;
        } else {
            if(upperCase) { // if uppercase;
                newString += string[i].toLowerCase();
            } else { // if lowercase;
                newString += string[i].toUpperCase();
            }
        }
        upperCase = !upperCase;
    }
    
    return newString;
}

console.log(alternateCase("hi robin how's your day going"))