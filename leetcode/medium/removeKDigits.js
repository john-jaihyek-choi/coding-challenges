// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Pseudocode:
// selfnote

var removeKdigits = function(num, k) {
    let numArr = num.split('');
    let prevValue = 0;
    let counter = k;
    let stack = []

    if(k == num.length) return '0';
    if(num.split('').sort() === numArr) {
        for(let i = 0; i < k; i++) {
            stack.pop();
            counter--;
        }
    }

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
        if(num.length - k == 1 && num[num.length - 1] == 0) {
            stack.shift();
        } else {
            stack.pop();
        }
    }
    if(String(Number(stack.join(''))) === 'Infinity') {
        return String(stack.join(''))
    }
    return String(Number(stack.join('')));
}