// Having no coffee left in the house, you run out to grab some, hastily leaving your wallet behind. You come to this realization after the barista hands over your Ristretto, and pull out some loose change from your pocket. Embarrassed, you go home empty-handed and start on a function to save you next time. Your function will accept a total amount due and an array that represents the change in your pocket, and holds values in this order: pennies, nickels, dimes, quarters. For example, if you provide this array: [1,2,3,4], it means that the contents in your pocket consist of one penny, two nickels, three dimes, and four quarters. If you have enough change to cover your order, the function will return true. Otherwise, it'll return false. Good luck!

// Brainstorm:
// Function is provided with 2 things:
    // total amount due
    // array with how many of each coins I have in penny, nickle, dime, and quarter order
// If any combination of coins in an array is equal to the change (decimal digits of the amount due) then return true
// otherwise return false
// Naive guess:
    // First approach I should take is to extract the decimal units 

// Pseudocode:
// declare a function called checkChange with 2 parameters, amount due and changes
    // instantiate a variable called 

function checkChange(amount, change) {
    const changeAmount = amount - amount.toFixed(0);

}