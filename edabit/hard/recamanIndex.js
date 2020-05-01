// The Recamán Sequence is a numeric sequence that starts always with 0. The position of a positive integer in the sequence, or Recamán Index, can be established with the following algorithm:
// For every number to find, two variables are considered: the value of the last element of the sequence (last element from now on), and the actual sequence length (length from now on).
// If the subtraction of the length from the last element returns a number greater than 0 and not already present in the sequence, it is added to the sequence.
// When the conditions of the above statement are not met, will be added always the sum of the last element plus the length (even if it is a number already present in the sequence).
// Repeat until the number of interest is found.

// Reccaman Sequence:
    // Reccaman sequence is a sequence that attempts to go back a number of counted spaces if the number they are landing on was never used
    // if the number it lands on have been used, it will move forward

// Pseudocode:
// declare a function called reccamanIndex with a single parameter, number
// instantiate a variable called counter and assign it an intial value of 0;
// instantiate a variable called sequence and assign an array with value 0 in the first index;
// instantiate a variable called currentNumber with an initial value of 0th index of the sequence array
// create a loop that iterates until the last index of a sequence array is equal to the number parameter;
// inside a loop, increment the variable counter by 1,
// set a condition checking if currentNumber minus counter is greater than 0, AND does NOT exist in the sequence array;
// if true, set currentNumber equal to the currentNumber minus counter
// and push the value of currentNumber to the sequence array;
// otherwise, set currentNumber equal to the currentnumber plus counter
// and push the value of currentNumber to the sequence array;
// finally, once the iteration is finished, return value of length of the sequence subtract by 1;

function recamanIndex(number) {
    let counter = 0;
    const sequence = [0];
    let currentNumber = sequence[0];

    while(sequence[sequence.length - 1] !== number) {
        counter++;
        if(currentNumber - counter >= 0 && !sequence.includes(currentNumber - counter)) {
            currentNumber = currentNumber - counter;
            sequence.push(currentNumber);
        } else{
            currentNumber = currentNumber + counter;
            sequence.push(currentNumber);
        }
    }
    return sequence.length - 1;
}
