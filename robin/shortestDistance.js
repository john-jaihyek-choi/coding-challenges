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
                // instantiate a variable called diff and assign the following value:
                    // j'th index of the arr object minus the i'th index of the arr object's property of the hashTable object
                    // and set its value to an empty array;
                // push an array consisting i'th index of the arr as the 0th index and j'th index of the arr as the 1st index;
        // return 0th index of the returned value of calling values method of the Object method, passing in hashTable as an argument;
        

function shortestDistance (arr) {
    const hashTable = {};
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            const diff = hashTable[arr[j] - arr[i]] = [];
            diff.push([arr[i], arr[j]]);
        }
    }

    return Object.values(hashTable)[0];
}

console.log(shortestDistance([1, 3, 4, 8, 13, 17, 20]))