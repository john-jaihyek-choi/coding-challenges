// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// pseudocode
// Declare a function called moodToday with a single parameter, mood;
// instantiate a variable named mood and assign it a value of mood parameter
// set a conditional (if statement) to check whether the value of mood has truthy value
// if truthy, then return the statement "Today, I am feeling " concatenated with the value of the variable mood;
// if not, then return the statement "Today, I am feeling " concatenated with the value of the string value "neutral";

function moodToday (mood) {
    if(!mood) mood = "neutral"; 
    return "Today, I am feeling " + mood;
}