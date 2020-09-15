// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.
// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

var numSpecial = function(mat) {
    let special = 0;
    
    for(let i = 0; i < mat.length; i++) {
        let xSum = 0;
        let ySum = 0;
        for(let j = 0; j < mat[i].length; j++) {
            xSum += mat[i][j];
            ySum += mat[j][i];   
        }
        if(xSum * ySum == 1) special++; 
    }
    
    return special;
};