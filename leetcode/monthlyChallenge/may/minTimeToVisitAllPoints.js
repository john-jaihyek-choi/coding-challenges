// On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.
// You can move according to the next rules:
// In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
// You have to visit the points in the same order as they appear in the array.

// Selfnote:
// optimized move:
// when moving to the next coordinate:
    // When slope to next coordinate == 1
        // absolute value of previous coord x - next coord x is the second
    // when slope to next coiordinate != 1
        // sum of absolue value of diffX and absolute value of diffY is the total optimzed second

// Pseudocode:
// declare a function called minTimeToVisitAllPoints with a single parameter points;
// instantiate a variable called prevCoordinate with an initial value of points[0];
// instantiate a variable called seconds with an initial value of 0;
// set a loop that iterates points' length many times;
// within the loop check if abs of diffY divided by abs of diffX is strictly equal to 1
// if true, add abs of diffX value to the seconds;
// otherwise, set another condition to check if diffX is bigger than diffY and add the bigger value to the seconds;
// return the seconds;


// first attempt:
var minTimeToVisitAllPoints = function(points) {
    let prevCoord = points[0]
    let seconds = 0;

    for(let i = 1; i < points.length; i++) {
        const x = 0;
        const y = 1;
        const slope = Math.abs((points[i][y] - prevCoord[y]) / (points[i][x] - prevCoord[x]));
        if(slope == 1) {
            seconds += Math.abs(points[i][x] - prevCoord[x]);
        } else {
            if(Math.abs(points[i][x] - prevCoord[x]) > Math.abs(points[i][y] - prevCoord[y])) seconds += Math.abs(points[i][x] - prevCoord[x]);
            if(Math.abs(points[i][x] - prevCoord[x]) < Math.abs(points[i][y] - prevCoord[y])) seconds += Math.abs(points[i][y] - prevCoord[y]);
        }
        prevCoord = points[i];
    }
    return seconds;
};

// second attempt:
var minTimeToVisitAllPoints = function(points) {
    let prevCoord = points[0]
    let seconds = 0;

    for(let i = 1; i < points.length; i++) {
        const x = 0;
        const y = 1;
        seconds += Math.max(Math.abs(points[i][x] - prevCoord[x]), Math.abs(points[i][y] - prevCoord[y]))
        prevCoord = points[i];
    }
    return seconds;
};