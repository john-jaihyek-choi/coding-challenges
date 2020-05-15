// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Pseudocode:
// selfnote

var removeKdigits = function(num, k) {
    let numArr = num.split('').sort();
    let prevValue = 0;
    let counter = k;
    let stack = []

    if(k == num.length) return '0';
    // if(num.split('').sort() === numArr) {
    //     for(let i = 0; i < k; i++) {
    //         stack.pop();
    //     }
    //     return stack;
    // }

    for(let i = 0; i < num.length; i++) {
        if (counter == 0) {
            stack.push(numArr[i]);
        } else {
            if(numArr[i] - prevValue >= 0) {
                stack.push(numArr[i]);
            } else if (numArr[i] - prevValue < 0 && counter--) {
                stack.pop();
                stack.push(numArr[i]);
            }
            prevValue = numArr[i];
        }
    }
    
    while(stack.length > num.length - k) {
        stack.pop();
    }
    return String(Number(stack.join('')));
}