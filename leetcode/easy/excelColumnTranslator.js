// #171 Excel Sheet Column Number
// Given a column title as appear in an Excel sheet, return its corresponding column number.

var titleToNumber = function(s) {
    let columnNum = 0;
    let reversedColumn = s.split('').reverse();

    for(let i = 0; i < reversedColumn.length; i++) {
        columnNum += (reversedColumn[i].charCodeAt(0) - 64) * Math.pow(26, i)
    }
    
    return columnNum
};