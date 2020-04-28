// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// pseudocode
// declare a function isPlural with a single parameter, word;
// set a condition to check if word's last letter is strictly equal to s or S;
// if true, return true;
// if false, return false;

function isPlural(word) {
    if(word[word.length-1] === 's' || word[word.length-1] === 'S') return true;
    return false;
}