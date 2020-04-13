// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(array, number) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === number) return i
    }
    return -1
}