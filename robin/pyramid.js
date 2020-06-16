// Traveling in Cairo, Egypt, with the Twitter executive team, you encounter thieves in the middle of a desert. These thieves heard about your travels from an informant a month prior to your trip, so they knew the great Twitter team was going to be there. It turns out that the thieves were former interviewees at Twitter who didn't get hired into the software engineering positions that they had applied for. With anger, they ask you the following question:  

// Write a function that accepts a positive number X.

// The function should console log a pyramid shape with X levels using the # (Twitter's invention) character. Make sure the pyramid has spaces on both the left and right hand sides

function pyramid (levels) {
    const mid = Math.floor((levels * 2 - 1) / 2);
  
    for(let i = 0; i < levels; i++) {
      let string = '';
  
      for(let j = 0; j < levels * 2 - 1; j++) {
        if(mid - i <= j && mid + i >= j) {
          string += '#';
        } else {
          string += ' ';
        }
      }
      console.log(string);
    }
  }
  
  console.log(pyramid(3));