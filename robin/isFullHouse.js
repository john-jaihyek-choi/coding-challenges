// Your friends have invited you to play a virtual game of poker! How exciting...until you realize that you know nothing about Poker. Don't worry, this Robin challenge will at least help you figure out if you or your friends have a Full House. A Full House is a hand of 5 cards that have one pair of cards and one three of a kind. Let's write a function that takes in an array of 5 cards and tells us if the hand is a full house or not!
// isFullHouse(["K", "K", "A", "K", "A"] ) should return true
// isFullHouse(["A","J","10","3","3"]) should return false

// Brainstorm:
// Initial thought:
// Making hashtable which stores each instance;
// loop through the parameter array and assign each value as a property for the hashtable with default value of 0
// loop through the array and start incrementing the value
// use the values method of the object to check if the length of the array is not equal to 2
    // if so, return false, because full house cannot be made with 3 different pairs;
// loop through the values array and check if the sum of each value at each iteration adds up to 5; then return true;
// otherwise, return false;

// Pseudocode:
// declare a function called isFullHouse with a single parameter hand;
    // create an object called cards with an empty object as its initial value;
    // set a loop that iterates through the hand array and set property to the cards object with value at each iteration with a default value of 0 or, if exists, increment;
    // instantiate a variable called pairs and assign it the returned value of calling values method of the Object object, passing cards as an arugment;
    // set a condition to check if length property of the pairs object is not equal to 2
        // if true, return false;
    // otherwise, check if 0th index of the pairs array is equal to either 2 or 3;
        // then return true;
    // otherwise, return false;

    function isFullHouse(hand) {
        const cards = {};
        for(let i = 0; i < hand.length; i++) {
            cards[hand[i].toLowerCase()] = cards[hand[i].toLowerCase()] + 1 || 1; // O(n) / O(n);
        }

        const pairs = Object.values(cards); // O(n) / O(1);
    
        if(pairs.length !== 2) return false;
        if(pairs[0] == 2 || pairs[0] == 3) return true;
    
        return false;
    }
    
    console.log(isFullHouse(["K", "K", "A", "K", "A"]))