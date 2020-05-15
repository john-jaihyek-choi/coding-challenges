// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// Pseudocode (solution without using methods):
// declare a function called defangIPaddr with a single parameter address
// instantiate a variable called defanged with an initial value of empty string
// within the function,
// loop thorugh the given parameter address
// on each iteration, set a condition to check if value of current iteration'th index on address is equal to '.'
// if true, concatenante '[.]' to the defanged variable
// otherwise, concatenate the value of current iteration'th index of address;

var defangIPaddr = function(address) {
    let defanged = '';
    for(let i = 0; i < address.length; i++) {
        if(address[i] === '.') defanged += '[.]'
        else defanged += address[i];
    }
    return defanged;
};
