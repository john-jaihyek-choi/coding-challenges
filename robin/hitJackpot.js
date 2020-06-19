// Due to the fact that everywhere - including your favorite casino - is closed during the COVID pandemic, you decide to do some online gambling. Lucky for you, there is a major flaw in their system, and you can easily hit the jackpot - you just need to write a function to do so. This function should take in an array (each array element represents a slot item) and return true if all of the elements are the same. For example isJackpot(["@", "@", "@", "@"] will return true. If you want to win the jackpot, you just need to call the function with matching elements. Get ready, because Virtual Vegas Part 2 won't be as easy ;)

// Note:
    // Array will have elements representing slot item
        // ex) ['a','a', 'b']
    // if they all elements are equal, return true;

// Pseudocode:
// declare a function called hitJackpot with a single parameter array;
    // instantiate a variable called slot with an initial value of 0'th index of array object
    // set a loop that iterates array's length many times
        // within each iteration, set a condition to check if slot is NOT equal to i'th index of the array object;
            // if true, return false
    // if nothing returns, return true;

function hitJackpot(array) {
    const slot = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] !== slot) return false;
    }
    return true;
}

console.log(hitJackpot(["@", "@", "@", "@"]))