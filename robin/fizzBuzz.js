// You've been preparing for your next big interview, and have gone over the classic FizzBuzz problem over and over. You decide to visit your Robin dashboard, and it looks like the question of the day is not FizzBuzz, but FizzBuzzFuzz! Here are the rules: Write a function that will write out all the numbers from 1 to 150 to the console. For multiples of 3, instead of writing "3", you should write "Fizz". When a number is a multiple of "5", you should write "Buzz". If a number is a multiple of "7", print "Fuzz". For multiples of 7 AND 3, write out "FizzFuzz". When a number is a multiple of 7 AND 5, write out "BuzzFuzz". When a number is a multiple of 3,5, AND 7, you should write out "FizzBuzZFuzz".

// Conditions:
    // multiples of:
        // 3: Fizz;
        // 5: Buzz;
        // 7: Fuzz
        // 7 && 3: FizzFuzz;
        // 7 && 5: BuzzFuzz;
        // 3 && 5 && 7: FizzBuzZFuzz
// what about 3 && 5?
    // I can set strict conditions;

// Brainstorm:
    // use mod to find multiples of a each number;
    // use hashTable to return different results;

// Pseudocode:
// declare a function called fizzBuzz with no parameter
    // instantiate a variable called rule with an object with condition rules (number as key and string as value)
    // set a loop that iterates 150 times starting from index 1;
        // instantiate a string with empty variable every iteration
        // set a condition to check if i mod 3 is equal to 0
            // if true, concatenate string with 3 property of the rule object;
        // set a condition to check if i mod 5 is equal to 0
            // if true, concatenate string with 5 property of the rule object;
        // set a condition to check if i mod 7 is equal to 0
            // if true, concatenate string with 7 property of the rule object;


// Solution approach with hashtable
function fizzBuzz() {
    const rule = {
        3: 'Fizz',
        5: 'Buzz',
        7: 'Fuzz'
    }
    for(let i = 1; i <= 150; i++) {
        let string = ''
        if(i % 3 == 0) string += rule[3];
        if(i % 5 == 0) string += rule[5];
        if(i % 7 == 0) string += rule[7];
        if(string) console.log(string);
    }
}