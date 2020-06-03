// Hip hip hooray! It’s tax season! Your CPA has requested that you provide your tax amounts in cents this year. Rather than using pen and paper, wouldn’t it be faster for you to write a function that accepts a dollar amount and a tax percentage and returns the taxed amount in cents?

// few considerations:
    // arguments may be accepted in following different ways
        // 1. decimal percentage form (eg 0.20 for 20 percent)
        // 2. wholenumber percentage form (eg 20.25 for 20.25 percent)
        // 3. string form (eg 20%)
    // for the sake of this excercise, I will assume that any value greater than 1 is considered a wholenumber form of percentage;
    // otherwise, they are decimal

// Pseudocode:
// declare a function called calcTax with 2 parameters, amount and perc
    // instantiate a variable called percentage and assign the following value
        // calling replace method of the perc object passing regex condition as a first argument and empty string as a second argument
        // Pass in its returned value as an argument of Number method of the window object;
    // set a condition to check if percentage is greater than 1
        // if true, set percentage equal to the quotient of percentage and 100
    // instantiate a variable called tax and assign it a value of the following math expression
        // product of amount, 100, and percentage;
    // return the returned value of calling toFixed method of the tax object passing in 0 as an argument;

function calcTax(amount, perc) {
    let percentage = Number(perc.replace(/[^0-9]/, ""));
    if (percentage > 1) percentage = percentage / 100;

    const tax = amount * 100 * percentage;
    return tax.toFixed(0);
}