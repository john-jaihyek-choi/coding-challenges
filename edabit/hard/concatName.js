// Given two strings, firstName and lastName, return a single string in the format "last, first".

// pseudocode
// declare a function with 2 parameters, firstName and lastName
// concatenate the value of lastName with ' , ' and firstName
// assign the returned value to a fullName
// return the value of fullName;

function concatName(firstName, lastName) {
    const fullName = lastName + ', ' + firstName;
    return fullName;
}