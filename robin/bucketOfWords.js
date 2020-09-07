// Its raining...words? We need to collect words into our buckets! Let's try to write a function that splits a sentence into buckets of words. Each bucket can have a provided number of characters or less (spaces count as one character). If the whole sentence is unable to fit inside buckets, then we have to return an empty array :( Here is an example:
// Ex) collectWords("the mouse can creep", 10)
// ➞ ["the mouse", "can creep", ]

function collectWords(string, stringLength) {
    let completedWord = ''
    let tempWord = ''
    const resultArr = [];

    for(let i = 0; i < string.length; i++) {
        tempWord += string[i];

        if(string[i] == " " || i == string.length - 1) {
            completedWord += tempWord;
            tempWord = '';
        }

        if(((i + 1) % stringLength == 0) || i == string.length - 1) {
            if(completedWord.length <= stringLength && completedWord) {
                resultArr.push(completedWord.trim())
                completedWord = '';
            } else {
                return [];
            }
        }
    }

    return resultArr;
}

console.log(collectWords("the mouse can creep", 5))