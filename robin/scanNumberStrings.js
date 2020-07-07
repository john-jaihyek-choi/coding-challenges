// How are our lovely number people doing today? We're going to have an exclusive numbers-only party next week. You can bring any type of friends that wear "String" clothes as long as they are real number. As we expect the infinite number of numbers to come to the party, we should rather build a scanner that will scan every guest and validate whether they are a real numbers. If any number brings a fake guest, it will be kicked out of our world! Can your team build a special function that will be used in the scanner? Please remember, all guests will be wearing string clothes.

// Note:
    // Number method converts entire string into number
    // parseInt method converts until first non-digit number and returns the number
    // parseFloat method converts the digits until the first non float and returns the float value

// Pseudocode:
// declare a function called partyScanner with a single parameter, number
    // set a condition to check if returned value of calling the parseFloat method passing in number as an arugment is true AND returned value of Number method passing in number as an arugment is true
        // if the condition holds true, return true;
        // otherwise, return false;

// using Number method can check for non-decimal numbers
// using parseFloat can check for decimal numbers
// if not the case of above two things, it will not be a number;

function partyScanner(number) {
    if(parseFloat(number) && Number(number)) return true;
    return false
}

console.log(partyScanner("2.2"))