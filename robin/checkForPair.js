// While doing laundry, you notice that your socks are all mixed up and you can't tell if you have all matching pairs or not. Write a function that returns the number of sock pairs you find in the pile. Two instances of the same letter, in our case, will represent a sock pair. For example, "ss".

// Brainstorm:
// using hashtable to keep total counts of each socks

// Pseudocode:
// declare a function called checkForPair with a single parameter, laundry;
    // instantiate a variable called socks with an initial vlaue of an empty object;
    // instantiate a variable called count with an initial value of 0;
    // set a loop that iterates the length of the laundry many times;
        // set a condition to check if socks at i'th index of the laundry is falsy
            // if true, set socks at i'th index of the laundry equal to 1
            // otherwise, increment socks at i'th index of the laundry;
    // set a loop that iterates through the object socks, each iteration being 'sock';
        // set a condition to check if socks at 'sock'th index is greater than or equal to 2
            // if true, set count equal to the sum of itself and the returned value of calling the floor method of the Math object passing in the following expression as an arugment:
                // socks at 'sock'th index divided by 2;
    // return count;

function checkForPair(laundry) {
    const socks = {};
    let count = 0;

    for (let i = 0; i < laundry.length; i++) {
        if (!socks[laundry[i]]) {
        socks[laundry[i]] = 1;
        } else {
        socks[laundry[i]]++;
        }
    }

    for (sock in socks) {
        if (socks[sock] >= 2) {
        count += Math.floor(socks[sock] / 2);
        }
    }

    return count;
}

console.log(checkForPair("aabbbbcccceef"));