// Today you are tasked with calculating how much happiness there is. How can you do that? By counting the number of smiley faces in an array of strings! You should write a function that accepts an array of strings and returns the number of smiley faces inside it. A smiley face is something that:

// Psuedocode:
// declare a function called countSmiles with a single parameter, smileArr
    // instantiate a variable called smileTypes with a predefined sets of a valid smile as a property with a value of true;
    // instantiate a variable called count with an initial value of 0;
    // set a loop that iterates the length of the smileArr many times;
        // set a condition to check if smileArr at i'th index property of the smileType object is valid;
            // if true, increment the value of count by 1
    // return count;

    function countSmiles(smileArr) {
        const smileTypes = {
          ":)": true,
          ":D": true,
          ";)": true,
          ";D": true,
          ":-)": true,
          ":-D": true,
          ":~)": true,
          ":~D": true,
          ";-)": true,
          ";-D": true,
          ";~)": true,
          ";~D": true,
        };
        let count = 0;
      
        for (let i = 0; i < smileArr.length; i++) {
          if (smileTypes[smileArr[i]]) {
            count++;
          }
        }
      
        return count;
      }
      
      console.log(countSmiles([":-)", ":)", "-D"]));