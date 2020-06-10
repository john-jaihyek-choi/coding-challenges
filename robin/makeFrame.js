// You just got hired into a new engineering position - congratulations! The employer required you relocate, so you moved into a new apartment with a bunch of old typical boring picture frames. Before you even think about hosting a housewarming party with your new coworkers, you might want to decorate your living room with eccentric picture frames that you can create using your coding skills. You wish to build a machine that prints out a frame with the provided width, height, and any character as an input. For example, if you were to build a 4 x 4 frame with the # symbol, your frame would look like:
// [["####"], ["# #"], ["# #"], ["####"]]
// In this case, for all the enclosed brackets, there should 4 characters printed, and only the start and end of the bracket should have the # character printed - the remaining two characters should be two spaces. If the number were five, for example, we should display the two brackets each started and ending with # symbols and with three spaces in between.
// Since you do not own any small photos, you need to make sure that your machine won't make a frame if the width or height is 3 or less.

// Brainstorm:
// Given height, width, and a symbol
// Need to return an array
// very first and very last will be w and h that is passed in as an argument
    // ex) if w = 5, 5 of the symbol that is passed in as an argument
    // ex) if h = 4, 4 of the symbol that is passed in as an argument
// ones in between, will push how many we need to fill:
    // calculation will be nw (new width) = ow - 2 and nh = oh - 2

// Pseudocode:
    // declare a function called makeFrame with 3 parameters, width, height, and symbol;
    // set a condition to check if width is less than or equal to 3 or height is less than or equal to 3
        // if true, log a message so that the machine does not create frame;
    // set a condition to check if width or height is a falsy value
        // if true, log the message with proper message
    // set a condition to check if symbol is falsy
        // if true, log the message with proper message
    // set a condition to check if width or height is not a number
        // if true, log the message
    
    // instantiate a variable called innerFill with initial value of calling fill method of the Array constructor passing width minus 2 as an arguments and pass empty string as an argument
    // instantiate a variable called widthFill with initial value of calling fill method of the Array constructor passing width as an arguments and pass empty string as an argument
    // instantiate a variable called resultArr with an initial value of empty array;

    // call push method of the innerFill object and pass symbol as an argument
    // call shift method of the innerFill object and pass symbol as an argument

    // set a loop that iterates height many times
        // set a condition to check if index at current iteration is either equal to 0 or width minus 1
            // if true, call the push method of resultArr object passing widthFill as an argument
        // otherwise,
            // call the push method of the resultArr object passing innerFill as an argument;
    // return resultArr;

function makeFrame(width, height, symbol) { // Time O(n) / Space Complexity O(n)
    if(width <= 3 || height <= 3) { // O(1) / O(1)
        return console.log('machine cannot make frames smaller than 3');
    } else if((!width || !height)) {
        return console.log('please input valid ', !width ? 'width' : 'height');
    } else if(!symbol) {
        return console.log('please input a valid symbol');
    } else if(!Number(width) || !Number(height)) {
        return console.log('please input valid integer for ', !Number(width) ? 'width' : 'height');
    }

    const innerFill = new Array(width - 2).fill(' '); // O(n) / O(n);
    const widthFill = new Array(width).fill(symbol); // O(n) / O(n);
    const resultArr = []; // O(1) / O(1);

    innerFill.push(symbol); // O(1) / O(1);
    innerFill.unshift(symbol); // O(1) / O(1);

    for(let i = 0; i < height; i++) {
        if(i === 0 || i === width - 1) {
            resultArr.push(widthFill); // O(n) / O(n)
        } else {
            resultArr.push(innerFill); // O(n) / O(n);
        }
    }

    return resultArr;
}

console.log(makeFrame(5, 5, 'a'));