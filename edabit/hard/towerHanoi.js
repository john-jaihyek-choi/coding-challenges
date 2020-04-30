// There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.

// Pseudocode
// declare a function called towerHanoi with a single parameter, discs
// inside the function, do a mathematic expression of 2^discs - 1 and return the value

function towerHanoi(discs) {
    return Math.pow(2, discs) - 1;
}

function towerHanoi(discs) {
    let moveCount = 0;
    (function nextMove(discs) {
        if(discs > 0) {
            nextMove(discs-1);
            moveCount++;
            nextMove(discs-1);
        }
    }(discs));
    return moveCount;
}