// Have you been practicing your coding every day? Now it's time for you to practice by writing a function that accepts the current date and a list of dates and returns how many days you have been on a streak for (in our case, how many consecutive days you have been practicing coding). If the array is empty, return 0.

function currentStreak(currentDate, datesArray) {
    datesArray.sort()

    let consecutiveDays = 0;
    const today = new Date(currentDate);
    const latestDay = new Date(datesArray[datesArray.length-1]);

    for(let i = 1; i < datesArray.length; i++) {
        const prevDate = new Date(datesArray[i-1]);
        const currDate = new Date(datesArray[i]);
        if(currDate - prevDate === 86400000) consecutiveDays++;
        else consecutiveDays = 0;
    }

    console.log(datesArray);

    return today - latestDay === 86400000 ? consecutiveDays + 2 : consecutiveDays + 1;
}

console.log(currentStreak('8/22', ['8/16', '8/15', '8/19', '8/20']))