// Create a function that takes a number step (which equals HALF the width of a square) and returns the amount of empty squares. The image shows the squares with step 1, 2 and 3. The return value is the number of cells not on a diagonal, which is 0 for the first square, 8 for the second, and 24 for the third.

// Pseudocode
// Formula:
// (2n)^2 - a + 4n;
    // a = accumulator;
    // n = nth sequence;

// declare a function called emptySq with a single parameter, sequence;
// create a loop to iterate through the nth many times of the sequence parameter;


function emptySq(sequence) {
    let accumulator = 0;
    for(let i = 0; i < Number(sequence); i++) {
        accumulator += Math.pow(2*sequence, 2) - (accumulator + 4*sequence);
    }
    return accumulator;
}