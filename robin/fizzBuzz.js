// You've been preparing for your next big interview, and have gone over the classic FizzBuzz problem over and over. You decide to visit your Robin dashboard, and it looks like the question of the day is not FizzBuzz, but FizzBuzzFuzz! Here are the rules: Write a function that will write out all the numbers from 1 to 150 to the console. For multiples of 3, instead of writing "3", you should write "Fizz". When a number is a multiple of "5", you should write "Buzz". If a number is a multiple of "7", print "Fuzz". For multiples of 7 AND 3, write out "FizzFuzz". When a number is a multiple of 7 AND 5, write out "BuzzFuzz". When a number is a multiple of 3,5, AND 7, you should write out "FizzBuzZFuzz".

// Conditions:
    // multiples of:
        // 3: Fizz;
        // 5: Buzz;
        // 7: Fuzz
        // 7 && 3: BuzzFuzz;
        // 7 && 5: BuzzFuzz;
        // 3 && 5 && 7: FizzBuzZFuzz
// what about 3 && 5?
    // I can set strict conditions;

// Brainstorm:
    // use mod to find multiples of a each number;
    // set total of 5 conditions to return different strings in a loop;

// Pseudocode:
// declare a function called fizzBuzz with no parameter
    // set a loop that iterates 150 times starting from index 1;
        // set a condition to check if i'th index is mod of 3 && 7 && 5;
        // set a condition to check if i'th index is mod of 7 && 3;
        // set a condition to check if i'th index is mod of 3;
        // set a condition to check if i'th index is mod of 5;
        // set a condition to check if i'th index is mod of 7;

function fizzBuzz() {
    for(let i = 1; i <= 150; i++) {
        if(i % 3 == 0 && i % 5 == 1 && i % 7 == 1) console.log('Fizz');
        if(i % 5 == 0 && i % 3 == 1 && i % 7 == 1) console.log('Buzz');
        if(i % 7 == 0 && i % 3 == 1 && i % 5 == 1) console.log('Fuzz');
        if(i % 3 == 0 && i % 7 == 0 && i % 5 == 1) console.log('FizzFuzz');
        if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0) console.log('FizzBuzZFuzz');
    }
    return message = 'finished';
}

console.log(fizzBuzz());