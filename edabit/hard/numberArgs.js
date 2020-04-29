// Create a function that returns the total number of parameters passed in.

// declare a function called numberArgs with no parameters;
// instantiate a variable named numberOfArguments and assign the value of the returned value of length property of the arguments object;
// return the value of arguments variable;

function numberArgs() {
    const numberOfArguments = arguments.length;
    return numberOfArguments;
}