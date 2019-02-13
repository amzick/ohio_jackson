import Game from './game';
import Player from './player';
import Collectable from './collectable';
import Coin from './coin';
import Projectile from './projectile';

// goals:
// render walls and ground for canvas, put score info in seperate canvas object
// move stuff in 'entry' to 'game' class that can be passed into objects
// 1. write collides function for objects - collectables disappear
// 2. write arrows to spam randomly from all sides
// 3. write potion and coin collectable generators
// 4. Game over?
// 5. 

document.addEventListener("DOMContentLoaded", () => {
  // set up the canvas
  const gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 320;
  gameCanvas.height = 224;
  const ctx = gameCanvas.getContext('2d');


  const snake = new Image();
  snake.src = "https://www.spriters-resource.com/resources/sheets/84/87238.png";
  const arrowImg = new Image();
  arrowImg.src = "https://s3.amazonaws.com/letsgoeros-dev/arrows.png";

  const testFire = new Projectile({
    canvas: gameCanvas,
    sX: 41,
    sY: 35,
    sWidth: 3,
    sHeight: 19,
    startX: gameCanvas.width + 10,
    startY: -10,
    speed: Math.random() * (1 - 0.1) + 0.1,
    width: 3,
    height: 19
  });


  const game = new Game({
    canvas: gameCanvas,
  });

  const jungleImg = new Image();
  // jungleImg.src = "https://www.spriters-resource.com/resources/sheets/103/106034.png";
  jungleImg.src = "https://www.spriters-resource.com/resources/sheets/2/1633.png";
  function drawBorder(ctx) {
    // sides
    for (let i = 0; i < 14; i++) {
      ctx.drawImage(jungleImg, 1061, 363, 47, 51, 0, i * 16, 16, 16);
      ctx.drawImage(jungleImg, 1061, 363, 47, 51, gameCanvas.width - 16, i * 16, 16, 16);
    }
    // top and bottom
    for (let i = 0; i < 20; i++) {
      ctx.drawImage(jungleImg, 1061, 363, 47, 51, i * 16, 0, 16, 16);
      ctx.drawImage(jungleImg, 1061, 363, 47, 51, i * 16, gameCanvas.height - 16, 16, 16);
    }
  }

  const ground = new Image();
  ground.src = "https://www.spriters-resource.com/resources/sheets/56/59176.png";
  function drawGround(ctx) {
    for (let i = 1; i < 19; i++) {
      for (let j = 1 ; j < 13; j++) {
        ctx.drawImage(ground,762,267,28,28,i*16,j*16,16,16);
      }
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawBorder(ctx);
    drawGround(ctx);
    game.draw(ctx);
  }

  animate();
});




// movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

