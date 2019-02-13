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
  }

  addPlayer() {
    const frog = new Image();
    frog.src = 'https://www.spriters-resource.com/resources/sheets/86/88720.png';
    const player = new Player({
      game: this,
      canvas: this.canvas,
      image: frog,
      sX: 24,
      sY: 21,
      sWidth: 13,
      sHeight: 10,
      startX: this.canvas.width / 2,
      startY: this.canvas.height / 2,
      speed: this.playerSpeed,
      width: 13,
      height: 10
    });
    this.player = player;
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
    ctx.font = "12px Courier New";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + this.score, 10, 15);
  }

  drawHealth(ctx) {
    ctx.font = "12px Courier New";
    ctx.fillStyle = "black";
    ctx.fillText("Health: ", this.canvas.width - 125, 15);
  }

  drawHealthBar(ctx) {
    ctx.beginPath();
    ctx.rect(this.canvas.width - 62, 5, 50, 12);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(this.canvas.width - 61, 6, (this.player.health * 47), 10);
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

      this.gameObjects.forEach(object => object.draw(ctx));
      this.detectCollisions();
    }
  }

}

export default Game;