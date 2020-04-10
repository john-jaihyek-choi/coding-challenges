// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

// pseudocode
// declare a function and give 3 parameters, probability, prize, and pay;
// multiply parameter probability by prize and assign the returned value to const variable expProfit
// subtract the value of parameter pay from expProfit and assign the value to const variable netOutcome
// set a conditional statement checking if netOutcome is greater than 0
// if greater, true
// otherwise, false

function profitableGamble(prob, prize, pay) {
    const expProfit = prob * prize;
    const netOutcome = expProfit - pay
    if(netOutcome > 0) return true;
    return false;
}