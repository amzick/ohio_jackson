import Player from './player';
import Collectable from './collectable';
import Projectile from './projectile';

// goals:
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

  // this array will be used to check that all objects are colliding with each other
  const gameObjects = [];

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

  // gameObjects.push(player);
  gameObjects.push(coin);
  gameObjects.push(coin2);
  gameObjects.push(testFire);

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
    ctx.rect(gameCanvas.width - 61, 6, (player.health * 47), 10);
    if (player.health <= 0.3) {
      ctx.fillStyle = 'red';
    } else if (player.health <= 0.6) {
      ctx.fillStyle = 'yellow';
    } else {
      ctx.fillStyle = 'green';
    }
    ctx.fill();
  };

  // detect collisions
  // const detectCollisions = (gameObjects) => {
  //   for (let i = 0; i < gameObjects.length; i++) {
  //     for (let j = 0; j < gameObjects.length; j++) {
  //       const obj1 = gameObjects[i];
  //       const obj2 = gameObjects[j];
  //       if (obj1.isCollidingWith(obj2) && i !== j) {
          
  //         obj1.hits(obj2);
  //         console.log(obj1 instanceof Player);
  //       }
  //     }
  //   }
  // };

  const detectCollisions = (gameObjects) => {
    for (let i=0; i < gameObjects.length; i++) {
      const obj = gameObjects[i];
      if (player.isCollidingWith(obj)) {
        player.hits(obj);
        console.log(obj instanceof Collectable);
      }
    }
  };


  // console.log(gameObjects);
  // render, draw every 10 ms
  // var interval = setInterval(draw, 10);
  // function draw() {
  //   ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  //   drawScore();
  //   drawHealth();
  //   drawHealthBar();
  //   gameObjects.forEach((object) => object.draw(ctx));
  //   detectCollisions(gameObjects);
  // }


  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawScore();
    drawHealth();
    drawHealthBar();
    player.draw(ctx);
    gameObjects.forEach(object => object.draw(ctx));
    detectCollisions(gameObjects);
    // simpleDetect();
  }

  animate();



});




// movement:
// https://www.kirupa.com/canvas/moving_shapes_canvas_keyboard.htm

