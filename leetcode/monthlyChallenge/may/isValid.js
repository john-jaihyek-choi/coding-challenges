// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Selfnote:
// in order for me to check if the strings are a balanced paranthesis
    // 1. need to keep track of open paranthesis
        // iteration will continue if the value on each iteration is an opening
        // to implement this with stack,
            // value at each iteration will be pushed to stack while value on each iteration is the opening paranthesis
    // 2. need to check for closing paranthesis
        // if a value is a closing paranthesis for the value on the peek of the stack,
            // to set value i can pop the peek value of the stack
            // ** this will remove opening paranthesis for the value on the correct closing paranthesis
    // 3. if on check, the first value of closing paranthesis that follows opening parenthesis on the peek is not the matching closing parenthesis, 
        // return false because it wont be balanced string;

// Pseudocode:
// declare a function called isValid with a single parameter s
// set a loop that iterates length of s many times
    // on each iteration,

var isValid = function(s) {
    if(s.length == 0) return true;
    if(s.length < 2) return false;
    const check = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if (s[i] == ')' || s[i] == '}' || s[i] == ']') {
            if(s[i] != check[stack[stack.length - 1]]) return false;
            stack.pop();
        } else if(s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        }
    }
    return true;
};