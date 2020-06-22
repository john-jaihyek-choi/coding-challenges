// How many mores days are left until you think the COVID-19 pandemic will end? Why not write a function to tell you so you don't have to calculate it yourself! Your function should be structured like below - it should take two dates and return the number of days between the two
// function daysToFreedom(date1, date2){}

// Brainstorm: 
// Naive Approach:
    // instantiate two objects, start and end, with an empty object;
    // loop through each of the input provided
    // set month, date, and year property
        // set each value as a key;
    // loop through one of the two objects instantiated and do the math;

// Pseudocode:
// instantiate a variable called dayInMonth with an object containing the following property and values:
    // 1: 31
    // 2: 28
    // 3: 30
    // 4: 31
    // 5: 30
    // 6: 31
    // 7: 30
    // 8: 31
    // 9: 30
    // 10: 31
    // 11: 30
    // 12: 31
// declare a function called daysToFreedom with 2 parameters, date1 and date2;
    // instantiate variables called strippedDate1 and strippedDate2
        // and assign each of its variable a returned value of calling the replace method of the each variable object passing regex condition to replace non digits characters, and replaced them to '/'
            // and call split method on its returned value;
    // instantiate a variable called startDate and endDate, both with the following properties:
        // month, day, and year;
    // set month property of the startDate object equal to 0th index of the strippedDate1 and calll Number method on it;
    // set day property of the startDate object equal to 1st index of the strippedDate1 and call Number method on it;
    // set year property of the startDate object equal to 2nd index of the strippedDate1 and call Number method on it;

    // set month property of the endDate object equal to 0th index of the strippedDate2 and calll Number method on it;
    // set day property of the endDate object equal to 1st index of the strippedDate2 and call Number method on it;
    // set year property of the endDate object equal to 2nd index of the strippedDate2 and call Number method on it;

    // instantitate a variable called resultArr with an empty arr;
    
    // do the math of value of month property of the 
    // do the math and do day property of the endDate object 

function daysToFreedom(date1, date2) {
    const daysInMonth = {
        1: 31,
        2: 28,
        3: 30,
        4: 31,
        5: 30,
        6: 31,
        7: 30,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    const strippedDate1 = date1.replace(/\D/g,'/').split('/');
    const strippedDate2 = date2.replace(/\D/g,'/').split('/');
    
    const startDate = {};
    const endDate = {};

    startDate.month = Number(strippedDate1[0]);
    startDate.day = Number(strippedDate1[1]);
    startDate.year = Number(strippedDate1[2].substring(strippedDate1.length - 2));
    startDate.daysLeft = daysInMonth[startDate.month] - startDate.day;

    endDate.month = Number(strippedDate2[0]);
    endDate.day = Number(strippedDate2[1]);
    endDate.year = Number(strippedDate2[2].substring(strippedDate2.length - 2));

    let fullMonthsLeftInDays = 0;
    for(let i = startDate.month + 1; i < endDate.month; i++) {
        fullMonthsLeftInDays += daysInMonth[i];
    }

    console.log(fullMonthsLeftInDays)
    
    const result = (startDate.daysLeft + endDate.day) + fullMonthsLeftInDays + ((endDate.year - startDate.year) * 365);
    return result;
}


function daysToFreedom(date1, date2) {
    const singleDay = 24 * 60 * 60 * 1000;
    const strippedDate1 = date1.replace(/\D/g,'/').split('/');
    const strippedDate2 = date2.replace(/\D/g,'/').split('/');

    if(!Number(strippedDate1[0]) || !Number(strippedDate1[1]) || !Number(strippedDate1[2]) || !Number(strippedDate2[0]) || !Number(strippedDate2[1]) || !Number(strippedDate2[2])) {
        message = ('please input a valid date (ex. 6.20.21, 6/20/21, 6/20/2021');
    }

    const startDate = new Date(strippedDate1[2], strippedDate1[0], strippedDate1[1]);
    const endDate = new Date(strippedDate2[2], strippedDate2[0], strippedDate2[1]);

    return (endDate - startDate) / singleDay;
}

