// Stuck in quarantine...still...and all alone, you decide to play a game of Scrabble against YOURSELF - rather, against your shadow. That pesky shadow of yours is known to be quite the Scrabble ace. In order to make sure that you have the best chance at winning, you decide to create a function that receives an array of words. The function should score the words and return an array of the words (or word) with the highest score. Please use the table below for reference:

// POINTS
// A: 1
// B: 3
// C: 3
// D: 2
// E: 1
// F: 4
// G: 2
// H: 4
// I: 1
// J: 8
// K: 5
// L: 2
// M: 3
// N: 1
// O: 1
// P: 3
// Q: 10
// R: 1
// S: 1
// T: 1
// U: 1
// V: 4
// W: 4
// X: 8
// Y: 4
// Z: 10

// Brainstorm:
// function receives array of words
// return an array of word/s with highest score
// Things to store:
    // scoreObj
    // scoreArr
    // highestScore
    // wordArr
// Naive solution:
    // instantiate scoreObj with score
    // loop through the testArr
        // within it loop through each letter
        // look for each value at iteration from scoreObj and add the value
        // push the value to the scoreArr
    // loop through the scoreArr and find the highest score and store it to highestScore
    // loop through the scoreArr and search for highestScore and once found, get its value at its index at the testArr and push the value to wordArr
    // return the word arr;

// Pseudocode:
// declare a function called lonelyScrabble with a single parameter, words
    // set a condition for input check
        // if true, return a message
    // instantiate variable called scoreObj consisted of properties with value which indicates the scores for each alphabet;
    // instantiate a variable called scoreBoard with an empty object;
    // instantiate a variable called highestScore with initial value of 0;
    // set a loop that iterates length of words many times
        // instantiate a variable called score on each iteration with a value of 0;
        // set a inner loop that iterates length of words at i'th index's length property many times;
            // within the inner iteration, set score equal to sum of itself and value of calling toLowerCase method of the scoreObj's property of words at i'th of j'th index;
        // on outer iteration, set highestScore equal to the returned value of calling max method of the Math object passing highestScore and score as arguments
        // assign returned value of calling toLowerCase method of the words object at i'th index as a property of the scoreBoardObj and assign score as a value of that property;
    //set a loop that iterates the scoreBoard object
        // index at each iteration being word (property), set a condition to check if scoreBoard at word property is strictly equal to highestScore;
            // if true, call a push method of the resultArr object passing word as an argument;
    // finally, return resultArr;

const testArr = ['BURGER', 'CHEESE', 'lettuce', 'fries', 'cheese'];

function lonelyScrabble(words) {
    if(!words || words.length < 1) return console.log('Please input a valid argument');
    const scoreObj = {
        a: 1,
        b: 3,
        c: 3,
        d: 2,
        e: 1,
        f: 4,
        g: 2,
        h: 4,
        i: 1,
        j: 8,
        k: 5,
        l: 2,
        m: 3,
        n: 1,
        o: 1,
        p: 3,
        q: 10,
        r: 1,
        s: 1,
        t: 1,
        u: 1,
        v: 4,
        w: 4,
        x: 8,
        y: 4,
        z: 10
    }

    const temp = {

    }

    const scoreBoard = {};
    let highestScore = 0;

    for(let i = 0; i < words.length; i++) {
        let score = 0; // O(n) / O(1)
        for(let j = 0; j < words[i].length; j++) {
            score += scoreObj[words[i][j].toLowerCase()]; // O(n^2) / O(1)
        }
        highestScore = Math.max(highestScore, score); // O(n) / O(1)
        scoreBoard[words[i].toLowerCase()] = score; // O(n) / O(n);
    }

    const resultArr = [];

    for(word in scoreBoard) {
        if(scoreBoard[word] === highestScore) {
            resultArr.push(word); // O(n) / O(n)
        }
    }

    return (resultArr);
}

lonelyScrabble(testArr);