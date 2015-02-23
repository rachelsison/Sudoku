var board;
var boardCoordinates = [];
var oneThroughNine;
var currentColumn

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

var checkSquares = function(){
  //if numbers in all 3x3 squares 1-9 and unique return true
}


var isValidMove = function(){
  if(checkRows() && checkColumns() && checkSquares()){
    return true;
  }else{
    return false;
  }
}

