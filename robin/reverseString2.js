// Today's problem is short and to the point: Write a function that takes a string and returns the string in reversed order.

// entire setence reversed
function reverseSentence(string) {
    let reversedString = '';
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}


// words in setence reversed
function reverseWordOrder (string) {
    const stringArr = string.split(' ');
    const reversedString = [];

    for(let i = stringArr.length - 1; i >= 0; i--) {
        reversedString.push(stringArr[i]);
    }

    return reversedString.join(' ');
}

// letters of each words reversed
function reverseWordStrings (string) {
    let reversedSentence = '';

    const newString = reverseWordOrder(string);

    for(let i = newString.length - 1; i >= 0; i--) {
        reversedSentence += newString[i];
    }

    return reversedSentence;
}

console.log('1', reverseSentence('string is reversed'));
console.log('2', reverseWordOrder('string is reversed'))
console.log('3', reverseWordStrings('string is reversed'))