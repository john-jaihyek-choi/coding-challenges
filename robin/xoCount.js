// Write a function that receives a string and checks if that string has equal numbers of 'x's and 'o's. If it does, return true. Otherwise, return false. If there are no 'x's or 'o's, return true.

// Pseudocode:
// declare a function called countXO with a single parameter, string
    // instantiate a variable called xo with an intial value of properties x and o both with initial value of 0
    // set a loop that iterates length property of the string many times
    // set a condition to check if x property at xo object is equal to o property of the xo object;
        // if true, return true;
    // return false, otherwise.

function countXO(string) {
    const xo = {
        'x': 0,
        'o': 0
    };
    for(let i = 0; i < string.length; i++) {
        if(string[i] === 'x' || string[i] === 'o') xo[string[i]]++   
    }
    
    if(xo['x'] === xo['o']) return true;
    return false;
}

console.log(countXO('xoxo'))