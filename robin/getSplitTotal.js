// You and your friend go out to eat. You order dinner and she orders dessert. You decide to split the bill - you pay for the food items and she pays only for the dessert items.
// If you have two arrays, one with the type of dishes ordered and one with the corresponding price, create a function that returns an array where the first element is the amount that YOU pay and the second element is that amount that YOUR FRIEND pays.

// Pseudocode:
// Declare a function called getSplitTotal with 2 parameters, order and amount;
    // instantiate a variable called breakDown with an initial value of an empty object;
    // set a loop that iterates the length property of the order many times
        // set a condition to check if the value of order at i'th index property of the breakDown object is invalid
            // if true, set order at i'th index of the breakDown object equal to the amount at i'th index;
            // otherwise, set order at i'th index of the breakDown object equal to the sum of itself and the amount at i'th index;
    // return breakDown object

function getSplitTotal(order, amount) {
    const breakDown = {};

    for(let i = 0; i < order.length; i++) {
        if(!breakDown[order[i]]) {
            breakDown[order[i]] = amount[i];
        } else {
            breakDown[order[i]] += amount[i];
        }
    }
    
    return breakDown;
}

console.log(getSplitTotal(["D", "D", "F", "D"], [1, 1, 3, 2]))