// Create a function that receives size (dimension) which returns strings that represents a grid

function makeChessBoard(size) {
    for(let i = 0; i < size; i++) {
        let row = ''
        if(i % 2 == 0) {
          for(let j = 0; j < size; j++) {
              if(j % 2 == 0) row += ' ';
              else row += '#';
          }
        } else {
          for(let j = 0; j < size; j++) {
            if(j % 2 == 0) row += '#';
          else row += ' ';
          }
        }
        console.log(row);
    }
}

makeChessBoard(8)