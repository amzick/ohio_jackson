import Player from './player';
import Collectable from './collectable';
import Coin from './coin';
import Projectile from './projectile';

class Game {

  constructor(options) {
    this.canvas = options.canvas;
    // import default player?
    // this.player = options.player; 
    this.coins = options.coins || new Set();
    this.potions = options.potions || new Set();
    this.arrows = options.arrows || new Set();
    this.gameObjects = Array.from(new Set([...this.coins, ...this.arrows, ...this.potions]));

    this.playerSpeed = 0.5;
    this.projectileSpeed = 0.1;

    this.score = 0;
    this.over = false;
    //functions
    this.detectCollisions = this.detectCollisions.bind(this);
    this.drawInfo = this.drawInfo.bind(this);
    this.addCoin = this.addCoin.bind(this);
  }

  addPlayer() {
    const playerImg = new Image();
    // playerImg.src = 'https://www.spriters-resource.com/resources/sheets/86/88720.png';
    playerImg.src = "https://www.spriters-resource.com/resources/sheets/107/110099.png";
    const player = new Player({
      game: this,
      canvas: this.canvas,
      image: playerImg,
      sX: 19,
      sY: 21,
      sWidth: 13,
      sHeight: 20,
      startX: this.canvas.width / 2,
      startY: this.canvas.height / 2,
      speed: this.playerSpeed,
      width: 16,
      height: 20
    });
    this.player = player;
  }

  updateGameObjects() {
    this.gameObjects = Array.from(new Set([...this.coins, ...this.arrows, ...this.potions]));
  }

  addCoin() {
    const range = Math.random() * (25-7) +7;
    const validStartX = Math.random() * (this.canvas.width - 15 - 16 - range) + (16 + range);
    const validStartY = Math.random() * (this.canvas.height - 15 - 16 - range) + (16 + range);
    
    const direction = ["V", "H"][Math.floor(Math.random() * (2 - 0) + 0)];
    const switchDirection = [true, false][Math.floor(Math.random() * (2 - 0) + 0)];
    const coin = new Coin({
      game: this,
      sX: 6,
      sY: 6,
      sWidth: 60,
      sHeight: 60,
      startX: validStartX,
      startY: validStartY,
      speed: 0.3,
      dX: 1,
      width: 5,
      height: 5,
      range,
      direction,
      switchDirection
    });
    this.coins.add(coin);
    this.updateGameObjects();
  }

  detectCollisions() {
    for (let i = 0; i < this.gameObjects.length; i++) {
      const obj = this.gameObjects[i];
      if (this.player.isCollidingWith(obj)) {

        this.player.hits(obj);
        if (obj instanceof Collectable) {
          this.score++;
        }
        else if (obj instanceof Projectile) {
          this.player.health -= 0.01;
          if (this.player.health <= 0) {
            this.over = true;
            window.alert("You lose");
            document.location.reload();
          }
        }
      }
    }
  }

  drawScore(ctx) {
    ctx.font = "10px Courier New";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + this.score, 8, 12);
  }

  drawHealth(ctx) {
    ctx.font = "12px Courier New";
    ctx.fillStyle = "white";
    ctx.fillText("Health: ", this.canvas.width - 125, 12);
  }

  drawHealthBar(ctx) {
    ctx.beginPath();
    ctx.rect(this.canvas.width - 62, 3, 50, 10);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(this.canvas.width - 61, 4, (this.player.health * 47), 8);
    if (this.player.health <= 0.3) {
      ctx.fillStyle = 'red';
    } else if (this.player.health <= 0.6) {
      ctx.fillStyle = 'yellow';
    } else {
      ctx.fillStyle = 'green';
    }
    ctx.fill();
  }

  drawInfo(ctx) {
    this.drawScore(ctx);
    this.drawHealth(ctx);
    this.drawHealthBar(ctx);
  }

  draw(ctx) {
    if (!this.player) {
      this.addPlayer();
    }

    if (!this.over) {
      this.drawInfo(ctx);
      this.player.draw(ctx);

      if (this.coins.size <= 20) {
        this.addCoin();
      }
      this.gameObjects.forEach(object => object.draw(ctx));
      this.detectCollisions();
    }
  }

}

export default Game;