import Player from './player';
import Collectable from './collectable';

document.addEventListener("DOMContentLoaded", () => {
  // set up the canvas
  const gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 320;
  gameCanvas.height = 224;
  const ctx = gameCanvas.getContext('2d');

  // set up the player in the middle of the board

  const frog = new Image();
  frog.src = '../images/88720.png';
  const player = new Player({
    canvas: gameCanvas,
    image: frog,
    sX: 24,
    sY: 21,
    sWidth: 13,
    sHeight: 10,
    startX: gameCanvas.width / 2,
    startY: gameCanvas.height / 2,
    speed: 0.5,
    width: 13,
    height: 10
  });

  const coinImg = new Image();
  coinImg.src = '../images/coin.png';
  const coin = new Collectable({
    canvas: gameCanvas,
    image: coinImg,
    sX: 6,
    sY: 6,
    sWidth: 60,
    sHeight: 60,
    startX: 50,
    startY: 50,
    speed: 0.3,
    dX: 1,
    width: 5,
    height: 5
  });

  const coin2 = new Collectable({
    canvas: gameCanvas,
    image: coinImg,
    sX: 6,
    sY: 6,
    sWidth: 60,
    sHeight: 60,
    startX: 100,
    startY: 100,
    speed: 0.3,
    dX: 1,
    width: 5,
    height: 5,
    range: 50,
    direction: "V"
  });

  // render, draw every 10 ms
  var interval = setInterval(draw, 10);
  function draw() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    player.draw(ctx);
    coin.draw(ctx);
    coin2.draw(ctx);
    }





});




// movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

