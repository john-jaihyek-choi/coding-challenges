// In trying to come up with an insult for your old-fashioned friend (jokingly, of course), you ask "What century are you even from?" This made you think about how to convert a year into century format - and you have no idea! After doing a little research, you decide to come up with a function to save other people from your misery in the future. Please write a function that takes in a year and returns the corresponding century. You will only be allowed to input years from 1000 - 2010.

// Pseudocode:
// declare a function called calculateCentury with a single parameter, year
    // set a condition to check if the returned value of calling the Number method of the window object, passing in year as an arugment is falsy;
        // if true, return the statement 'please input valid number'
    // set a condition to check if year is less than or equal to 2010 AND year is greater than or equal to 1000;
        // if true, call the floor method of the Math object, passing in the mathemtic expression of year divided by 100;
        // otherwise, return the statement 'please input a year between 1000 to 2010;

function calculateCentury(year) {
    if(!Number(year)) return ('please input a valid number');
    if(year >= 1000 && year <= 2010) {
        return Math.floor(year/100);
    } else {
        return ('please input year between 1000 and 2010');
    }
}

