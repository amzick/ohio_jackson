import Game from './game';
import Player from './player';
import Collectable from './collectable';
import Projectile from './projectile';

// goals:
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

  
  const game = new Game({
    canvas: gameCanvas,
    player,
    coins: [coin, coin2],
    arrows: [testFire]
  });

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    game.draw(ctx);
  }

  animate();
});




// movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

