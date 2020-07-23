// Let's look at a long string of words. If you see a word one time, it is considered a stranger. Once you've seen it three times, that word becomes an acquaintance. If you see it five times, it then becomes a friend.
// You can write a function to determine who your friends and acquaintances are. This function will read in a string and return an array of two arrays. The first array holds all the acquaintance words in the order that they became an acquaintance. The second array holds all of the friend words in the order that they became friends. If a word is in the friend array, it should not be in the acquaintance array.


// Brainstorm:
// Function returns:
    // object containing arrays of friends and acquaintances
        // Rules:
            // must be in order in which the word became friend/acquaintance
            // if a word is in friends array, then it cannot be in acquaintance, Vice versa.

// Solution: keep track of orders as looping through the input string and delete the instance of acquaintance if a word becomes a friend

// Pseudocode:
// declare a function called viewMyConnections with a single parameter, string;
    // instantiate a variable called connections and assign it a returned avlue of calling split method of calling toLowerCase method of the string object passing in empty space as an arugment for the split method;
    // instantiate a variable called frequency with an initial value of empty object;
    // instantiate a variable called acquaintances with an initial value of empty object;
    // instantiate a variable called friends with an initial value of empty object;
    // instantiate a variable called friendCount with an initial value of 0;
    // instantiate a variable called acquaitanceCount with an initial value of 0;
    // instantiate a variable called result with an initial value of an object with friends property with an empty array AND acquaintances property iwth an empty array;

    // set a loop that iterates the length property of the connections object many times;
        // set a condition to check if frequency at conecctions at i'th index is invalid;
            // if true, set frequency at conecctions at i'th index equal to 1;
            // otherwise, increment frequency at conecctions at i'th index value;
        // set a condition to check if frequency at conecctions at i'th index is strictly equal to 3
            // if true, set friends at incremented value of friendCount'th index equal to the value of connections at i'th index;
                // then delete the acquaintanceCount property of the acquaintances object and decrement the acquaintanceCount by 1 after;
        // set a condition to check if frequency at connections at i'th index is strictly equal to 2
            // if true, set acquaintances at incremented value of acquaintanceCount'th index equal to the value of connections at i'th index;
    // set a loop that iterates through the object friends, where each iteration being 'friend'
        // call the push method of the friends property of the result object, passing in the value of friends object at friend property;
    // set a loop that iterates through the object acquaintances, where each iteration being 'acquaintance
        // call the push method of the acquaintances property of the result object, passing in the value of acquaintances object at acquaintance property;
    // return result;
    
function viewMyConnections(string) {
    const connections = string.toLowerCase().split(' ');

    const frequency = {};
    const acquaintances = {};
    const friends = {};

    let friendCount = 0;
    let acquaintanceCount = 0;

    const result = {
      friends: [],
      acquaintances: []
    }

    for(let i = 0; i < connections.length; i++) {
        if(!frequency[connections[i]]) {
            frequency[connections[i]] = 1;
        } else {
            frequency[connections[i]]++;
        }

        if(frequency[connections[i]] === 3) {
          friends[++friendCount] = connections[i];
          delete acquaintances[acquaintanceCount--];
        } else if(frequency[connections[i]] === 2) {
          acquaintances[++acquaintanceCount] = connections[i];
        }
    }

    for(friend in friends) {
      result.friends.push(friends[friend]);
    }
    
    for(acquaintance in acquaintances) {
      result.acquaintances.push(acquaintances[acquaintance]);
    }

    return result;
}

console.log(viewMyConnections('this is a random string. so random that I dont know what is going on. funny, is it not?'));