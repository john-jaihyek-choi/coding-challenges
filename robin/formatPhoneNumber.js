// You're building a social networking platform and save your user's phone numbers as integers. However, when you display the phone number on their profile, it isn't formatted and looks pretty ugly. It's time to write a function that takes in 10 integers and returns the phone number as a formatted string. The string would look something like this: (123) 456-7890

// Key points to keep in mind:
    // parameter that the function will receive will be 10 integers
        // if less or greater than 10, throw error
    // string will be in the following format: (xxx) xxx-xxxx
        // assuming that spaces are present in between the closing parenthesis and the first number following it, returning string's length will be 14.
// plan of action:
    // get number parameter and exclude another value other than number
    // check if the length of the exluded value exceeds the value of 10;
    // if all pass, proceed to the code
        
// Pseudocode:
    // declare a function called convertPhoneNum with a single parameter number;
        // instantiate a variable called stripped and assign it a returned value of calling String method of the window object passing in the following:
            // calling replace method of the number object passing in regex filtering for numeric digits and an empty string as an arguments;
        // instantiate a variable called formatted and assign it a returned value of...
            // calling match method of the stripped object passing in regex to break numbers into 3, 3, 4 pattern (using match will return array);
        // return the catenated value of '(', formatted at 1st index, ') ', formatted at 2nd index, '-', formatted at 3rd index;
    
function convertPhoneNum (number) {
    const stripped = String(number).replace(/\D/g, '');
    
    if (stripped.length != 10) return error = 'please input 10 full digits of your phone number';

    const formatted = stripped.match(/^(\d{3})(\d{3})(\d{4})$/);
    
    return '(' + formatted[1] + ') ' + formatted[2] + '-' + formatted[3];
}