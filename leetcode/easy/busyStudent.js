// Given two integer arrays startTime and endTime and given an integer queryTime.
// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

// Pseudocode:
// declare a function called busyStudent with 3 parameters, startTime, endTime, and queryTime
// instantiate a variable called counter with an initial value of 0
// within the function,
// set a loop that iterates startTime's length many times,
// on each iteration, set a condition to check if queryTime is less than or equal to endTime at i'th index AND queryTime is greater than or equal to i'th index of startTime;
// if true, increment the counter variable value by 1
// otherwise, do nothing;
// then return the counter;

var busyStudent = function(startTime, endTime, queryTime) {
    let counter = 0;
    for(let i = 0; i < startTime.length; i++) {
        if(queryTime >= startTime[i] && queryTime <= endTime[i]) counter++;
    }
    return counter;
};