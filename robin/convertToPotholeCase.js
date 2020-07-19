// Some programming languages like Python prefers Pothole case over Camel case.
// For instance: in JavaScript, you’d write yellowMonkey but in Python you’d write yellow_monkey. In case you forget, you should just build a function where you convert any string in Camel case to Pothole case.

function convertToPotholeCase(string) {
    const regex = /[^a-zA-Z0-9]/g
    const words = string.toLowerCase().split(regex);
    const result = [words[0]];
    for(let i = 1; i < words.length; i++) {
      let test = words[i][0].toUpperCase();
      for(let j = 1; j < words[i].length; j++) {
        test += words[i][j];
      }
      result.push(test);
    }
    return result.join('');
}

convertToPotholeCase('HI ROBIN');