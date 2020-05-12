// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.
// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.
// At the end, return the modified image.

// SelfNote:
// DFS (depth-first-search) approach
// conditions to return out of function if:
    // starting position is already equal to the newColor that is being attempted to be assigned
    // if the index is out of bound 
// otherwise,
    // call a dfs function
// return image arrays

// DFS function setup:
    // conditions to return out of the function:
        // index is out of bound (if r or c is either less than 0 or greater than length of the image)
        // image[r][c] is not start value;
// otherwise,
    // assign image[r][c] to newColor;
    // run horizontal (top and bottom) function check;
    // run vertical (left and right) function check;

// Pseudocode:
// declare a function called floodfill with 4 parameters, image, sr, sc, newColor
// instantiate a variable called start with an initial value of sc'th index at sr's index of image;
// set condition to check if starting position null, that index is out of bound, and if start is already equal to newColor;
// if yes, then return out of the function
// otherwise,
// call function called checkAndFill and pass image, sr, sc, newColor, and start as parameter
// then return image variable;

// outside of the above function declare a function called checkAndFill
// within that function, check for following conditions:
    // index is out of bound (if sr or sc is either less than 0 or greater than length of the image)
    // image[sr][sc] is not equal to start
// otherwise call the checkAndFill function with following arguments:
    // top: image, sr - 1, sc, newColor
    // bottom: image, sr + 1, sc, newColor
    // left: image, sr, sc - 1, newColor
    // right: image, sr, sc + 1, newColor



var floodFill = function(image, sr, sc, newColor) {
    let start = image[sr][sc];
    if(!image || start == newColor) return;

    checkAndFill(image, sr, sc, newColor, start);
    return image;
};

function checkAndFill(image, row, column, newColor, initial) {
    if(initial != newColor || row < 0 || column < 0 || row >= image.length || column >= image[0].length) {
        return
    }
    image[row][column] = newColor;
    checkAndFill(image, row - 1, column, newColor, initial)
    checkAndFill(image, row + 1, column, newColor, initial)
    checkAndFill(image, row, column - 1, newColor, initial)
    checkAndFill(image, row, column + 1, newColor, initial)
}