// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// pseudocode
// declare a function sevenBoom and give a single parameter, array;
// create a loop that iterates through the parameter array
// set a conditional statement checking if the current iteration of the array is equal to the number 7
// if true, return 'Boom!'
// if false, return 'there is no 7 in the array'

function sevenBoom(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 7) return 'Boom!'
        if(array[i] >= 10) {
            const number = array[i].toString();
            for(let j = 0; j < number.length; j++) {
                if(Number(number[j]) === 7) return 'Boom!';
            }
        }
        // for (let j = 0; j < array[i].toString().length; j++) {
        //     if(array[i])
        // }
    }
    return 'there is no 7 in the array'
}