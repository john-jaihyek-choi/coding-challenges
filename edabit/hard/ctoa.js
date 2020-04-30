// Create a function that returns the ASCII value of the passed in character.

// Pseudocode
// declare a function called ctoa with a single parameter, character;
// instantiate a variable result
// call the charCodeAt method of the character object with no arguments and assign the returned value to the variable result;
// return the value of result;

function ctoa (character) {
    const result = character.charCodeAt();
    return result;
}