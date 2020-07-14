// You've been practicing for an upcoming poker tournament. In terms of how to play the game, you're all set. But don't you want to impress everyone with some fancy deck shuffling? You can practice by creating a function that shuffles an array of items. The values can be whatever you would like - feel free to replicate an entire card deck if you wish!

// Brainstorm
// Use Fisher Yates
// In order to shuffle an array:
    // get random index of an existing array
    // make sure that there are no repeating index

// Pseudocode:
// Declare a function called shuffle with a single parameter, array
    // instantiate a variable called newArr and assign it a value of array;
    // set a loop that iterates the length of the array many times starting from the length property of the newArr minus 1;
        // within loop,
        // instantitate a variable called ranNum with a returned value of calling the floor method of the Math object passing in the returned value of calling random method of the Math object multiplied by i as an argument;
        // instantiate a variable called temp with an inital value of i'th index of the newArr object;
        // set i'th index of the newArr object equal to the ranNum'th index of the newArr object;
        // set ranNum'th of the newArr object equal to temp;
    // return the newArr;

function shuffle(array) {
    const newArr = array;
    for(let i = newArr.length - 1; i >= 0; i--) {
        const ranNum = Math.floor(Math.random() * i)
        let temp = newArr[i];
        newArr[i] = newArr[ranNum];
        newArr[ranNum] = temp;
    }
    return newArr;
}

shuffle([1,2,3,4,5,6,7]);
