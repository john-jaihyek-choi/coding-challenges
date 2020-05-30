// Create a function that takes an array containing nested arrays as an argument. Each subarray has 2 elements. The first element is the numerator and the second element is the denominator. Return the sum of the fractions rounded to the nearest whole number.


// Pseudocode:
// declare a function called sumFractions with a single parameter, array
    // instantiate a variable called sum with an initial value of 0;
    // set a loop that iterates lengt of array parameter many times;
        // on each iteration,
            // do the following math expression;
                // array at i'th index of 0th index divided by array at i'th index of first index
                // call a toFixed method of the returned value from the above and pass 0 as an argument;
                // add the returned value to sum variable every time
    // return the sum;


    function sumFractions(arr) {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {
            sum = sum + Number(arr[i][0] / arr[i][1]);
        }
        return Number(sum.toFixed(0));
    }