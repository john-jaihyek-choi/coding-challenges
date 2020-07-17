// Been doing most of your shopping online? It looks like your favorite store is offering a promotion - if your total is greater than or equal to $30.00, then you get free shipping! Please write a function that returns true if your order is eligible for free shipping and false if it is not.

// Pseudocode:
// declare a function called freeShippingEligibility with a single parameter, cart
    // instantiate a variable called total with an initial value of 0
    // set a loop that iterates through cart object
        // set total equal to the sum of itself and item at each iteration
        // set a condition to check if total is greater than or equal to 30
            // if true, return true;
    // if nothing is returned from above, return false;

function freeShippingEligibility(cart) {
    let total = 0;
    for(item in cart) {
        total += cart[item];
        if(total >= 30) return true;
    }
    return false;
}
    