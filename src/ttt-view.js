const Board = require("../ttt_node/board.js")

class View {
  constructor(game, el) {
    this.game = game;
    this.el = document.getElementsByClassName("grid")
    this.setupBoard()
  }

  setupBoard() {
    this.board = new Board()
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

const body = document.getElementsByTagName("body")
console.log(body)

module.exports = View;
