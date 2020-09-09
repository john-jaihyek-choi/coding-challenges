// It's almost moving day! You have various boxes of different sizes and want to know the total volume of all the boxes together. Why don't you write a function that calculates the volume? The function will receive multiple arrays - each array will represent a box. The arrays will have three elements each: length, width, and height. Good luck!

// assuming that the input is array of arrays
function volumeOfBoxes(boxesArr) {
    let volume = 0;
    for(let i = 0; i < boxesArr.length; i++) {
        volume += (boxesArr[i][0] * boxesArr[i][1] * boxesArr[i][2]);
    }
    return volume;
}

// assuming that the input is indefinite arguments
function volumeOfBoxes() {
    let volume = 0;
    for(let i = 0; i < arguments.length; i++) {
        volume += (arguments[i][0] * arguments[i][1] * arguments[i][2]);
    }
    return volume;
}

console.log(volumeOfBoxes([1,2,3],[4,5,6],[1,1,2],[3,2,5]));
