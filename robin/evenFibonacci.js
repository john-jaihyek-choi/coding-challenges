// Each term in the Fibonacci sequence is the sum of the two preceding terms. If you start with 1 and 2, this sequence is:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// What is the total number of all even numbers in the Fibonacci sequence that are less than 4,000,000?

// Pseudocode:
// declare a function called countEvenFibonacci with a single parameter, range
    // instantiate a variable called curr with an initial value of 1;
    // instantiate a variable called count with an initial value of 0;
    // set a loop that iterates while i is less than range parameter
        // set a condiiton to check if i modulo 2 is equal to 0 
            // if true, increment count
        // set curr equal to sum of itself and i;
        // set a condition to check if curr modulo 2 is equal to 0;
            // if true, increment count
    // return count;

function countEvenFibonacci (range) {
    let curr = 1;
    let count = 0;
    
    for(let i = 1; i <= range; i += curr) {
      if(i % 2 === 0) count++;
      curr += i;
      if(curr % 2 === 0) count++;
    }
    
    return count
}

countEvenFibonacci(4000000)