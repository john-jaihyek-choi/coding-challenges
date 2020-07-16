// Do you remember the joke "Why was 6 afraid of 7? Because 7, 8, 9!" ? Well, that joke was wrong. A number can only eat the number to the right of it if the number is SMALLER. Once it eats that number, it turns into the sum of itself and that number. In our case, only one number will be eating - this number is the first in the array. You need to create a function that returns the final array after this number has finished eating.

// Overview:
// function will receive array of numbers
// the very first number of the array will eat the number that comes after it
// However, number can eat the number next to it ONLY if the current number is BIGGER than the next

// Question:
// Can number in an array receive negative number?
// will assume that the input will be consisted of all positive integers

// Pseudocode:
// declare a function called eatTheNumber with a single parameter, array
    // instantiate a variable called eatenArr with an initial value of empty array
    // instantiate a variable called prevSum with an initial value of array at 0th index
    // set a loop that iterates length property of the array many times, starting from 1
        // set a condition to check if array at i'th index is less than prevSum
            // if true, add prevSum to array at i'th index
            // otherwise,
                // call a push method of the eatenArr object passing in prevSum as an argument
                // set prevSum equal to array at i'th index;
    // return eatenArr;

function eatTheNumber(array) {
    const eatenArr = [];
    let prevSum = array[0];
    for (let i = 1; i <= array.length; i++) {
      if (array[i] < prevSum) {
        prevSum += array[i];
      } else {
        eatenArr.push(prevSum);
        prevSum = array[i];
      }
    }
    return eatenArr;
  }
  
  console.log(eatTheNumber([2, 4, 3, 9, 5, 2, 45]));