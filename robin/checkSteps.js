// Write a function that returns the fewest number of steps it will take to convert a string into uppercase or into lower case, whichever takes the least number of steps. A step occurs when a character is changed from lower to upper case, or vice versa. Return 0 if the string is empty or if there are no steps needed to be taken.

// Pseudocode:
// declare a function called checkSteps with a single parameter, string
    // instantiate a variable called upper and lower with an initial value of 0;
    // set a loop that iterates the length property of the string object many times;
        // set a condition to check if the returned value of calling match method of the i'th index of the string object, passing in regex checking for lowercase letters, is true
            // if true, increment upper by 1
        // set a second condition to check if the returned value of calling match method of the i'th index of the string object, passing in regex checking for uppercase letters, is true
            // if true, increment lower by 1;
    // return a ternary expression checking if upper is greater than lower
        // if true, return lower
        // otherwise, return upper;

function checkSteps(string) {
    let upper = 0;
    let lower = 0;
    
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[a-z]/)) {
        upper++;
        } else if (string[i].match(/[A-Z]/)) {
        lower++;
        }
    }
    
    return upper > lower ? lower : upper;
}
    
console.log(checkSteps(""));