import Player from './player';

document.addEventListener("DOMContentLoaded", () => {
  // set up the canvas
  const gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 320;
  gameCanvas.height = 224;
  const ctx = gameCanvas.getContext('2d');

  // set up the player in the middle of the board
  const player = new Player({
    canvas: gameCanvas,
    startX: gameCanvas.width / 2,
    startY: gameCanvas.height / 2,
    speed: 1,
    width: 10,
    height: 10
  });

  // render, draw every 10 ms
  var interval = setInterval(draw, 10);
  function draw() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    player.draw(ctx);
    // ctx.fillStyle = "purple";
    // ctx.fillRect(0,0,10,10);
  }





});




// movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

