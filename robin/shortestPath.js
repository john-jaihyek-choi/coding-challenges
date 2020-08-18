// We'd love to share one of the interview questions asked during some bootcamp students' first round interview at a Korean tech company. She was given one-dimensional points array L=[1, 3, 4, 8, 13, 17, 20]. The interviewer asked her to find a pair of the shortest distances, given the one-dimensional points. (Assume that the array of points is all sorted.). Can you ace the interview question?

// Pseudocode:
// declare a function called shortestPath with a single parameter, arr
    // instantiate a variable called pairs with an empty object as its initial value;
    // set a loop that iterates length property of the arr many times
        // set pairs at arr at i'th index minus arr at i - 1 index property equal to array with arr at i-1 as 0th index value and arr at i'th index as first index value
    // return the 0th index of the returned value of calling the values method of the Object object passing pairs as an arugment;

// Bruteforce Time Comp: O(n^2) Space Comp: O(1);
function shortestPath(arr) {
    let shortestPair;
    let shortestVal = arr[arr.length - 1] - arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] - arr[i] < shortestVal) {
          shortestVal = arr[j] - arr[i];
          shortestPair = [arr[i], arr[j]];
        }
      }
    }
  
    return shortestPair;
  }
  
  // Bruteforce Time Comp: O(n) Space Comp: O(n);
  function shortestPath(arr) {
    const pairs = {};
  
    for (let i = 1; i < arr.length; i++) {
      pairs[arr[i] - arr[i - 1]] = [arr[i - 1], arr[i]];
    }
  
    return Object.values(pairs)[0];
  }
  
  console.log(shortestPath([1, 3, 4, 8, 13, 17, 20]));
  