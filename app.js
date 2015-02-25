var globalBoard = [
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
var board;
var globalDifficultyLevel = 2;
var currentRowName;
$(document).ready(function(){
  createNewBoard()
  console.log("firstboard");});

var copyBoard = function(board){
  var results = [];
  for(var i=0; i < board.length; i++){
    results.push(board[i].slice());
  }
  return results;
}

var setDifficultyLevel = function(elem, level){
  if(elem.className === "num"){
    $(".whiteNum").addClass("num");
    $(".whiteNum").removeClass("whiteNum");
    elem.className = "whiteNum";
  }
  globalDifficultyLevel = level;
  createNewBoard();
};
  
var createNewBoard = function() {
  var elem;
    board = copyBoard(globalBoard);
    console.log("in createNewBoard");
    $(".sudokuBoard").empty();
    for(var i=0; i < 9; i++){
    currentRowName = "row"+ i;
    var indicesToShow = chooseNRandomOneThruNine(globalDifficultyLevel);
    console.log("rowName", currentRowName);
    var temp = '<tr class="'+currentRowName+'"></tr>';
    console.log(temp);
    console.log('board', $(".sudokuBoard"));
    $(".sudokuBoard").append(temp);
    for(var j=0; j < 9; j++){
      var numOrBlank = "";
      if(indicesToShow[j+1]){
        elem = '<td class="boardCell"><b>'+ board[i][j] + '</b></td>';
      }else{
        elem = '<td class="boardCell greyText" onclick="incrementNumber(this,['+i+', '+j+'])">'+ ""+ '</td>';
        board[i][j] = "";
      }
      console.log("ELEM: ", elem);
      $('.'+ currentRowName).append(elem);
    }
  }
};
var chooseNRandomOneThruNine = function(n){
  var oneThroughNine = {1:true, 2:true, 3:true, 4:true, 5:true, 6:true, 7:true, 8:true, 9:true};
  var results = {};
  while(Object.keys(results).length < n){
    var temp = Math.floor(Math.random()*Object.keys(oneThroughNine).length + 1);
    if(!results[temp]){
      results[temp]= true;
      delete oneThroughNine[temp];
    }
  }
  return results;
}
var incrementNumber = function(elem, boardIndexes){
  console.log('indices: ', boardIndexes);
  var row = boardIndexes[0];
  var column = boardIndexes[1];
  if(board[row][column] === 9 || board[row][column] === ""){
    elem.innerHTML = 1;
    board[row][column] = 1;
  }else{
    elem.innerHTML = board[row][column] + 1;
    board[row][column] += 1;
  }
}