// find 2 movies in which their length matches exactly the same as their flight time

function checkMovieTime(flightLength, moviesTimes) {
    const timeTarget = {};

    for(let i = 0; i < moviesTimes.length; i++) {
        const target = flightLength - moviesTimes[i];
        if(timeTarget[moviesTimes[i]]) return true;
        timeTarget[target] = true;
    }

    return false;
}

console.log(checkMovieTime(160, [80, 40, 150, 50]));