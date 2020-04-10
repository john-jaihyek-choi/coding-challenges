// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// Pseudo Code
// declare a function 'comp' with two parameters, string1 and string2
// call a length property of the object string1 which is a first parameter of the function and assign the returned value to a const variable val1
// call a length property of the object string2 which is a second parameter of the function and assign the returned value to a const variable val2
// set a conditional which checks whether val1 and val2 is equal to each other
// if true, return 'true'
// otherwise, return 'false'

function comp(string1, string2) {
    const val1 = string1.length;
    const val2 = string2.length;
    if(val1 === val2) return true;
    return false;
}