import Collectable from './collectable';
import Projectile from './projectile';

class Game {

  constructor(options) {
    this.score = 0;
    this.canvas = options.canvas;
    // import default player?
    this.player = options.player; 
    this.coins = options.coins || [];
    this.arrows = options.arrows || [];
    this.potions = options.potions || [];
    this.gameObjects = [].concat(this.coins, this.arrows, this.potions);
    this.projectileSpeed = 0.1;

    //functions
    this.detectCollisions = this.detectCollisions.bind(this);
    this.drawInfo = this.drawInfo.bind(this);
  }

  detectCollisions() {
    for (let i = 0; i < this.gameObjects.length; i++) {
      const obj = this.gameObjects[i];
      if (this.player.isCollidingWith(obj)) {
        this.player.hits(obj);
        this.score++;
        console.log(obj instanceof Collectable);
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
    this.drawInfo(ctx);
    this.player.draw(ctx);
    
    this.gameObjects.forEach(object => object.draw(ctx));
    this.detectCollisions();
  }

}

export default Game;