// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Pseudocode:
// declare a function called adjacentElementsProduct with a single parameter inputArray
    // instantiate a variable called highest with no value;
    // set a loop that iterates length of the inputArray many times
        // instantiate a variable called prev with a value at i-1 index of inputArray
        // instantiate a variable called product with a value at i index of the inputArray times prev
        // set a condition to check if highest is invalid
            // if true, set highest equal to product
            // else if, check another condition to check if highest is less than product
                // set highest equal to product
    // return highest;

function adjacentElementsProduct(inputArray) {
    let highest;
    for(let i = 1; i < inputArray.length; i++) {
        const prev = inputArray[i - 1];
        const product = inputArray[i] * prev;
        
        if(!highest) highest = product;
        else if(highest < product) highest = product;
    }
    
    return highest;
}