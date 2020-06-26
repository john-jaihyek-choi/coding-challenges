// *buzz buzz buzz* Flies...again? Didn't you just get rid of them this morning? In a world like the one seen in Tron, you could just write a function to get rid of each "fly" you see. Why don't you do the same: write a function that removes each "fly" you see in a string, as well as any letter from the word "fly" (f, l, or y), just to be safe! For example, if you passed in a string like "flyflyfflllgoflyyyyflynefffff", it would return the string "gone". If there are no "fly"s or traces of "fly"s, return the string "No flies here!" Give it a try!

// Brainstorm:
// solution using regex:
    // check the string for f,l,y,F,L,Y and return strings that are not them using the match method of the string;

// Pseudocode:
// declare a function called killTheFly with a single parameter, string;
    // instantiate a variable called fly and assign the following value:
        // call the match method of the string object passing in regex condition as an argument;
            // and call a join method of its returned value passing in empty string as an argument
    // return the above value;

function killTheFly(string) {
    const fly = string.match(/[^flyFLY]/g).join('');
    if(fly.length === string.length) return message = 'No flies here!';
    return fly;
}

console.log(killTheFly('gone'))
    