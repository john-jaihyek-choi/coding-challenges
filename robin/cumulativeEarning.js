// You've been hired at a new company, and you earn one penny on your first day. However, for each sequential day of work, your base amount doubles. This mean that you will earn two pennies on your second day and four pennies on your third day. Write a function that, give a number of days that you provide, will return the total number of cumulative pennies that you will have.

// Pseudocode:
// declare a function called cumulativeEarning with a single parameter, days;
    // instantiate a variable called earning with an initial value of 1
    // set a loop that iterates days many times, starting from i as 1
        // set earning equal to product of itself and 2;
    // return earning;

function cumulativeEarning(days) {
    let earning = 1;
    for(let i = 1; i < days; i++) {
        earning *= 2;
    }
    return earning;
}

console.log(cumulativeEarning(6))