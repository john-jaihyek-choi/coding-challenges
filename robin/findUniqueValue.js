// Can you write a function that takes an array of values and remove all duplicate elements in the array? Make sure to return the array with only the unique values remaining.

// Brainstorm:
// declare a function called findUniqueValue with a single parameter, array
    // instantiate a variable called uniqueValue with an initial value of an empty object;
    // instantiate a variable called result with an initial value of an empty array
    // set a loop that iterates length property of the array many times
        // set a condition to check if uniqueValue at array at i'th index is invalid
            // if true, set uniqueValue at array at i'th index equal to 1
            // otherwise, increment uniqueValue at array at i'th index
    // set a loop that iterates through the uniqueValue object, value being the value of each iteration
        // set a condition to check if uniqueValue at value index is equal to 1
            // if true, call the push method of the result obejct, passing in value as an arugment;
    // return result;

function findUniqueValue(array) {
    const uniqueValue = {};
    const result = [];

    for(let i = 0; i < array.length; i++) {
        if(!uniqueValue[array[i]]) {
            uniqueValue[array[i]] = 1;
        } else {
            uniqueValue[array[i]]++;
        }
    }

    for(value in uniqueValue) {
        if(uniqueValue[value] === 1) result.push(value);
    }

    return result;
}
