// Beginner programmer John Doe wants to make a program that adds and outputs each positive digit entered by the user (range is int). For instance, the result of 5528 is 20 and the result of 6714283 is 31.

// Pseudocode:
// Declare a function called addDigits with a single parameter number;
    // instantitate a variable called stringNum and assign number as a value
    // instantitate a variable called result with an initial value of 0
    // set a loop that iterates the length property of the stringNum many times
        // on each iteration add the returned value of calling Number method of the window object passing in stringNum at i'th index
    // return result

function addDigits(number) {
    const stringNum = String(number);
    let result = 0;
    for (let i = 0; i < stringNum.length; i++) {
        result += Number(stringNum[i]);
    }
    return result;
}

console.log(addDigits(6714283));