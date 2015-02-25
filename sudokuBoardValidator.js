var board = [
        [9, 5, 3, 2, 1, 4, 7, 6, 8], 
        [2, 7, 6, 8, 5, 3, 4, 1, 9],
        [8, 1, 4, 6, 7, 9, 2, 3, 5],
        [7, 4, 8, 5, 3, 1, 6, 9, 2],
        [6, 9, 1, 7, 4, 2, 5, 8, 3],
        [5, 3, 2, 9, 6, 8, 1, 7, 4], 
        [1, 6, 9, 4, 8, 5, 3, 2, 7],
        [3, 2, 5, 1, 9, 7, 8, 4, 6],
        [4, 8, 7, 3, 2, 6, 9, 5, 1]
      ];
var boardCoordinates = [];
var oneThroughNine;
var currentColumn;

var checkRows = function(){
  //if numbers in all rows 1-9 and unique return true
  for(var i=0; i < 9; i++){
    oneThroughNine = {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true};
    for(var j=0; j < 9; j++){
      //i is row, j is column
      if(oneThroughNine[board[i][j]]){
        delete oneThroughNine[board[i][j]];
      }
    }
    if(Object.keys(oneThroughNine).length > 0){
      return false;
    }
  }
  return true;
}

var checkColumns = function(){
  //if numbers in all columns 1-9 and unique return true
  for(var i=0; i < 9; i++){
    oneThroughNine = {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true};
    for(var j=0; j < 9; j++){
      //j is row, i is column
      if(oneThroughNine[board[j][i]]){
        delete oneThroughNine[board[j][i]];
      }
    }
    if(Object.keys(oneThroughNine).length > 0){
      return false;
    }
  }
  return true;
}

var checkList = function(list){
  oneThroughNine = {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true};
  for(var i=0; i < 9; i++){
    if(oneThroughNine[list[i]]){
      delete oneThroughNine[list[i]];
    }
  }
  if(Object.keys(oneThroughNine).length > 0){
    return false;
  }
  return true;
}

var checkSquares = function(){
  //if numbers in all 3x3 squares 1-9 and unique return true
  var currentSquare;
  //this loop goes through square columns left to right
  for(var i=0; i < 9; i+=3){
    //this loop goes through square rows top to bottom within current square column of above loop
      currentSquare = [];
      oneThroughNine = {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true};
      //this loop starts at loop start in j to create row (j -> j+3)
      for(var k=j; k < j+3; k++){
        //iterates through
        for(var l=i; l < i+3; l++){
          currentSquare.push(board[k][l]);
        }
      }
      if(!checkList(currentSquare)){
        return false;
      }
    }
  }
  return true;
}


var isValidBoard = function(){
  if(checkRows() && checkColumns() && checkSquares()){
    return true;
  }else{
    return false;
  }
}

var gameFinished = function(){
  if(isValidBoard()){
    alert("You won!");
  }else{
    alert("Sorry, this is an invalid solution");
  }
}


