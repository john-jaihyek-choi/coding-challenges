// Short and sweet: Create a function that finds the index of a given item in an array.
// example: findMyIndex([1, 2, 3], 3) ➞ 2

function findIndex(array, item) {
    for(let i = 0; array.length; i++) {
        if(array[i] === item) return i;
    }
    return 'No Item Found'
}

console.log(findIndex([1, 2, 3], 3))