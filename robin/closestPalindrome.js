// Sheltered at home, you are so bored out of your mind that you start thinking about palindromes. A palindrome, in our case, is a number that reads the same in reverse as it reads normally. Robin challenges you to write a function that returns the closest palindrome to any number of your choice. If your number is exactly in between two palindromes, return the smaller number. If the number you chose IS a palindrome, return itself. Have fun!

// Brainstorm:
// function will receive single parameter (number);
// will return closest palindrome from the number passed in
    // if right in between 2 palindromes, return the smaller number
    // if IS the palindrome, return itself;
// few conditions to keep in mind:
    // check if number input IS a palindrome;
    // check if number - left palindrome === right palindrome - number;
// Logic of how to know if a number is palindrome:
    // stringify a number parameter
    // use a two pointer to check:
        // keep left and right pointer
        // loop while left != right;
// How will I find the CLOSEST palindrome?:
    // naive guess:
        // check right side (increment by 1) value and check for palindrome
        // check left side (decrement by 1) value and check for palindrome
        // ** Something to keep in mind during checking
            // need to return palindrome after checking for BOTH left AND right value for palindrome
                // because if they are both palindrome, then I need to return the smallest value;
// Side note:
    // single digits are all palindromes
        // if number.length < 2, it IS a palindrome
// Plan of action:
    // Create a helper function called isPalindrome which returns boolean
    // use the helper function on each iteration while palindrome (either on the left or the right side of the number) is found;

// Pseudocode:
    // declare a helper function called isPalindrome with a single parameter value
        // instantiate a variable called left with initial value of 0
        // instantiate a variable called right with initial value of length propety of the value object minus 1
        // set a loop that iterates while left is less than or equal to right;
            // set a condition to check if value at left index is not equal to value at right index;
                // if true, return false
                // otherwise, set increment left by 1 and decrement right by 1;
        // if nothing is returned return true;

    // declare a function called isPalindrome with a single parameter, number
        // set a condition to check if...
        // returned value of calling isPalindrome function passing in the returned value of calling String method of the window object passing number as an argument;
            // AND
        // returned value of calling String method of the window object passing number as an arugment is less than 2
        // if true, return number;
        // instantiate a variable called leftCounter with initial value of 1;
        // instantiate a variable called rightCounter with initial value of 1;
        // instantiate a variable called left with initial value of number minus 1;
        // instantiate a variable called right with initial value of number plus 1;

        // set a loop that iterates while the returned value of calling isPalindrome function passing left is false;
            // on each iteration, decrement left by one and increment leftCounter by one;
        // set a loop that iterates while the returned value of calling isPalindrome function passing right is false AND rightCounter is less than or equal to leftCounter;
            // on each iteration, increment right by one and increment rightCounter by one;
        
        // set a condition to check if leftCounter is less than or equal to rightCounter
            // if true, return number minus leftCounter in number
        // otherwise, return number plus rightCounter in number;

function closestPalindrome (number) { 
    if(isPalindrome(String(number)) || String(number).length < 2) return number;

    let leftCounter = 1;
    let rightCounter = 1;
    let left = number-1;
    let right = number+1;

    while(!isPalindrome(String(left))) {
        left--;
        leftCounter++;
    }

    while(!isPalindrome(String(right)) && rightCounter <= leftCounter) {
        right++;
        rightCounter++;
    }

    if(leftCounter <= rightCounter) return Number(number - leftCounter);
    return Number(number + rightCounter);
}


function isPalindrome(value) {// value must be passed in as a string;
    let left = 0;
    let right = value.length - 1;

    while(left <= right) {
        if(value[left] != value[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(closestPalindrome(100));