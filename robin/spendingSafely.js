// You've been quarantined and have become addicted to online shopping and start hoarding ramen. Much to your surprise, you discover that your favorite online marketplace is not secure and displays your credit card details in plain text. Being the good samaritan that you are, you decide to write a function for them that takes in a credit card number and returns a string that replaces all but the last four digits with stars, like this: "************1111". Make sure that the number of stars matches with the exact number of digits being replaced.

// Pseudocode
// declare a function called hideCC with a single parameter ccNum
    // instantiate a variable called newCC and assign it a returned value of the following:
        // String method of the window object passing ccNum as an argument
        // and calling replace method on its returned value with regex condition to filter non numeric chracters
    // return the following value:
        // returned value of calling replace method of the newCC object passing regex condition which replaces all digits except the last 4 digits to asterisk

function hideCC(ccNum) {
    let newCC = String(ccNum).replace(/[^0-9]/g, "");
    return newCC.replace(/\d(?=\d{4})/g, "*");
}