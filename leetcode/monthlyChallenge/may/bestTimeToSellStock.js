// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

// Selfnote:
// I can only complete 1 transaction (buy once and sell once)
// need to make sure I return the highest maximum profit value
// for: 
    // i = bought
    // j = sold
    // maximumProfit = j - bought
// if neither possible combinations of maximumProfit is greater than 0, I will need to return 0

// Pseudocode:
// declare a function called maxProfit with a single parameter prices
// instantiate a variable called maximumProfit with an initial value of 0;
    // set a loop that iterates length of prices many times;
        // on each iteration, iterate through the prices array starting from i plus 1 value
            // within it, set a condition to check if prices at i'th index - prices at j'th index is greater than maximumProfit
                // if true, set maximumProfit value to the difference of prices at i'th index and prices at j'th index;
// return the value of maximumProfit;

// first solution
var maxProfit = function(prices) {
    let maximumProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            if(prices[j] - prices[i] > maximumProfit) {
                maximumProfit = prices[j] - prices[i];
            }
        }
    }
    return maximumProfit;
};

// second solution
var maxProfit = function(prices) {
    let maximumProfit = 0;
    let cheapest = prices[0];
    prices.forEach( purchased => {
        if(purchased < cheapest) cheapest = purchased;
        if(purchased - cheapest > maximumProfit) maximumProfit = purchased - cheapest;
    })
    return maximumProfit;
};