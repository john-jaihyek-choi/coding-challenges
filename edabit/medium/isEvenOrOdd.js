// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// pseudocode
// declare a function 'isEvenOrOdd' and give a parameter number;
// set a conditional statement checking if number mod 2 is 0
// if 0, return the string 'even'
// otherwise, return the string 'odd'

function isEvenOrOdd(number) {
    if(number % 2 === 0) return 'even'
    return 'odd';
}