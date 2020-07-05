// Thanos believes that in order to balance the program, half of the elements in the list should be randomly deleted.Write an Infinity Gauntlet program that randomly deletes and returns half of the elements in the input list when Thanos bounces a finger (when running the program).(Since it is randomly deleted, the output value must be different every time even if the input value is the same)

// Brainstorm:
    // create a random number generator that gets random index of the array
    // Getting the random index and pushing to the new array would be a quicker and easier path

// Pseudocode:
// Declare a function called removeHalf with a single parameter, array
    // instantitate a new variable called resultArr with an initial value of array parameter;
    // set a loop that iterates the half as many of array's length property many times;
        // instantiate a variable called randomIndex and assign it the returned value of calling floor method of the Math object, passing in the following arugment;
            // returned value of callign the random method of the Math object multiplied by the length property of the resultArr object plus 1;
        // call the splice method of the resultArr object passing in randomIndex minus 1 as the first arugment and value 1 as a second argument;
    // return the resultArr;


function removeHalf(array) {
    const resultArr = array;

    for(let i = 0; i <= Math.ceil((array.length / 2)) + 1; i++) {
        const randomIndex = Math.floor(Math.random() * resultArr.length + 1)
        resultArr.splice(randomIndex-1, 1); // O(n^2);
    }

        return resultArr;
}

console.log(removeHalf([2, 3, 1, 6, 5, 7, 8]));