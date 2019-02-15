import Player from './player';
import Coin from './coin';
import Fruit from './fruit';
import Projectile from './projectile';
import SpeedBoost from './speed_boost';
import Audio from './audio';

class Game {

  constructor(options) {
    this.canvas = options.canvas;
    // import default player?
    // this.player = options.player; 
    this.coins = options.coins || new Set();
    this.arrows = options.arrows || new Set();
    this.fruits = options.fruits || new Set();
    this.powerUps = options.powerUps || new Set();
    this.gameObjects = Array.from(new Set([...this.coins, ...this.arrows, ...this.fruits, ...this.powerUps]));

    this.playerSpeed = 1;
    this.projectileSpeed = 0.1;

    this.score = 0;
    this.over = false;
    this.maxCoins = options.maxCoins || 20;
    this.maxArrows = options.maxArrows || 1;
    this.maxFruits = options.maxFruits || 1;
    this.maxPowerUps = options.maxPowerUps || 0;
    this.disablePowerUps = false;
    this.boosted = false; //in the boosted state I'll render a blue bar showing the remaining time left

    this.paused = false;
    this.begun = options.begun || false;
    //functions
    this.detectCollisions = this.detectCollisions.bind(this);
    this.drawInfo = this.drawInfo.bind(this);

    this.theme = options.theme || new Audio(true);
    this.muted = options.muted || false;

  }

  addPlayer() {
    this.player = Player.ohio(this);
  }

