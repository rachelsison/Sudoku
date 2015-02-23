var _ = require('lodash');
var rowNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var board = [];
var columns = {0:[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[];, 7:[], 8:[]};
var nineByNineSquares = {0:[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[];, 7:[], 8:[]};

var createEmptyBoard = function(newBoard){
  for(var i=0; i < 9; i++){
    newBoard.push([]);
  }
}

createEmptyBoard(board);

var populateBoard = function(board, rowNumbers){
  var currentColumn = []; 
  //iterates through every row in board
  var checkSquareForNumber = function(boardIndex, number){
    var row = boardIndex[0];
    var column = boardIndex[1];
    var currentSquare;
    var rowIndexes;
    var columnIndexes;
    var findSquareIndexParameters = function(columnOrRow){
      var startIndex;
      var endIndex;
      if(columnOrRow <= 2){
        startIndex = 0;
        endIndex = 2;
      }else if(ColumnOrRow <= 5){
        startIndex = 3;
        endIndex = 5;
      }else{
        startIndex = 6;
        endIndex = 8;
      }
      return [startIndex, endIndex];
    }
    var createSquare = function(){
      currentSquare = [];
      for(var i=rowIndexes[0]; i <= rowIndexes[1]; i++){
        currentSquare.concat(board[i].slice(columnIndexes[0], columnIndexes[1]));   
      }
      return currentSquare;
    }
    rowIndexes = findSquareIndexParameters(row);
    columnIndexes = findSquareIndexParameters(column);
    
    return _.includes(createSquare(), number);
  }

  for(var i=0; i < rowNumbers.length; i++){
    for(var j=0; j < rowNumbers.length; j++){
      //generate a random number between 0 and length of rowNumbers
      var tempIndex = tempIndex = Math.floor(Math.random()*rowNumbers.length - 1);
      if(i > 0){
        //sets current column to empty
        currentColumn = [];
        for(var k=0; k < j; k++){
          currentColumn.push(board[k][i]);
        }
         //IF it's not already in the column
         //push the spliced index of that random number to board[i][j]
      }else{
        if(currentColumn.length){
          while(_.includes(currentColumn, tempIndex){
            tempIndex = Math.floor(Math.random()*rowNumbers.length - 1);
          }
          board[i][j] = rowNumbers.splice(tempIndex, 1) 
          if()
        }
      }
    }
  }
}
