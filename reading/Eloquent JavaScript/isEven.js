// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

function isEven(n) {
    if(n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    return isEven(n-2);
}

console.log(isEven(10));