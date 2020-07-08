// For some odd reason, your computer science professor has become obsessed with parentheses - she probably spent too much time coding these days... In any case, she wants you to write a function that will turn each group of parentheses in a string into separate groups - these groups should be balanced.

// Question:
    // What should the function return when it receives an input where the string cannot be balanced?
        // function will assume that it will return a proper message to the user
    // Can we assume that function will only get parenthesis and not brackets or curly braces?
        // function will assume that all input will only be provided in parenthesis;

// Brainstorm:
// For me to balance the parenthesis:
    // need to keep track of total number of opening parenthesis up to certain index
    // need to keep track of total number of closed parenthesis up to certain index
    // if the above to match, return the substring from the last startIndex to the current index
    // if at the end of the loop, the number of open and closed parenthesis stored in the object is not equal, return a proper message.

// Pseudocode:
// declare a function called balancedParenthesis with a single parameter, string
    // instantiate a variable called parenthesis with an intial property of '(' and ')', both with a starting value of 0;
    // instantiate a variable called startIndex with an initial value of 0;
    // instantiate a variable called resultArr with an empty array;
    // set a loop that iterates the length property of the string many times
        // 

function balanceParenthesis(string) {
    const parenthesis = {
        '(': 0,
        ')': 0 
    }
    const resultArr = [];
    let startIndex = 0;

    for(let i = 0; i < string.length; i++) {
        parenthesis[string[i]]++; // O(n) / O(1);
        if(parenthesis[')'] === parenthesis['(']) {
            resultArr.push(string.substring(startIndex, i+1)); // O(n^2) / O(n)
            startIndex = i+1;
        }
    }

    if(parenthesis['('] !== parenthesis[')']) return message = 'the input is not balanced'

    return resultArr;
}