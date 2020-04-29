// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Pseudocode:
// declare a function called getMultipliedArr with a single parameter, arr;
// instantiate a variable named newArr and assign the following value:
// call a map method of the array object passing in a callback function with single parameter currentNumber;
// within the callback, multiply currentNumber by 2 and return the returned value;
// return the newArr

function getMultipliedArr(arr) {
    const newArr = arr.map(currentNumber => {
        return currentNumber * 2;
    })
    return newArr
}