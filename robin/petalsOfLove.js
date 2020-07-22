// You've most likely heard of the game Loves me, loves me not. Someone has a flower - each time the pluck off a petal, they say "Loves me"...then the next time they pluck off a flower, they say "Loves me not"... and so on and so on until they pull off the last petal. Whatever phrase they speak out when they pull off the last petal determines whether someone they have interest in loves them back or not.
// Write a function to simulate this game! Pass in a number of petals. Return "Loves me, Loves me not, Loves me...etc". On the LAST phrase, write it in ALL CAPS.
// doYouLoveMe(4) ==> "Loves me, Loves me not, Loves me, LOVES ME NOT"

// Pseudocode:
// declare a function called loveMeYo with a single parameter, petals;
    // instantiate a variable love with an initial value of empty array;
    // set a loop that iterates petals many times, starting from 1;
        // set a condition to check if i modulo 2 is equal to 0
            // if true, call the push method of the love array, passing in 'Loves me not' as an arugment;
            // otherwise, call the push method of the love array, passing in 'Love me' as an arugment;
    // set petals minus 1 index of the love array equal to returned value of calling toUpperCase method of its own value;
    // return the returned value of calling join method of the loves object, passing in ', ' as an argument;

function loveMeYo(petals) {
    const love = [];

    for (let i = 1; i <= petals; i++) {
        if (i % 2 == 0) love.push("Loves me not");
        else love.push("Loves me");
    }

    love[petals - 1] = love[petals - 1].toUpperCase() + "!!!";
    
    return love.join(", ");
}

console.log(loveMeYo(5));