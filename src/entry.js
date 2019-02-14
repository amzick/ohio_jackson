import Game from './game';
import Player from './player';
import Collectable from './collectable';
import Coin from './coin';
import Projectile from './projectile';

// goals:
// 4. Game over?
// 5. 

document.addEventListener("DOMContentLoaded", () => {
  // set up the canvas
  const gameCanvas = document.getElementById("game-canvas");
  gameCanvas.width = 320;
  gameCanvas.height = 224;
  const ctx = gameCanvas.getContext('2d');

  let game = new Game({
    canvas: gameCanvas,
  });

  function togglePause(event) {
    if (event.key === "Enter") {
      game.paused ? game.paused = false : game.paused = true;
    }
  }

  document.addEventListener("keydown",togglePause);

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
      for (let j = 1; j < 13; j++) {
        ctx.drawImage(ground, 762, 267, 28, 28, i * 16, j * 16, 16, 16);
      }
    }
  }

  function animate() {

    if (game.over) {
      document.removeEventListener("keydown", togglePause);
      game.drawGameOver(ctx);
      document.addEventListener("keyup", function x(event) {
        if (event.key === "Enter") {
          game = new Game({
            canvas: gameCanvas,
          });
          // removeEventListener only works with a named function?
          document.removeEventListener("keyup",x);
          document.addEventListener("keydown", togglePause);
          animate();
        }
      });
      return;
    }
    
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawBorder(ctx);
    drawGround(ctx);
    game.draw(ctx);
  }

  if (!game.over) {
    animate();
  }
});




// movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

