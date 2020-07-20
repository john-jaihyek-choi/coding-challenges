// Write a program that decodes the received Morse Code (dot: .dash:-) in string format and outputs it in English sentences. It is separated by one space between letters and two spaces between words.
// Use the given interpreted morse cases as your diction and decode the following: ".... . ... .-.. . . .--. ... ...- . .-. -.-- .-.. .- - .".
// You should see: “He sleeps very late.”

// Brainstorm:
// split the intial string of morse code with double spaces
    // will get a word
// split again in each of the splitted code with single space
    // will get a letter of each words

// Pseudocode:
// declare a function called decodeMorse with a single paramter, code
// instantiate a variable called sentence and assign it a returned value of calling split method of the code object, passing double empty spaces as an argument
// instantiate a variable called result iwth an initial value of empty string;
// set a loop that iterates length of the sentence object many times
    // instantiate a variable called word and assign it a returned value of calling split method of the sentence object at i'th index, passing in empty space as an arugment;
    // set an inner loop that iterates length of the word object many times
        // set result variable equal to concatenated value of itself and morseCode at word object at j'th index;
// set result variable equal to concatenated value of itself and an empty space;


// assuming that the function will utilize the standard morsecode dic:
const morseCode = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "-.-.--": "!",
    "-....-": "-",
    "-..-.": "/",
    ".--.-.": "@",
    "-.--.": "(",
    "-.--.-": ")",
    " ": " ",
    "---...": ":",
    ".----.": "'",
  };
  
  function decodeMorse(code) {
    const sentence = code.split("  ");
    let result = "";
  
    for (let i = 0; i < sentence.length; i++) {
      const word = sentence[i].split(" ");
      for (let j = 0; j < word.length; j++) {
        result += morseCode[word[j]];
      }
      result += " ";
    }
  
    return result;
  }
  
  console.log(
    decodeMorse(".... .  ... .-.. . . .--. ...  ...- . .-. -.--  .-.. .- - .")
  );
  