// Create a function that accepts a number and returns a string variation of the word "Boom". The string should include n number of "o"s, unless n is less than 2. If that is the case, return "boom"). If n is evenly divisible by 2, add an exclamation point at the end of the string. If n is evenly divisible by 5, return the string in all CAPS. If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation point to the end of the string.

// Pseudocode:
// declare a function called boom with a single parameter, n
    // set a condition to check if n is less than 2
        // if true, return a string 'boom';
    // instantiate a variable called boom with an initial value of b
    // set a loop that iterates n many times
        // set boom equal to a concatenated value of itself and a string o
    // set boom equal to a concatenated value of itself and a string m;
    // set a condition to check if n modulo 2 is equal to 0
        // if true, set boom equal to concatenated value of itself and !
    // set a condition to check if n modulo 5 is equal to 0
        // if true, return the value of calling toUpperCase method of the boom method;
    // return boom;

function boom(n) {
    if(n < 2) return 'boom';

    let boom = 'b'
    
    for(let i = 0; i < n; i++) {
        boom += 'o';
    }

    boom += 'm';

    if(n % 2 === 0) boom += '!';
    if (n % 5 === 0) return boom.toUpperCase();

    return boom;
}

console.log(boom(100));