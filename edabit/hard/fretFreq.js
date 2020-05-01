// Create a function that takes a number of a guitar string and the number of the fret and returns the corresponding frequency of the note.
// The formula to calculate the frequency is: String Frequency * 2^(fret/12).

// For this challenge, we use "Standard Tuning".
// So, one fret = a semitone = a half step. From D to D♯ for instance.

// Pseudocode:
// declare a function called fretFreq with 2 parameters, stringNumbers and fretNumber;
// instantiate a variable named stringFrequencies and assign an array with the following values: 329.63, 246.94, 196, 146.83, 110, 82.41;
// instantiate a variable named stringFrenquency and assign a value of stringNumbers'th index minus 1 of the stringFrequences array;
// and do the following mathematic expression:
// stringFrequency multiplied by 2 to the fretNumber divided by 12 th power;
// and assign the returned value to noteFrequency;
// then return the value of note Frequency;

function fretFreq(stringNumbers, fretNumber) {
    const stringFrequencies = [329.63, 246.94, 196, 146.83, 110, 82.41];
    const stringFrenquency = stringFrequencies[stringNumbers - 1];

    const noteFrequency = stringFrenquency * Math.pow(2, fretNumber/12);
    return noteFrequency.toFixed(2);
}