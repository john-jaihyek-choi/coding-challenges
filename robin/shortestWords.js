// Today's challenge lets us give respect to short words - words that are often overlooked but are also often the most important glue in a sentence! Can you write a function that, provided a string as an argument, returns the shortest words in the string lowercase and in sorted in alphabetical order?

function shortestWords(string) {
    const words = {};
    let word = '';
    let shortestLength = string.length;
    const resultArr = [];

    for(let i = 0; i < string.length; i++) {
        if(string[i] === ' ') {
            if(shortestLength > word.length) shortestLength = word.length;
            words[word] = word.length;
            word = '';
        } else {
            word += string[i].toLowerCase();
        }
    }

    for(word in words) {
        if(words[word] === shortestLength) resultArr.push(word);
    }

    return resultArr.sort();
}

console.log(shortestWords('Here are some strings for testing'));