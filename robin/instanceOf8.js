// Here is one of the questions brought to our attention from an engineer who had an interview at Google.
// "I would like you to write a function to check how many times the number 8 appears from 1 to 10,000. Instead of counting how many numbers contain the number 8, you need to count all instances that "8" appears.
// In case you may ask the question to me, I'd like to mention first that, for instance, 1882 should be counted as 2, 8880 as 3)."

// Brainstorm:
// Bruteforce (O(n^2) time complexity):
// Instead of counting the numbers that contain 8, I need to count the number of instances of 8 in all numbers from 1 - 10,000;
// First will need to loop from 1 to 10,000
// Then will need to loop through each index of the number to check if the number contains 8
// return the count

// Pseudocode:
// declare a function called findInstances with no parameter;
// instantiate a variable called count with an initial value of 0
// set a loop that iterates 10,000 times starting from the value 1;
    // within each iteration, set another loop that iterates the length property of returned value from calling the String method of the window object passing in i as an argument
        // set a condition to check if j'th index of current iteration is softly equal to 8;
            // if true, increment count;
// after the loop has finished, return the count variable;

function findInstances(range) {
    let count = 0;
    for(let i = 1; i <= range; i++) {
        const digit = String(i)
        for(let j = 0; j < digit.length; j++) {
            if(digit[j] == 8) {
                count++;
            }
        }
    }
    return count;
}

