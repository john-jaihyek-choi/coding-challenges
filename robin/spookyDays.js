// Western superstition considers Friday the 13th to be an unlucky day. Write a function that receives a month and year as numbers and returns whether that month contains a Friday 13th or not (true or false). Months are not preceded with 0, so January = 1, February = 2, etc. You can pass in the full year, like 2020 or 1975.

function spookyDay(month, year) {
    if(!Number(month) || !Number(year)) return 'Please input numeric value for month and year';
    const thirteenth = new Date(`${month}/13/${year}`);

    return thirteenth.getDay() === 5 ? true : false;
}

console.log(spookyDay(3, 2020));