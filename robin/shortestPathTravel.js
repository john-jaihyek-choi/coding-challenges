// Surely you know about the famous Traveling Salesman problem? If you have a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city and returns back to the starting point? Write a function that receives "n" number of paths and returns the total number of possible paths that a salesman can travel.

function getPossiblePaths (destinations) {
    let possiblePath = 1;
    for(let i = destinations; i > 0; i--) {
    possiblePath *= i;
    }
    return possiblePath;
}
  
console.log(getPossiblePaths(3))