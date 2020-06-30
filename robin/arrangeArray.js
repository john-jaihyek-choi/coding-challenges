// Robin team recently interviewed a former software engineer at Amazon and was able to get some of the actual interview questions asked in the last 5 years.
// You are given an array of [j1, j2, j3, j4, j5, jn …, k1, k2, k3, k4, k5, kn], how would you arrange the given array to [j1, k1, j2, k2, …]?

// Questions:
    // Will there only be 2 variety of alphabet only? (ex. j and k, a and b)
    // Will the character only be a single digit? (ex. what if we receive ab1, ab2, ... cd1, cd2, ...)
    // will there be equal amount of n for both characters?
    
// Brainstorm:
// assuming:
    // there will be n numbers for all alphabets
    // there can be multiple characters
// array needs to be in order of numbers first, then the alphabet (ex. [j1,k1,j2,k2,j3,j4,j5,...])
// Naive guess:
    // loop through the initial array once to store alphabetical value to the hashTable and start with 1 value then increment the number as looping through;
    // 


const arr = ["j1", "j2", "j3", "j4", "j5", "k1", "k2", "k3", "k4", "k5"];

function arrangeArray(arr) {
    const hashTable = {};

    for (let i = 0; i < arr.length; i++) {
    const char = arr[i].replace(/[^\D]/, "");
    if (!hashTable[char]) {
        hashTable[char] = 1;
    } else {
        hashTable[char]++;
    }
    }

    const tempArr = [];
    for (char in hashTable) {
    tempArr.push(char);
    console.log(char);
    }

    const resultArr = [];
    for (let i = 1; i <= hashTable[tempArr[0]]; i++) {
    // 5 times
    for (let j = 0; j < tempArr.length; j++) {
        // 2 times
        resultArr.push(tempArr[j] + i);
    }
    }
    return resultArr;
}