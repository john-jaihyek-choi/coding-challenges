// Create a function to concatenate two integer arrays.

// pseudocode
// declare a function concat with 2 parameters, array1 and array2
// create a loop that loops through array2
// inside a loop, push every iteration value of the array2 to array1
// return the array1

function concat(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
    return array1;
}

// is it better to create a variable and push it to the new one?