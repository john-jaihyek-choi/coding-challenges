// Make a function that encrypts a given input with these steps:
// steps:
    // 1: reverse the input
    // 2: replace all vowels to its correspondant numbers (aeou => 0123)
    // 3: add "aca" to the end of the word

// Pseudocode
// declare a function called encrypt with a single parameter, strings;
// instantiate a variable named reversedStrings with an initial value of empty string;
// create a loop to iterate as much as length of the strings many times;
// within the loop, set a condition to check if letter at current iteration is strictly equal to vowels (aeiouAEIOU);
    // if true, set a switch condition setting the current index'th letter to a number value (aeou => 0123);
        // then concatenate the converted number value to reversedStrings;
    // otherwise, concatenate the value of current iteration's index to the variable reversedStrings;
// finally, return the value of reversedStrings and concatenate the value 'aca';

function encrypt (strings) {
    let reversedStrings = '';

    for(let i = strings.length - 1; i >= 0; i--) {
        if(/[aeou]/.test(strings[i])) {
            switch (strings[i]) {
                case 'a':
                    reversedStrings += '0';
                    break;
                case 'e':
                    reversedStrings += '1';
                    break;
                case 'o':
                    reversedStrings += '2';
                    break;
                case 'u':
                    reversedStrings += '3';
                    break;
            }
        } else {
            reversedStrings += strings[i];
        }
    }
    return reversedStrings += 'aca';
}
