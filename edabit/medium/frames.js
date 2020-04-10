// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// assume screen produces 60 frames every second

// pseudocode
// declare a function frames and give 2 parameters, minute and second
// multiply the value of second to 60 and multiply to the minute and assign the returned value to the const variable fps
// return fps

function frames(minute, second) {
    const fps = second * 60 * minute;
    return fps
}