// Today's problem is short and to the point: Write a function that takes a string and returns the string in reversed order.

// entire string reversing
function reverseSentence(string) {
    let reversedString = '';
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}


// words reversed
function reverseWordOrder (string) {
    const stringArr = string.split(' ');
    const reversedString = [];

    for(let i = stringArr.length - 1; i >= 0; i--) {
        reversedString.push(stringArr[i]);
    }

    return reversedString.join(' ');
}

// words AND strings reversed
function reverseWordStrings (string) {
    const stringArr = string.split(' ');
    const reversedString = [];
    let reversedSentence = '';

    for(let i = string.length - 1; i >= 0; i--) {
        reversedString.push(stringArr[i]);
    }

    const newString = reversedString.join(' ');

    for(let i = newString.length - 1; i >= 0; i--) {
        reversedSentence += newString[i];
    }

    return reversedSentence;
}

console.log(reverseSentence('string is reversed'));
console.log(reverseWordOrder('string is reversed'))
console.log(reverseWordStrings('string is reversed'))