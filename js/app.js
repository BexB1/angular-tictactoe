angular.module("TicTacToe", [])
  .controller("GameController", GameController);

function GameController() {
  var self = this;
  this.board = new Array(9);

  this.arrayX = []; // push IDs to these, pass to winConditions
  this.arrayO = [];

  this.turn = "O";

  this.winner = "";

  this.winConditions =[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

  this.clearBoard = function() {
    this.arrayX = [];
    this.arrayO = [];
    this.winner = "";
    for (var i = 0; i < 9; i++) {
      this.board[i] = "";
    }
  }

  this.winCheck = function(turnArray) {
    function win(a,b,c) {
      if (turnArray.includes(a) && turnArray.includes(b) && turnArray.includes(c)) {
        self.winner = "Game over! " + self.turn + " wins!";
      }
    }
    for (var i = 0; i < 8; i++) {
      win(this.winConditions[i][0], this.winConditions[i][1], this.winConditions[i][2]);
    }
  }

  this.move = function(index) {
    if (this.turn === "X") {
      this.board[index] = "X";
      this.arrayX.push(index);
      this.winCheck(this.arrayX);
    } else {
      this.board[index] = "O";
      this.arrayO.push(index);
      this.winCheck(this.arrayO);
    }
    this.turn = this.turn === "O" ? "X" : "O";
  }
}