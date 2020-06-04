// Do you know what a factorial of a number is? You can get the factorial of a number by multiplying all the numbers less than or equal to that number. As an example, 5! (5 factorial), is equal to 5 X 4 X 3 X 2 X 1 = 120. Would you please write a solution for Robin that returns the factorial of that number?

// Pseudocode:
// declare a function called factorial with a single parameter num
    // instantiate a variable called result with an initial value of 1
    // set a loop that iterates num many times 
        // set result equal to the product of result and i
    // return result;

function factorial(num) {
    let result = 1;
    for(let i = num; i > 0; i--) {
        result = result * i;
    }
    return result;
}