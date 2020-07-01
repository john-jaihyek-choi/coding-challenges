// You've been seeing strange series of flashing lights coming from a window in the house across your street. One night, it dawns on you - it's morse code! Quick - write a function that will decode the morse string and return the actual message.

// Question:
// what indicates the end of each letter?
    // for example:
        // ..- can both mean 'it' and 'u'
// Is it safe to assume that there will be spaces between each characters?
    // if above assumption is true, will actual 'space' be two empty spaces?
// // Will there be an uppercase?

// Brainstorm:
// Assuming that the morsecode will have empty space between codes that indicates each character AND actual spaces will have 2 spaces...
    // split the morseCode arr and loop through each one of them
        // look up the code at each iteration from the morseCode object;
            // check if the value of iteration is a valid property of the morseCode object;
                // if yes,
                    // push the value of the code to the resultArr
                // Otherwise,
                    // push an empty string to the resultArr
    // return the returned value of resultArr after calling the join method

// Pseudocode:
    // Declare a function called decodeMorse with a single parameter, codeString
        // Instantitate a variable called the code and assign the returned value of calling the split method of the codeString object
        // instantitate a variable called resultArr with an empty arr as its iniital value;
        // set a loop that iterates the length of the code object many times;
            // set a condition to check if MorseCode at the i'th index of the code object property is valid;
                // if true, push the value of the morseCode at i'th index of the code object property to the resultArr;
                // otherwise, push the empty string value to the resultArr;
        // once loop is done, return the value of calling join method of the resultArr object passing empty string as an argument;

const morseCode = {
    "-----" : "0",
    ".----" : "1",
    "..---" : "2",
    "...--" : "3",
    "....-" : "4",
    "....." : "5",
    "-...." : "6",
    "--..." : "7",
    "---.." : "8",
    "----." : "9",
    ".-" : "a",
    "-..." : "b",
    "-.-." : "c",
    "-.." : "d",
    "." : "e",
    "..-." : "f",
    "--." : "g",
    "...." : "h",
    ".." : "i",
    ".---" : "j",
    "-.-" : "k",
    ".-.." : "l",
    "--" : "m",
    "-." : "n",
    "---" : "o",
    ".--." : "p",
    "--.-" : "q",
    ".-." : "r",
    "..." : "s",
    "-" : "t",
    "..-" : "u",
    "...-" : "v",
    ".--" : "w",
    "-..-" : "x",
    "-.--" : "y",
    "--.." : "z",
    ".-.-.-" : ".",
    "--..--" : ",",
    "..--.." : "?",
    "-.-.--" : "!",
    "-....-" : "-",
    "-..-." : "/",
    ".--.-." : "@",
    "-.--." : "(",
    "-.--.-" : ")",
    " " : " ",
    "---..." : ":",
    ".----." : "'",
}

function decodeMorse(codeString) {
    const code = codeString.toLowerCase().split(' ');
    const resultArr = [];
    for(let i = 0; i < code.length; i++){
        if(morseCode[code[i]]) {
            resultArr.push(morseCode[code[i]]);
        } else {
            resultArr.push(' ');
        }
    } 
    return resultArr.join('');
}

const codeString = '.... ..  .-. --- -... .. -.'

console.log(decodeMorse(codeString));