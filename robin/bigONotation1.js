// During your second round interview with a senior engineer, she asks you to determine the time complexity for the following function:
// You have 5 minutes to think about it and tell her what the time complexity is and why?

const countUpAndDown = (n) => {
    // Time / Space Complexity
    //time./ space
    console.log("You are going up!"); // O(1) / O(1);
  
    for (let i = 1; i < n; i++) {
      console.log(i);
    } // O(n) / O(1);
  
    console.log("At the top!\nGoing down..."); // O(1) / O(1);
  
    for (let j = n - 1; j >= 0; j--) {
      console.log(j);
    } // O(n) / O(1);
  
    console.log("Back down. Bye!");
  };
  
  // This function is a Linear Time (O(n)) complexity function.
  // This is because:
  // line 5 will operate n many times which means that the console.log() operation will depend on the numbers of input (n).
  // line 9 holds the same logic, and it will operate n-1 many times.
  // Therefore, the answer is (O(n)) Time with O((1)) Space Complexity
  