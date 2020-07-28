// Write a function that returns the number of users who are online in your slack channel. Please include the following features:

// 1) If nobody is online, return "There is nobody online."

// 2) If one person is online, return "username online"

// 3) If there are two people online, return "username and username2 are online

// 4) If there are more than two people, return "username, username2, and # more are online." So, if there were 6 people total online, you could return "username, username2, and 4 more are online."


// Pseudocode:
// declare a function called checkOnlinUsers with a single parameter, userArr
    // instantiate a variable called numberOfUsers and assign it a value of length property of the userArr object minus 1;
    // set a condition to check if numberOfUsers is equal to 0 
        // if true, return a message with correct information
    // set a condition to check if numberOfUsers is equal to 1
        // if true, return a message containing userName
    // set a condition to check if numberOfUsers is equal to 2
        // if true, return the two userNames
    // set a condition to check if numberOfUsers is greater than 2
        // if true, return a statement containing the first two users and numberOfUsers minus 2;

function checkOnlineUsers(userArr) {
    const numberOfUsers = userArr.length;
    let message = 'There is nobody .'

    if(numberOfUsers === 0) message;
    if(numberOfUsers === 1) message = `${userArr[0]} `;
    if(numberOfUsers === 2) message = `${userArr[0]} and ${userArr[1]} are `;
    if(numberOfUsers > 2) message = `${userArr[0]}, ${userArr[1]} and ${numberOfUsers - 2} more are `;

    return message += 'online.';
}    