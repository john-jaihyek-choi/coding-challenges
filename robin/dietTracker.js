// Spring is here and your friend calls to see if you are interested in meeting someone for a blind date next month. You have been a loner for so long - solo for 3 years - and even gained 30 pounds. You are determined to meet the person looking your best, so you decide to cut meals and do intensive cardio. You want to track how often your daily caloric intake is lower than the day before and daily hours spent excercising exceeds those from the previous day. If so, you will mark it as a success day. Create a function that returns the total number of success days.

// Brainstorm:
// Key points:
    // how often a daily caloric intake is lower than the day before
    // how many of hours spend exercising exceeds those from the previous day
    // return total number of success days
// variable to keep in mind:
    // sucessDays;
// parameter:
    // array containing daily cal intake and exercise hours
        // ex) [ [day1Cal, day1Exercise], [day2Cal, day2Exercise], [day3Cal, day3Exercise], [day4Cal, day4Exercise] ]

// Pseudocode:
// declare a function called countSucessDays with a single parameter diet;
    // instantiate a variable called successDays with an initial value of 0;
    // set a loop that iterates the length of diet parameter many times starting from index 1 rather than 0;
        // set a condition to check if:
            // diet at i'th index of 0th index is less than diet at i minus 1 index of 0th index
            // AND
            // diet at i'th index of 1st index is greater than diet at i minus 1 index of 1st index;
        // if true, increment the successDays by 1;
    // return sucessDays;


function countSuccessDays(diets) {
    let successDays = 0;
    for(let i = 1; i < diets.length; i++) {
        if(diets[i][0] < diets[i-1][0] && diets[i][1] > diets[i-1][1]) {
            successDays++;
        }
    }
    return successDays;
}

const mayDiet = [[350, 1], [450, 2], [250, 3], [550, 2]];
const juneDiet = [[550, 1], [450, 2], [250, 3], [150, 2]];

console.log(countSuccessDays(mayDiet));
console.log(countSuccessDays(juneDiet));