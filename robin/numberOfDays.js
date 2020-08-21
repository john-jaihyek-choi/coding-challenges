// Write a function that accepts a month and a year as integers and returns the number of days in that specific month.

// Pseudocode:
// declare a function called countDays with 2 parameters, month and an year
    // set a condition to check if the returned value of calling Number method of the window object passing in month is invalid Or passing in year is invalid
        // if true, return a with a proper message
    // instantiate a variable called nextMonth with a new Date constructor, passing in 2 parameters, year and month
    // instantiate a variable called previousMonth with a new Date constructore, passing in 2 parameters, year and month - 1
    // return the following expression: differerence of nextMonth and previousMonth divided by product of 1000, 60, 60, and 24;

function countDays(month, year) {
    if(!Number(month) || !Number(year)) return 'please input a valid number for month and an year'
    
    const nextMonth = new Date(year, month);
    const previousMonth = new Date(year, month-1);

    return ((nextMonth - previousMonth) / (1000*60*60*24));
}

console.log(countDays(2, 2019));