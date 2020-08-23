// Have you been practicing your coding every day? Now it's time for you to practice by writing a function that accepts the current date and a list of dates and returns how many days you have been on a streak for (in our case, how many consecutive days you have been practicing coding). If the array is empty, return 0.

function currentStreak(currentDate, datesArray) {
    datesArray.sort((a, b) => new Date(a) - new Date(b));

    let consecutiveDays = 0;
    let accumulatedDays = 0;

    const today = new Date(currentDate);
    const latestDay = new Date(datesArray[datesArray.length-1]);

    for(let i = 1; i < datesArray.length; i++) {
        if(today - latestDay != 86400000) return 0;

        const prevDate = new Date(datesArray[i-1]);
        const currDate = new Date(datesArray[i]);

        if(currDate - prevDate === 86400000) consecutiveDays++;
        else {
            if(currDate - prevDate === -31449600000) accumulatedDays++;
            consecutiveDays = 0;
        }
    }

    return today - latestDay === 86400000 || today - latestDay === -31449600000 ? consecutiveDays + accumulatedDays + 2 : consecutiveDays + accumulatedDays + 1;
}

console.log(currentStreak('8/22', ['8/20', '8/21']))