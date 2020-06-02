// 

// Pseudocode: 
// declare a function called findCompletment with a single parameter, num;
// instantiate a variable named binaryNum
// change the num parameter value to a integer
// and change the returned value to binary code string and make the string into an array
// iterate as many time as the length of the binaryNum array
// within the iteration, set a condition to check if binaryNum at current iteration is eql to 1
// if yes, set the binaryNum at current iteration index equal to 0;
// otherwise, equal to 1
// change the binaryNum back to string form and change the binary code back to an integer and return the returned value;

var findComplement = function(num) {
    const binaryNum = parseInt(num).toString(2).split('');
    for(let i = 0; i < binaryNum.length; i++) {
        if(binaryNum[i] == '1') {
            binaryNum[i] = '0';
        } else {
            binaryNum[i] = '1';
        }
    }
    return parseInt(binaryNum.join(''), 2);
};