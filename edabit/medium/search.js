// Create a function that finds the index of a given item.

// pseudocode
// declare a function search with 2 parameters, array and number
// create a loop that loops through the given parameter 'array'
// if the current iteration of the array is equal to the value of second parameter number, return the index of current iteration
// otherwise, return -1

function search(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) return i
    }
    return -1;
}