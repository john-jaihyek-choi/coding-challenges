// Write a function that reads an array and will return every element in the array that is greater than both the number on their left and the number on their right. The first and last number in the array do not count. If no numbers like this exist, return an empty array.

// Pseudocode:
// declare a function called biggerIndex with a single parameter, arr
    // instantiate a variable called resultArr with an initial value of an empty array
    // set a loop that iterates the length property of the arr object many times
        // instantiate a variable called left and assign it a value of arr at i - 1 index
        // instantiate a variable called right and assign it a value of arr at i + 1 index
        // set a condition to check if arr[i] is greater than left AND right
            // if true, call the push method of the resultArr passing arr at i'th index as an argument
    // return resultArr;

function biggerIndex(arr) {
    const resultArr = [];
  
    for (let i = 1; i < arr.length - 1; i++) {
      const left = arr[i - 1];
      const right = arr[i + 1];
      if (arr[i] > left && arr[i] > right) resultArr.push(arr[i]);
    }
  
    return resultArr;
  }
  
  console.log(biggerIndex([9, 8, 9, 6]));