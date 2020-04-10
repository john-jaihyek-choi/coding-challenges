// Write a function to check if an array contains a particular number.

// pseudocode
// declare a function and give 2 parameters, array and number;
// inside a function, loop through the array parameter
// inside a loop, set a conditional statement which checks if the value of number parameter is equal to the current iteration of an array parameter;
// if equals, return true;
// otherwise, return false;

function check(array, number) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === number) return true;
    }
    return false;
}