// Today's prompt is simple - write a function to determine how many days are left until Christmas!

// Pseudocode:
// declare a function called daysLeft with a single parameter, targetDate
    // instantiate a variable called today with a new Date constructor
    // instantiate a variable called christmas with new Date constructor passing in targetDate as an argument
    // instantiate a variable called daysCount and assign it a returned value of difference between value of calling getTimemethod of the christmas object and value of calling getTime method of today object;
    // return the returned value of calling round method of the Math object, passing in quotient of daysCount and 1000 ties 3600 * 24;

function daysLeft(targetDate) {
    const today = new Date();
    const christmas = new Date(targetDate);
    const daysCount = christmas.getTime() - today.getTime()
    return Math.round(daysCount / (1000 * 3600 * 24));
}

console.log(daysLeft('1/1/2021'));