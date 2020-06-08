// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Brainstorm
    // array is in form of [x1,x2,...,xn,y1,y2,...,yn]
        // assuming numbers of x numbers and y numbers are equal...
        // array.length / 2 will be the start of y numbers
        // I could simply write two separate loops with different initial starting point
            // first will loop through the first half of the array (0 -> mid);
            // second will loop through the second hlaf of the array (mid -> end);
            // ***** Issue with this is that I cant interchangeably push values to an empty array. So it wont be work;
        // I could loop through the length of the array many times
            // within the loop if the current index of the iteration is even
                // it will push the list from the first half of the array and increment the current value of the first counter;
            // if it is odd,
                // it will push the list from the second half of the array and increment the current value of the second counter

// Pseudocode:
// naive solution:
    // declare a function called shuffle with a two parameters, array and n;
        // instantiate a variable called resultArr with an initial value of empty array;
        // instantiate a variable called xIndex with an initial value of 0;
        // instantiate a variable called yIndex with an initial value of n;
        // set a loop that iterates n many times
            // set a condition to check if the current i is even;
                // if true, push the value at xIndex'th index of the array object to resultArr;
                // otherwise, push the value at the yIndex'th index of the array object to resultArr;
        // return resultArr;

// Time Complexity: O(n)
// Space Complexity: O(n)

var shuffle = function(array, n) { // time / space complexity
    const resultArr = []; // O(1) / O(1)
    let xIndex = 0; // O(1) / O(1)
    let yIndex = n; // O(1) / O(1)
    for(let i = 0; i < array.length; i++) {
        if(i % 2 === 0) {
            resultArr.push(array[xIndex++]); // O(n) / O(n)
        } else {
            resultArr.push(array[yIndex++]); // O(n) / O(n)
        }
    }
    return resultArr;
}; 

// solution with improved readability
var shuffle = function(array, n) { // time / space complexity
    const resultArr = []; // O(1) / O(1)
    for(let i = 0; i < n; i++) {
        resultArr.push(array[i]) // O(n) / O(n);
        resultArr.push(array[i+n]); // O(n) / O(n);
    }
    return resultArr;
}; 