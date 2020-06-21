// Being locked in during the pandemic, you have somehow managed to watch everything on Netflix, Hulu, and probably everything on Youtube as well. You decide to listen to your favorite radio station...wait...do you even HAVE a favorite radio station? Anyways...the radio host suddenly announces that every caller to dial in within the next ten minutes will win a prize! You have no idea what the prize is, so you decide to dial this number: "888-YOU-RANG ". Unfortunately, you don't remember which letters correspond to which numbers. Why don't you write a function that will take a phone number with letters and return it, formatted, with all numbers. It could look something like this:
// formatPhone("888-YOU-RANG") will return 888-968-7264

// Brainstorm:
// naive solution idea:
    // keep predefined hashtable to keep values that match each number;
    // loop through the parameter string and check each iteration if the letter is included in key of the hastable
    // if true add the value to the new string; 
// some possibilities:
    // no value can both be 0 & 1
        // some ways to solve this problem is by returning random number. (0 or 1)

// Pseudocode:
    // declare a function called formatPhoneNumber with a single parameter string
        // instantiate a variable called hashTable with properties and letter pair;
        // instantiate a variable called convertedNumber with an initial value of empty string;
        // set a loop that iterates the length of string many times
            // set a condition to check if hashTable at string at i'th index'th property is truthy;
                // if true, concatenate its value pair to the convertedNumber;
                // otherwise, concatenate the i'th index of string object to the convertedNumber;
    // return convertedNumber;

function formatPhoneNumber(string) {
    const hashTable = {
        a: 2,
        b: 2,
        c: 2,
        d: 3,
        e: 3,
        f: 3,
        g: 4,
        h: 4,
        i: 4,
        j: 5,
        k: 5,
        l: 5,
        m: 6,
        n: 6,
        o: 6,
        p: 7,
        q: 7,
        r: 7,
        s: 7,
        t: 8,
        u: 8,
        v: 8,
        w: 9,
        x: 9,
        y: 9,
        z: 9
    };
    let convertedNumber = '';

    for(let i = 0; i < string.length; i++) {
        if(hashTable[string[i].toLowerCase()]) {
            convertedNumber += hashTable[string[i]];
        } else {
            convertedNumber += string[i];
        }
    }
    return convertedNumber;
}
