import Player from './player';
import Collectable from './collectable';
import Projectile from './projectile';

document.addEventListener("DOMContentLoaded", () => {
  // set up the canvas
  const gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 320;
  gameCanvas.height = 224;
  const ctx = gameCanvas.getContext('2d');

  // set up the player in the middle of the board

  const frog = new Image();
  frog.src = 'https://www.spriters-resource.com/resources/sheets/86/88720.png';
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
  coinImg.src = 'https://www.spriters-resource.com/resources/sheets/107/109971.png';
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


  const snake = new Image();
  snake.src = "https://www.spriters-resource.com/resources/sheets/84/87238.png";
  snake.scr = '../images/snake.png'

  const testFire = new Projectile({
    canvas: gameCanvas,
    image: snake,
    sX: 83,
    sY: 112,
    sWidth: 18,
    sHeight: 17,
    startX: gameCanvas.width + 10,
    startY: -10,
    speed: 0.1,
    width: 18,
    height: 17
  });

  // should score be its own file..? or maybe what is entry now will become game
  const score = 0;
  const drawScore = () => {
    ctx.font = "12px Courier New";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 10, 15);
  };

  const drawHealth = () => {
    ctx.font = "12px Courier New";
    ctx.fillStyle = "black";
    ctx.fillText("Health: ", gameCanvas.width - 125, 15);
  };

  const drawHealthBar = () => {
    ctx.beginPath();
    ctx.rect(gameCanvas.width - 62, 5, 50, 12);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(gameCanvas.width - 61, 6, (player.health*47), 10);
    if (player.health <= 0.3) {
      ctx.fillStyle = 'red';
    } else if (player.health <= 0.6) {
      ctx.fillStyle = 'yellow';
    } else {
      ctx.fillStyle = 'green';
    }
    ctx.fill();
  };
  // render, draw every 10 ms
  var interval = setInterval(draw, 10);
  function draw() {
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawScore();
    drawHealth();
    drawHealthBar();
    player.draw(ctx);
    coin.draw(ctx);
    coin2.draw(ctx);
    testFire.draw(ctx);
  }





});




// movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

