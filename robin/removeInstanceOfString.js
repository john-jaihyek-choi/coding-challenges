// Time for something short and sweet - please write a function that removes the last vowel from each word in a sentence. Only remove the LAST instance of a vowel. For example, "moon" would turn into "mon".

// Pseudocode:
// declare a fucntion called removeLastVowel with a single parameter string
    // instantitate a variable called words and assign it a returned value of calling split method of the string object passing empty space as an argument;
    // instantitate a variable called result with an initial value of empty array;
    // set a loop that iterates length of the words object many times
        // set an inner loop that iterates length of the words at i'th index many times
            // instantiate a variable called lastVowel and assign it a returned value of calling match method of the j'th index of the i'th index of words object passing regex as an argument
            // set a condition to check if lastVowel is true
                // if true
                    // instantiate a variable called index and assign it a returned value of calling lastIndexOf method of words at i'th index passing 0th index of the lastVowel as an argument;
                    // call push method of the result object passing in concatenated value of:
                        // returend value of calling slice method of the i'th index of the words object passing 0 and index as an argument
                        // returned value of calling slice method of the i'th index of the words object passing index + 1 as an argument
                    // break out of the loop
    // return the returned value of calling join method of the result object passing empty space as an argument;

function removeLastVowel(string) {
    const words = string.split(' ');
    const result = [];
    for(let i = 0; i < words.length; i++) {
      for(let j = words[i].length - 1; j >= 0; j--) {
        const lastVowel = words[i][j].match(/[aeiouAEIOU]/);
        if(lastVowel){
          const index = words[i].lastIndexOf(lastVowel[0]);
          result.push(words[i].slice(0, index) + words[i].slice(index + 1));
          break;
        }
      }
    }
    return result.join(' ')
  }
  
console.log(removeLastVowel('hie robiun, Thaenk youa fori dailyu questioons!'));