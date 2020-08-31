// February 2nd, 2020 is a palindrome when viewed in mm/dd/yyyy and dd/mm/yyyy formats. Can you write a function that returns true if the date provided is a palindrome in both formats?

function datePalindrome(date) {
    const fullDate = new Date(date);
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth()+1 < 10 ? `0${fullDate.getMonth()+1}` : fullDate.getMonth()+1;
    const day = fullDate.getDate() < 10 ? `0${fullDate.getDate()}` : fullDate.getDate();

    const newDateFormat = `${month}${day}${year}`;
    console.log(newDateFormat);
    return isPalindrome(newDateFormat);
}

function isPalindrome(date) {
    let left = 0;
    let right = date.length-1;

    while(left >= right) {
        if(date[left] == date[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }

    return true;
}

console.log(datePalindrome('12/21/1221'))