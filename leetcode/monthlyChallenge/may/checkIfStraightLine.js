// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// self note:
// straight lines MUST meet the following conditions for it to be straight:
    // given: coordinate = [ [x1,y1], [x2,y2], [x3,y3] ] 
    // slope: (y2 - y1) / (x2 - x1) === (y3 - y2) / (x3 - x2) ...

// Pseudocode: 
// declare a function called checkStriaghtLine with a single parameter coordinates
// instantiate a variable named ans with an initial value of true;
// instantiate a variable named slope with an initial value of the result of the following math expression: (yn+1 - yn) / (xn+1 - xn) 
// instantiate a variable named prevCoord with an initial value of coordinates at 0th index;
// create a loop that iterates coordinates length - 1 many times and start the iteration from 1;
// within the loop,
// instantiate variable called currentCoord and assign it a value of coordinates at i'th index
// instantiate variable called newSlope and assign it a result of the following math expression: currentCoordY - prevCoordY / currentCoordX - currentCoordX
// set a condition to check if newSlope is NOT equal to slope
// if true, return false;
// if otherwise, set prevCoord to a value of currentCoord and 

var checkStraightLine = function(coordinates) {
    let ans = true;
    const slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
    let prevCoord = coordinates[0];

    for(let i = 1; i < coordinates.length; i++) {
        let currentCoord = coordinates[i];
        let newSlope = (currentCoord[1] - prevCoord[1]) / (currentCoord[0] - prevCoord[0]);
        if(newSlope != slope) return ans = false;
        prevCoord = currentCoord;
    }
    return ans
}; 