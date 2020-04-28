// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// pseudocode
// declare a function called nSlideShape with a single parameter, n;
// set a condition in side a function to check for n;
// return the correct information based on the right condition

function nSidedShape (n) {
    switch (n) {
        case 1:
            return 'circle';
            break;
        case 2:
            return 'semi-circle';
            break
        case 3:
            return 'triangle';
            break
        case 4:
            return 'square';
            break;
        case 5:
            return 'pentagon';
            break
        case 6:
            return 'hexagon';
            break
        case 7:
            return 'heptagon';
            break
        case 8:
            return 'octagon';
            break
        case 9:
            return 'nonagon';
            break;
        case 10:
            return 'decagon';
            break
        default: 
            return 'please input numbers between 1 and 10';
    }
}