// Have you heard about balanced words? If a word is balanced, the sum of the values on the left-hand side of the word is equal to the sum of the values on the right-hand side. Each letter's value comes from its position in the alphabet (a=1, b=2, etc.) and can be summed to determine the left and right hand sums. If a word has an odd number of characters, the middle character should be ignored. Can you write a function that determines whether or not a word is balanced?

// Note:
// First, numeric value of an alaphabest could be found with charCodeAt method and subtracting 97;
// Two possible cases:
    // even length string
        // check from two mid points
    // odd length string
        // check from single mid point
// Question:
    // if empty string is passed, should the function consider it a balanced string?
        // for the sake of this function, I will assume that an empty string is a balanced string;

// Pseudocode:
// declare a function called balancedString with a single parameter, string;
    // instantitate a variable called leftSum and rightSum with an initial value of 0;
    // set a condition to check if the length of the string property modulo 2 is equal to 0;
        // if true,
            // instantiate a variable called leftMid with an initial value of length property of the string object divided by 2;
            // instantiate a variable called rightMid with an initial value of leftMid plus 1;
            // set a loop that iterates half as the length of the string many times
                // set leftSum equal to the sum of itself and the returned value of calling the charCodeAt method of the string at i'th index subtracting 97;
            // set a loop that iterates the length of the string many times starting from rightMid
                // set rightSum equal to the sum of itself and the returned value of calling the charCodeAt method of the string at i'th index subtracting 97;
        // if false,
            // instantiate a variable called midPoint with an intial value of returned value of calling the floor method passing in length property of the string object divded by 2 as an arugment;
            // set a loop that iterates ceiled value of length of the string divded by 2;
                // set leftSum equal to the sum of itself and the returned value of calling the charCodeAt method of the string at i'th index subtracting 97;
            // set a loop that iterates ceiled value of length of the string divded by 2 starting from midPoint;
                // set rightSum equal to the sum of itself and the returned value of calling the charCodeAt method of the string at i'th index subtracting 97;
    // set a last condition to check if the value of leftSum is strictly equal to the value of the rightSum
        // if true, return true,
        // otherwise, return false;

function balancedString (string) { // Time / Space Complexity (O(n) / O(1))
    if(!string) return true;

    let leftSum = 0;
    let rightSum = 0;
    let midPoint = Math.floor(string.length / 2);

    if(string.length % 2 === 0) {
        for(let i = 0; i < midPoint; i++) {
            leftSum += string[i].charCodeAt(0) - 97; // O(n) / O(1);
        };
        for(let j = midPoint; j < string.length; j++) {
            rightSum += string[j].charCodeAt(0) - 97; // O(n) / O(1);
        };
    } else {
        for(let i = 0; i <= midPoint; i++) {
            leftSum += string[i].charCodeAt(0) - 97; // O(n) / O(1);
        };
        for(let j = midPoint; j < string.length; j++) {
            rightSum += string[j].charCodeAt(0) - 97; // O(n) / O(1);
        };
    }

    if(leftSum === rightSum) return true;
    return false;
}