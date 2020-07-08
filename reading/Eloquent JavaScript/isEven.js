// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

function isEven(number) {
    function check(num) {
        if(num % 2 === 0) {
            return true
        } else {
            return false
        }
    }

    return check(number);
}

console.log(isEven(10));