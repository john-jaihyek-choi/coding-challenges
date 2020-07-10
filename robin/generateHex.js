// It looks like you just became a freelancer and snagged your first client. Unfortunately, they came to you with NO design and NO idea on what colors they want to use. Why don't you come up with a function that returns a random hexadecimal color code so you don't have to think about it either.

// Note:
// Hex code format: #xxxxxx

// Pseudocode:
// declare a function called generateHex with no parameter
    // instantitate a variable called code with an initial value of "#"
    // set a loop that iterates 6 times
        // concatenate the following value to code
            // returned value of calling the floor method of the Math object passing in the returned value of random method of the Math object multiplied by 10 as an arugment
    // return code

function generateHex() {
    let code = "#";
    for (let i = 0; i < 6; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code;
}