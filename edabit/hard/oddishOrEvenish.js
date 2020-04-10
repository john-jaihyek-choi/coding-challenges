// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// pseudocode
// declare a function oddishOrEvenish with a single parameter, number
// convert the data type of parameter number to a string
// iterate through the string and on each iteration, add the previous value
// assign the returned value to a const variable result
// set a conditional statement checking if the value of result mod 2 is equal to 0
// if equals to 0, return evenish
// otherwise return oddish

function oddishOrEvenish (number) {
    let result = 0;
    for (let i = 0; i < number.toString().length; i++) {
        result = result + Number(number.toString()[i]);
    }
    if(result % 2 === 0) return 'Evenish';
    return 'Oddish';
}