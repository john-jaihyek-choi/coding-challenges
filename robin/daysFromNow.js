// Do you ever get confused when someone says "In 5 days from now..."? Which day will it be? Write a function that takes in an array of days (like ["Monday", "Wednesday", "Thursday"]) and a single number n , and return an array of what day it will be in n number of days. For the example provided above, if we asked what day it would be in 3 days, we would return ["Thursday", "Saturday", "Sunday"]

function daysFromNow(num) {
    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }

    const daysArr = [];
    const today = new Date().getTime();
    const oneDay = 86400000

    for(let i = today + oneDay; i <= today + (num * oneDay); i += oneDay) {
        daysArr.push(days[new Date(i).getDay()]);
    }

    return daysArr
}

console.log(daysFromNow(10))