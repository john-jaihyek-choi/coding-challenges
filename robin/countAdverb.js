// An adverb is typically any word that ends in 'ly'. Can you write a function that counts the number of words that ends in 'ly'. For this problem, even if the word is an adjective, it's still okay to count it as true. However, you must not count the word if it starts or contains 'ly' - it MUST be at the end. Happy coding!

// Two possible inputs:
// array containing words at each index
// string that contains multiple words

// For this question, function will assuem that the input is provided in string

// Pseudocode:
// declare a function called countAdverb with a single parameter string
    // instantiate a variable called wordList with an inital value of the following:
        // returned value of calling the split method of the string object passing empty space as an argument;
    // instantiate a variable called count with an intial value of 0
    // set a loop that iterates the length property of the wordList object many times
        // set a condition to check if wordList at i'th index of the returned value of length property of the wordList at i'th index minus 1, is equal to 'y'
            // AND
        // if wordList at i'th index of the returned value of length property of the wordList at i'th index minus 2, is equal to 'l'
            // if true, increment count by one;
    // return count;

function countAdverb(string) {
    const wordList = string.split(" ");
    let count = 0;
    for (let i = 0; i < wordList.length; i++) {
      if (
        wordList[i][wordList[i].length - 1] === "y" &&
        wordList[i][wordList[i].length - 2] === "l"
      )
        count++;
    }
    return count;
  }
  
  const testString = "you are a lovely person johnvely";
  console.log(countAdverb(testString));