  updateGameObjects() {
    switch (true) {
      case (this.score < 10):
        this.maxArrows = 1;
        break;
      case (this.score < 25):
        this.maxArrows = 2;
        break;
      case (this.score < 30):
        this.maxArrows = 3;
        this.maxFruits = 2;
        break;
      case (this.score < 50):
        this.maxArrows = 5;
        this.maxPowerUps = 1;
        break;
      case (this.score < 75):
        this.maxArrows = 8;
        this.maxFruits = 3;
        break;
      case (this.score < 100):
        this.maxArrows = 10;
        break;
      case (this.score < 125):
        this.maxArrows = 12;
        break;
      case (this.score < 150):
        this.maxArrows = 15;
        this.maxFruits = 5;
        break;
      case (this.score < 200):
        this.maxArrows = 20;
        break;
      case (this.score < 250):
        this.maxArrows = 22;
        break;
      default:
        this.maxArrows = 100000;
        this.maxCoins = 100000;
        break;
    }
    this.gameObjects = Array.from(new Set([...this.coins, ...this.arrows, ...this.fruits, ...this.powerUps]));
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

  addSpeedBoost() {
    this.powerUps.add(SpeedBoost.generate(this));
    this.updateGameObjects();
  }

  detectCollisions() {
    for (let i = 0; i < this.gameObjects.length; i++) {
      const obj = this.gameObjects[i];
      if (this.player.isCollidingWith(obj)) {
        this.player.hits(obj);
        if (obj instanceof Coin) {
          this.score++;
          if (!this.muted) new Audio().playCoin();
          if (this.player.health < 1) {
            this.player.health += 0.01;
          }
        } else if (obj instanceof Fruit) {
          if (!this.muted) new Audio().playFruit();
          if (this.player.health <= 0.9) {
            this.player.health += 0.1;
          } else {
            this.player.health = 1;
          }
        } else if (obj instanceof Projectile) {
          if (!this.boosted) {
            this.player.health -= 0.1;
            if (!this.muted) new Audio().playHurt();
          }
          if (this.player.health <= 0) {
            if (!this.muted) new Audio().playDeath();
            this.theme.stopTheme();
            this.over = true;
          }
        } else if (obj instanceof SpeedBoost) {
          if (!this.muted) new Audio().playBoost();
          this.disablePowerUps = true;
          // I'm doing this so I can render a bar
          this.powerUpTime = 10000;
          this.boosted = true;
          // ten seconds of speed boost, 15 seconds of no powerups
          this.maxPowerUps = 0;
          this.player.speed *= 2;
          // had a bug where the speed changed caused the character to leap off the screen,
          // since the position is partially the calculation of the change from the start times the speed, this quick reset helps.. a little
          this.player.dX /= 3;
          // dY doesn't like being divided by 2 ...
          this.player.dY /= 1.5;
          this.theme.theme.playbackRate = 1.5;
          window.setTimeout(() => {
            this.player.speed /= 2;
            this.boosted = false;
            this.theme.theme.playbackRate = 1;

          }, 10000);
          window.setTimeout(() => {
            this.maxPowerUps = 1;
            this.disablePowerUps = false;
          }, 15000);
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
    ctx.font = "10px Courier New";
    ctx.fillStyle = "white";
    ctx.fillText("Health: ", this.canvas.width - 125, 12);
  }

  drawHealthBar(ctx) {
    ctx.beginPath();
    ctx.rect(this.canvas.width - 72, 3, 50, 10);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(this.canvas.width - 71, 4, (this.player.health * 47), 8);
    if (this.player.health <= 0.3) {
      ctx.fillStyle = 'red';
    } else if (this.player.health <= 0.6) {
      ctx.fillStyle = 'yellow';
    } else {
      ctx.fillStyle = 'green';
    }
    ctx.fill();
  }

  drawBoost(ctx) {
    ctx.font = "10px Courier New";
    ctx.fillStyle = "#16ffd0";
    ctx.fillText("Boost: ", 70, 12);
  }

  drawBoostBar(ctx) {
    ctx.beginPath();
    ctx.rect(109, 3, 50, 10);
    ctx.strokeStyle = "#f50fd0";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "#16ffd0";
    ctx.fillRect(110, 4, (this.powerUpTime / 10000) * 47, 8);
  }

  drawInfo(ctx) {
    this.drawScore(ctx);
    this.drawHealth(ctx);
    this.drawHealthBar(ctx);

    if (this.boosted) {
      this.powerUpTime -= 17;
      this.drawBoost(ctx);
      this.drawBoostBar(ctx);
    }
  }

  drawGameOver(ctx) {
    ctx.font = "50px Courier New";
    ctx.fillStyle = "red";
    ctx.fillText("GAME", this.canvas.width / 3 - 8, (this.canvas.height / 2) - 16);
    ctx.fillText("OVER", this.canvas.width / 3 - 8, (this.canvas.height / 2) + 16);
    ctx.font = "20px Courier New";
    ctx.fillText("Press Enter to Try Again", 16, (this.canvas.height / 2) + 64);
  }

  drawPauseScreen(ctx) {
    ctx.font = "50px Courier New";
    ctx.fillStyle = "white";
    ctx.fillText("PAUSED", this.canvas.width / 4 - 8, (this.canvas.height / 2) - 16);
    ctx.fillText("GAME", this.canvas.width / 3 - 8, (this.canvas.height / 2) + 16);
  }

  drawStartScreen(ctx) {
    const portrait = new Image();
    portrait.src = "https://www.sideshowtoy.com/wp-content/uploads/2016/03/indiana-jones-temple-of-doom-sixth-scale-feature-3914-2.jpg";
    ctx.drawImage(portrait, 0, 0, 990, 600, 0, 0, 320, 224);
    ctx.font = "50px Courier New";
    ctx.fillStyle = "white";
    ctx.fillText("OHIO", 8 - 8, 64);
    ctx.fillText("JACKSON", 8 - 8, 96);
    ctx.font = "15px Courier New";
    ctx.fillText("and the Quest for El Dorado", 4, 114);
    ctx.font = "10px Courier New";
    ctx.fillText("Use the arrow keys to move", 4, 130);
    ctx.fillText("Hit enter to pause the game", 4, 140);
    ctx.fillText("Press m to toggle audio", 4, 150);
    ctx.font = "30px Courier New";
    ctx.fillText("PRESS", 2, 180);
    ctx.fillText("ENTER", 2, 200);

  }

  draw(ctx) {
    if (!this.player) {
      this.addPlayer();
    }

    if (!this.over && !this.paused) {
      this.drawInfo(ctx);
      this.player.draw(ctx);

      if (this.coins.size <= this.maxCoins) {
        this.addCoin();
      }

      if (this.arrows.size < this.maxArrows) {
        this.addArrow();
      }

      if (this.fruits.size < this.maxFruits) {
        this.addFruit();
      }

      if (this.powerUps.size < this.maxPowerUps && !this.disablePowerUps) {
        this.addSpeedBoost();
      }

      this.gameObjects.forEach(object => {
        object.draw(ctx);
        object.update();
      });
      this.detectCollisions();
    } else if (this.over) {
      this.drawGameOver(ctx);
    } else if (this.paused) {
      this.drawPauseScreen(ctx);
    }
  }

  toggleMute() {
    if (this.muted) {
      this.theme.theme.volume = 0.4;
      this.muted = false;
      this.theme.playTheme();
    } else {
      this.theme.theme.volume = 0;
      this.muted = true;
    }
  }
}

export default Game;