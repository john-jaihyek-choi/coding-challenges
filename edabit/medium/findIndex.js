// Create a function that takes an array and a string as arguments and return the index of the string.

// pseudocode
// declare a function findIndex and give 2 parameters, array and string
// inside a function, create a loop that loops through the array parameter
// insdie a loop, if the value of string parameter is equal to the current iteration value of an array, return the index of the current iteration
// otherwise, return undefined

function findIndex(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) return i;
    }
    return undefined;
}