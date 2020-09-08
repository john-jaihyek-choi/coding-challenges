// When building web applications, it's often nice to format phone numbers that users input on their own so that the user only has to input numbers. Write a function that accepts ten numbers in an array and formats it like this: "(123) 456-7890

function phoneNumberFormatter(array) {
    const phoneNumber = array.join('').replace(/[^0-9]/,'');
    return `(${phoneNumber.substring(0,3)}) ${phoneNumber.substring(3,6)}-${phoneNumber.substring(6,10)}`
}

console.log(phoneNumberFormatter([1,2,3,4,5,6,7,8,9,0]))