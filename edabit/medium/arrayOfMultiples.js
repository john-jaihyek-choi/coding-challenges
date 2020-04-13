// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.


// pseudocode
// declare a function arrayOfMultiples with 2 parameters, number and length
// assign a const variable arr with an empty array
// assign a let variable prevNum with an intial value of 0;
// loop through as many as length times and add prevNum to parameter number
// push the new added value of prevNum to arr array
// return the result

function arrayOfMultiples(number, length) {
    const arr = []
    let prevNum = 0;
    for(let i = 0; i < length; i++) {
        prevNum += number
        arr.push(prevNum)
    }
    return arr
}