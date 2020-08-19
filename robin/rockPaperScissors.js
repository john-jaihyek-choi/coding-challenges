// Do you remember that first simple project you had to build during your bootcamp - Rock, Paper, Scissors game? You were perhaps not sure what you were supposed to do at that time. Since you've either learned lots of more complicated coding topics or built many applications, you should be able to quickly build a simple RPS game today. Robin challenges you!

// Pseudocode:
// declare a function called rockPaperScissors with a single parameter userInput
    // instantiate a variable called actions and assign it an array with rock, paper, scissors in its indexes
    // instantiate a variable called computerInput and assign it a returned value of actions at index at the returned value of calling floor method of the Math object, passing in the product of value calling random method of the Math object multiplied by 3;
    // instantiate a variable called winCondition with rock, scissors, paper properties with each of the values;
    // instantiate a variable called result and assign it a value of 'win'
    // set a condition to check if computerInput is equal to winCondition at userInput index
        // if true, set result equal to 'lost'
    // set a condition to check if computerInput equal to userInput
        // if true, set result equal to 'tie'
    // instantiate a variable called message containing result statement
    // return message;

function rockPaperScissors(userInput) {
    const actions = ['rock', 'paper', 'scissors'];
    const computerInput = actions[Math.floor(Math.random() * 3)]
    const winCondition = {
        rock: 'paper',
        scissors: 'rock',
        paper: 'scissors'
    };

    let result = 'win'
    
    if(computerInput === winCondition[userInput]) {
        result = 'lost';
    } else if(computerInput === userInput) {
        result = 'tie';
    }
    
    const message = `You: ${userInput} Computer: ${computerInput}; You ${result}`
    
    return message
}

console.log(rockPaperScissors('rock'))