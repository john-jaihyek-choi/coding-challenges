// Coding is just like playing an instrument. If you want to get better, you need to have a solid concept of even the most basic things! Robin wants to challenge you to go back to the basics and write a function that determines if a given string is a palindrome or not. In case you need a refresher on palindromes: a palindrome is a string that is read the same front to back and back to front. For example, words like Mom, Kayak, and noon are palindromes. Palindromes can also be longer strings made up of multiple words, such as: "Was it a cat I saw"

// Brainstorm:
// Things to keep in mind based on the info provided:
    // spaces are not counted, therefore need to exclude spaces in the beginning
        // str.replace(/\s/g, "")
// How to check for palindrome:
    // naive idea: need to start from left and right at the same time and start counting inwards
        // variables to be mutated:
            // left
                // start from 0 and count up each iteration
            // right
                // start from the length - 1 of the string and start counting down

// Pseudocode:
// Naive Solution:
    // declare a function called isPalindrome with a single parameter string;
        // instantiate a variable called newString and assign it a returned value of calling replace method of the string object (parameter), passing regex condition and an empty space as an arguments;
        // and call a toLowerCase method of the window and pass the above value as an argument;
    // instantiate a variable called left and right
        // assign left an initial value of 0;
        // assin right an initial value of length property fo the newString minus 1;
    // set a loop that iterates while left is greater than or equal to right;
        // within each iteration,
            // set a condition to check if value at left index of the newString is equal to the right index of the newString;
                // if true,
                    // increment left by one
                    // decrement right by one
                // otherwise, return false
    // if nothing is returned from the above functions, return true;
    