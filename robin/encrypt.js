// Write a function that takes a string and returns a coded version of the string. Your function should replace all 'a's with '4's, 'e's with '3's, 'i's with '1's, 'o's with '0's, and 's's with '5's.

// Pseudocode:
// instantiate a variable called code with an object containing key value pairs
// declare a function called encrypt with a single parameter, string;
    // instantiate a variable called encrypetedCode with an initial value of empty string;
    // set a loop that iterates length of the string object many times;
        // set a condition to check if code at i'th index of the string object property is equal truthy
            // if true, concatenate encryptedCode with its own value and code object at string at i'th index property;
            // otherwise, concatenate encrytedCode with its own value and string at i'th index;

const code = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5",
};

function encrypt(string) {
    let encryptedCode = "";

    for (let i = 0; i < string.length; i++) {
        if (code[string[i]]) {
        encryptedCode += code[string[i]];
        } else {
        encryptedCode += string[i];
        }
    }

    return encryptedCode;
}

console.log(encrypt("this is a test string"));