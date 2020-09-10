// Who doesn't love the weekend!? Can you write a function that, given a date in the following format, returns whether that date is a weekend or not? FORMAT: Oct 11, 2010

function isWeekend(date) {
    const day = new Date(date);
    if(!day) return 'Please input a valid date format (ie. Sep 12, 2020, 09/12/2020';
    if(day.getDay() == 0 || day.getDay() == 6) return true;
    return false;
}

console.log(isWeekend('09/12/2020'))