// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

function arrayOfMultiples(number, length) {
    const arr = []
    let prevNum = 0;
    for(let i = 0; i < length; i++) {
        prevNum += number
        arr.push(prevNum)
    }
    return arr
}