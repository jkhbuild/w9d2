const View = require("./ttt-view.js")
const Game = require("../ttt_node/game.js")

document.addEventListener("DOMContentLoaded", () => {
  window.game = Game
  window.view = View
});


let game = new Game();
let view = new View();
