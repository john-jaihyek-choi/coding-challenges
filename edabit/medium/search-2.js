// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// pseudocode
// declare a function search with 2 parameters, array and number
// iterate through the parameter array 
// set a conditional checking if value of the current iteration of the array is equl to value of the parameter number
// if equals, return the current iteration index
// otherwise, return -1

function search(array, number) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === number) return i
    }
    return -1
}