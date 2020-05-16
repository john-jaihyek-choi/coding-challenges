// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

// Pseudocode:
// declare a function called kidsWithCandies with 2 parameters candies and extraCandies
// within the function
// instantiate a variable high with an initial value of 0;
// instantiate a variable resultArr with an intitial value of empty arr;
// iterate through the array candies length of candies many times
// on each iteration, set the high to current iteration IF current iteration value is greater than high value;
// create another loop that iterates the candies array
// set a condition to check if sum of current iteration value and extra candies is equal to or greater than high value;
// if true, push true to resultArr
// if false, push false to resultArr
// then return the resultArr;

var kidsWithCandies = function(candies, extraCandies) {
    let high = 0;
    let resultArr = [];
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] > high) high = candies[i];
    }
    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies >= high) resultArr.push(true);
        else resultArr.push(false)
    }
    return resultArr;
};