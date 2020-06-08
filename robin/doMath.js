// You're at an in-person interview for a software engineering role that you applied to last week. The interview starts off as expected, until the hiring manager asks you this: "If I give you any two numbers and ask you to add them together, subtract one from the other, multiply them, or divide one from the other, could you do it?" You pause at first, because you aren't a math genius. But then you realize something - this is a technical interview! You could just write a function that receives two numbers, an operator ( +, -, x, or / ) and returns the correct answer. Right? Let's ace this interview! Don't forget, dividing by 0 is an illegal operation, so make sure to return a message when that case appears.

// Pseudocode:
// declare a function caleld doMath with 3 parameters, num1, num2, and operator
    // set a base condition to check if calling Number method on num1 and num2 returns a falsy value (checking to see if NaN);
    // if true, return a message to the user;
    // set a switch statement checking for operator;
        // if operator is 'x', 'X', or '*';
            // return product of num1 and num2;
        // if operator is '/';
            // set a condition to check if num2 is 0;
                // if true, return a message that to the user;
            // return quotient of num1 and num2;
        // if operator is '+';
            // return sum of num1 and num2;
        // if operator is '-';
            // return difference of num1 and num2;
        // otherwise
            // return a message to the user;

function doMath(num1, num2, operator) {
    if (!Number(num1) || !Number(num2))
        return (message = "Invalid number. Please input a valid number");

    switch (operator) {
        case "*":
        case "x":
        case "X":
        return num1 * num2;
        case "+":
        return num1 + num2;
        case "-":
        return num1 - num2;
        case "/":
        if (num2 == 0) return (message = "Illegal operation");
        return num1 / num2;
        default:
        return (message =
            "Invalid operator. Please input proper mathmatical operator");
    }
}