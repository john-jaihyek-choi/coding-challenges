// Leetcode #338
// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// Pseudocode:
// declare a function called countBits with a single parameter, num
    // instantiate a variable called array with an intitial value of an empty array
    // set a loop that iterates num many times
        // instantiate a variable called count with an initial value of 0
        // instantiate a variable called bin and assign it a returned value of calling the toString method of the i object passing in 2 as an arugment;
        // set an inner loop that iterates the length of the bin object many times
            // within the inner loop, set a condition to check if bin at j'th index is equal to 1
                // if true, increment count by 1
        // at the end of each outer iteration loop, call the push method of the resultArr object, passing count as an argument;
    // return resultArr;

var countBits = function(num) {
    const resultArr = [];
    for(let i = 0; i <= num; i++) {
        let count = 0;
        const bin = i.toString(2);
        for(let j = 0; j < bin.length; j++) {
            if(bin[j] == 1) {
                count++;
            }
        }
        resultArr.push(count);
    }
    return resultArr;
};