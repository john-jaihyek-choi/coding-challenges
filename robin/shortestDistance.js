// Write a function that, when given a list of integers, prints the pair of numbers with the shortest number of steps in between. In this case, you can assume that the array of points is already sorted. For example, if S = {1, 3, 4, 8, 13, 17, 20} is given, the result will be (3, 4).

// Brainstorm:
// Naive Solution:
    // keep distance arrays in an object
    // loop through the array once
    // within the iteration loop through start i + 1 until the length of the array
    // check the difference in steps between the two number and assign it into a object

// Pseudocode:
    // declare a function called shortestDistance with a single parameter, arr
        // instantiate a variable called hashTable with an empty object as an initial value;
        // set a loop that iterates arr's length many times
            // set another loop that iterates arr's length many times starting from i + 1 index;
                // instantiate a variable called diff and assign the returned value of arr at j'th index minus arr at i'th index;
                // instantiate a variable called pair and assign the returned value of calling Array constructor passing arr at i'th index as first argument and arr at j'th index as the second argument;
                // set condition to check if hasTable at diff index is valid 
                    // if true, call a push method of the hashTable at diff index, passing pair as an argument
                    // otherwise, call a Array constructor passing in pair object as arugment and assigning its returned value as the a property name with the value of diff in hashTable;
        // return 0th index of the returned value of calling values method of the Object method, passing in hashTable as an argument;
        

function shortestDistance (arr) {
    const hashTable = {};
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            const diff = arr[j] - arr[i];
            const pair = new Array(arr[i], arr[j]);
            if(hashTable[diff]) {
                hashTable[diff].push(pair)
            } else {
                hashTable[diff] = new Array(pair);
            }
        }
    }

    return Object.values(hashTable)[0];
}

console.log(shortestDistance([1, 3, 4, 5, 6, 7, 13, 19, 20]))