import Player from './player';
import Collectable from './collectable';
import Coin from './coin';
import Fruit from './fruit';
import Projectile from './projectile';

class Game {

  constructor(options) {
    this.canvas = options.canvas;
    // import default player?
    // this.player = options.player; 
    this.coins = options.coins || new Set();
    this.fruits = options.fruits || new Set();
    this.arrows = options.arrows || new Set();
    this.gameObjects = Array.from(new Set([...this.coins, ...this.arrows, ...this.fruits]));

    this.playerSpeed = 1;
    this.projectileSpeed = 0.1;

    this.score = 0;
    this.over = false;
    this.maxArrows = options.maxArrows || 1;
    this.maxFruits = options.maxFruits || 1;
    //functions
    this.detectCollisions = this.detectCollisions.bind(this);
    this.drawInfo = this.drawInfo.bind(this);
  }

  addPlayer() {
    this.player = Player.ohio(this);
  }

  updateGameObjects() {
    switch (true) {
      case (this.score < 10):
        this.maxArrows = 1;
        break;
      case (this.score < 20):
        this.maxArrows = 2;
        break;
      case (this.score < 30):
        this.maxArrows = 5;
        break;
      case (this.score < 50):
        this.maxArrows = 8;
        break;
      case (this.score < 75):
        this.maxArrows = 10;
        break;
      default:
        this.maxArrows = 100000;
        break;
    }
    this.gameObjects = Array.from(new Set([...this.coins, ...this.arrows, ...this.fruits]));
  }

  addCoin() {
    this.coins.add(Coin.random(this));
    this.updateGameObjects();
  }

  addArrow() {
    this.arrows.add(Projectile.random(this));
    this.updateGameObjects();
  }

  addFruit() {
    this.fruits.add(Fruit.fresh(this));
    this.updateGameObjects();
  }

  detectCollisions() {
    for (let i = 0; i < this.gameObjects.length; i++) {
      const obj = this.gameObjects[i];
      if (this.player.isCollidingWith(obj)) {
        this.player.hits(obj);
        if (obj instanceof Collectable) {
          this.score++;
          if (this.player.health < 1) {
            this.player.health += 0.01;
          }
        }
        else if (obj instanceof Projectile) {
          this.player.health -= 0.1;
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

      if (this.arrows.size < this.maxArrows) {
        this.addArrow();
      }

      if (this.fruits.size < this.maxFruits) {
        this.addFruit();
      }

      this.gameObjects.forEach(object => {
        object.draw(ctx);
        object.update();
      });
      this.detectCollisions();
    }
  }

}

export default Game;