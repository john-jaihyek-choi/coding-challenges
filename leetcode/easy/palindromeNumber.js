// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Pseudocode:
// declare a function called isPalindrome with a single parameter x
    // instantiate a variable called resultArr with an initial value of an empty array
    // instantiate another variable called initialArr and assign it an returned value of calling split method on returned value of String method of the window object passed in parameter x as an argument
    // set a loop that iterates initialArr's length many times
        // on each iteration, push the value at current index on initialArr to resultArr;
    // set a condition to check if returned value of calling join method on resultArr is equal to value of parameter x
    // if true, return true;
    // otherwise, return false;

    var isPalindrome = function(x) {
        const resultArr = []
        const initialArr = String(x).split('');
        for(let i = initialArr.length - 1; i >= 0; i--) {
            resultArr.push(initialArr[i]);
        }
        if(resultArr.join('') == x) return true;
        return false;
    };