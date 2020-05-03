// Create a function that takes an array and returns a new array containing only prime numbers.

// Pseudocode:
// declare a function called filterPrimes with single parameter, numsArray;
// instantiate a variable named newArr with an inital empty array;
// within the function create a loop that iterates array's length many times;
// within the loop set a condition to check if each iteration's number value divided by 2 is not a whole number;
// if true, push that number value to newArr array;
// otherwise, do nothing
// return the newArr;

function filterPrimes (numsArray) {
    const newArr = [];
    for(let i = 0; i < numsArray.length; i++) {
        let count = 0;
        for(let j = 1; j < 10; j++) {
            if((numsArray[i] / j) % 1 !== 0) {
                count++
                break;
            }
        }
        if(count > 0) newArr.push(numsArray[i]);
    }
    return newArr;
}