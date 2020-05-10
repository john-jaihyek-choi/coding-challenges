// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// selfnotes:
// cannot use sqrt function
// basic square root rules:
    // root of odd number is always an odd number
    // root of positive number is always a positive number
// using the above rules, I can set two conditions that runs on even and odd numbers

// Pseudocode
// declare a function called isPerfectSquare with a single parameter num;
// instantiate a variable called ans and give it an inital value of null;
// set a condition checking if a num is an odd number
// if odd, iterate as many as num divided by 2 many times and increment starting at 1 incrementing by 2;
// within the loop, set a condition to check if num === i * i;
// if true, assign boolean true value to ans and return

// if the num is not an odd, iterate as many as num divided by 2 many times and increment starting at 1 incrementing by 2;
// within the loop, set a condition to check if num === i * i;
// if true, assign boolean true value to ans and return


var isPerfectSquare = function(num) {
    let ans = false;
    
    if(num % 2 !== 0) {
        for(let i = 1; i <= Math.ceil(num/4); i+=2) {
            if( i*i === num ) return ans = true;
        }
    } else {
        for(let i = 0; i <= Math.ceil(num/4); i+=2) {
            if( i*i === num ) return ans = true;
        }
    }
};